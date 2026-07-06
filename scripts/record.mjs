#!/usr/bin/env node
import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, rmSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const VIDEOS_DIR = resolve(ROOT, 'src', 'assets', 'projects');
const TEMP_DIR = resolve(ROOT, 'tmp', 'videos');

const VIEWPORT = { width: 1280, height: 800 };
const RECORD_SECONDS = 5;
const SEAMLESS_PROJECTS = ['deleatur', 'trivia-game']; // static UIs, safe to reverse-pad

function triviaInteractions() {
  const actions = [
    { type: 'wait', ms: 1000 },
    { type: 'click', selector: 'input[value="Start Quiz"]' },
    { type: 'wait', ms: 1000 },
  ];
  for (let i = 0; i < 10; i++) {
    actions.push({ type: 'click', selector: 'button' });
    actions.push({ type: 'wait', ms: 1500 });
  }
  return actions;
}

const PROJECTS = [
  {
    name: 'deleatur',
    url: 'https://deleaturservicioseditoriales.vercel.app/',
    interactions: [],
  },
  {
    name: 'mytasks',
    url: 'https://mytasksargentina.netlify.app',
    interactions: [
      { type: 'click', selector: 'input[name="inputTodo"]' },
      { type: 'type', text: 'Buy the food for tonight' },
      { type: 'press', key: 'Enter' },
      { type: 'wait', ms: 400 },
      { type: 'click', selector: 'input[name="inputTodo"]' },
      { type: 'type', text: 'Finish the portfolio project' },
      { type: 'press', key: 'Enter' },
      { type: 'wait', ms: 400 },
      { type: 'click', selector: 'input[name="inputTodo"]' },
      { type: 'type', text: 'Schedule dentist appointment' },
      { type: 'press', key: 'Enter' },
      { type: 'wait', ms: 600 },
      { type: 'click', selector: '.checkbox' },
      { type: 'wait', ms: 400 },
      { type: 'click', selector: '.completedAccordion' },
      { type: 'wait', ms: 400 },
      { type: 'click', selector: '.checkbox' },
    ],
  },
  {
    name: 'trivia-game',
    url: 'https://trivia-game2026-kohl.vercel.app/',
    interactions: triviaInteractions(),
  },
  {
    name: 'historian-chatbot',
    url: 'https://historian-chatbot-brown.vercel.app/',
    recordSeconds: 2,
    interactions: [
      { type: 'click', selector: 'input' },
      { type: 'type', text: 'Tell me about Maradona' },
      { type: 'press', key: 'Enter' },
      { type: 'wait', ms: 1500 },
      { type: 'click', selector: 'input' },
      { type: 'type', text: 'And what about Messi?' },
      { type: 'press', key: 'Enter' },
      { type: 'wait', ms: 1500 },
    ],
  },
];

async function runInteractions(page, interactions) {
  for (const action of interactions) {
    try {
      switch (action.type) {
        case 'wait':
          await page.waitForTimeout(action.ms);
          break;
        case 'click': {
          const el = await page.$(action.selector);
          if (el) {
            await el.click();
          } else {
            await page.keyboard.press('Enter');
          }
          break;
        }
        case 'type':
          await page.keyboard.type(action.text, { delay: 60 });
          break;
        case 'press':
          await page.keyboard.press(action.key);
          break;
        default:
          break;
      }
    } catch {
      // best-effort
    }
  }
}

function seamlessLoop(input, output) {
  execSync(
    `"${ffmpegPath}" -y -i "${input}" ` +
    `-filter_complex "[0]split[s0][s1];[s0]reverse[r];[r]trim=duration=1.5[rshort];[s1]trim=start=1.5[body];[rshort][body]concat=n=2:v=1:a=0" ` +
    `-c:v libx264 -preset medium -crf 28 -an -movflags +faststart -pix_fmt yuv420p "${output}"`,
    { stdio: 'pipe', timeout: 60000 }
  );
}

function encodeFlat(input, output) {
  execSync(
    `"${ffmpegPath}" -y -i "${input}" ` +
    `-c:v libx264 -preset medium -crf 28 -an -movflags +faststart -vf "fps=15,scale=1280:-2" "${output}"`,
    { stdio: 'pipe', timeout: 60000 }
  );
}

async function recordProject(project) {
  const tempDir = resolve(TEMP_DIR, project.name);
  mkdirSync(tempDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: { dir: tempDir },
  });

  const page = await context.newPage();

  if (project.name === 'historian-chatbot') {
    await page.route('**/api/ping', route => route.fulfill({ status: 200 }));

    let chatCount = 0;
    await page.route('**/api/chat', route => {
      chatCount++;
      const reply = chatCount === 1
        ? 'Diego Armando Maradona was an Argentine football legend who led Argentina to the 1986 World Cup title. He is remembered for his dribbling skill, the "Hand of God" goal, and a stunning solo run against England in the same match.'
        : 'Lionel Messi, often compared to Maradona, is another Argentine great who won the World Cup in 2022. His style is more graceful and efficient, but both share extraordinary vision and dribbling that set them apart as all-time legends.';
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reply }),
      });
    });
  }

  try {
    await page.goto(project.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  } catch (err) {
    console.log(`  Load warning: ${err.message}`);
  }

  await runInteractions(page, project.interactions);

  await page.waitForTimeout((project.recordSeconds ?? RECORD_SECONDS) * 1000);

  await context.close();
  await browser.close();

  const files = readdirSync(tempDir);
  const webmFile = files.find(f => f.endsWith('.webm'));
  if (!webmFile) throw new Error('No video file produced');

  const webmPath = resolve(tempDir, webmFile);
  const mp4RawPath = resolve(tempDir, `${project.name}_raw.mp4`);
  const mp4FinalPath = resolve(VIDEOS_DIR, `${project.name}.mp4`);

  // WebM → raw MP4
  encodeFlat(webmPath, mp4RawPath);

  // seamless loop for static UIs
  if (SEAMLESS_PROJECTS.includes(project.name)) {
    seamlessLoop(mp4RawPath, mp4FinalPath);
    rmSync(mp4RawPath);
  } else {
    const fs = await import('fs');
    if (existsSync(mp4FinalPath)) rmSync(mp4FinalPath);
    fs.renameSync(mp4RawPath, mp4FinalPath);
  }

  rmSync(tempDir, { recursive: true });

  const stats = (await import('fs')).statSync(mp4FinalPath);
  console.log(`  Saved: ${project.name}.mp4 (${Math.round(stats.size / 1024)} KB)`);
}

async function main() {
  const args = process.argv.slice(2);
  const projectFilter = args.find(a => a.startsWith('--project='));
  const filterValues = projectFilter ? projectFilter.split('=')[1].split(',') : [];

  const toRecord = filterValues.length > 0
    ? PROJECTS.filter(p => filterValues.includes(p.name))
    : PROJECTS;

  if (toRecord.length === 0) {
    console.error(`Project(s) "${filterValues.join(',')}" not found`);
    console.error(`Available: ${PROJECTS.map(p => p.name).join(', ')}`);
    process.exit(1);
  }

  mkdirSync(VIDEOS_DIR, { recursive: true });

  console.log(`Recording ${toRecord.length} project(s)...`);

  for (const project of toRecord) {
    console.log(`\n${project.name} -> ${project.url}`);
    try {
      await recordProject(project);
    } catch (err) {
      console.error(`  Failed: ${err.message}`);
    }
  }

  if (existsSync(TEMP_DIR)) rmSync(TEMP_DIR, { recursive: true });

  console.log('\nDone!');
}

main().catch(console.error);
