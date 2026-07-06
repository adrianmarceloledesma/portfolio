# AGENTS.md - Portfolio Project Guidelines

## Project Overview

Personal portfolio website built with React 19, TypeScript, Vite, Tailwind CSS 4, and ESLint 9. Uses strict TypeScript configuration.

Other projects in the portfolio also use:
- **react-router-dom** - for routing (Trivia Game)

---

## Commands

```bash
# Development
npm run dev              # Start Vite dev server with HMR
npm run preview          # Preview production build locally

# Build & Lint
npm run build            # Run TypeScript check + Vite production build
npm run lint             # Run ESLint on all files
npm run lint -- --fix    # Auto-fix ESLint issues

# Project Videos
npm run record                      # Record/update all project demo videos automatically
npm run record -- --project=deleatur  # Record a single project (deleatur, mytasks, trivia-game, historian-chatbot)
```

**No test framework installed.** To add tests, install Vitest:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```
Add to package.json: `"test": "vitest"`. Run single test: `npx vitest run src/components/Header.test.tsx`

---

## Code Style Guidelines

### TypeScript
- **Strict mode enabled** - all strict compiler options on
- Use `type` instead of `interface` for simple definitions
- Use `import { type X }` syntax (verbatimModuleSyntax)
- Never use `any` - use `unknown` when type is uncertain

### Components
- **Use named exports** (e.g., `export const Header`)
- Default exports only for root `App` component
- Files match component name (e.g., `Header.tsx`)
- Group in folders: components/, context/, data/, hooks/

### Imports Order
1. React imports
2. External library imports
3. Internal imports (relative paths)

```typescript
import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { type Project } from '../data/projects';
```

### React Patterns
- Custom hooks must start with `use` (e.g., `useLanguage`)
- Context providers export both Provider and custom hook
- Use `useState` with explicit type when not inferrable

### Context Pattern
```typescript
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // implementation
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
```

### Tailwind CSS
- Use Tailwind utility classes (v4)
- Keep custom CSS in `index.css` for globals only
- Mobile-first: `sm:`, `md:`, `lg:` prefixes

### Error Handling
- Use try-catch for async operations
- Add error boundaries for component trees
- Use console.error for development logging

---

## TypeScript Configuration

Key settings (tsconfig.app.json):
- `strict: true` - Full type checking
- `noUnusedLocals: true` - Error on unused variables
- `noUnusedParameters: true` - Error on unused params
- `verbatimModuleSyntax: true` - Require `type` keyword for type imports
- `noUncheckedSideEffectImports: true`
- `erasableSyntaxOnly: true` - No legacy TS syntax

---

## Linting

ESLint flat config (eslint.config.js) with:
- @eslint/js, typescript-eslint
- react-hooks, react-refresh plugins

Run before committing: `npm run lint`

Common fixes:
- Unused variables - remove or prefix with `_`
- Missing types - add explicit annotations
- React refresh - ensure named exports

---

## What to Avoid

- Do NOT use `any` type
- Do NOT use `// @ts-ignore` or `// @ts-expect-error`
- Do NOT disable strict mode
- Do NOT use default exports for components (except App)
- Do NOT mix `type` and `interface` for same concept
- Do NOT commit console.log in production
- Do NOT add untested features

---

## Adding New Features

1. Create component in appropriate folder
2. Add data in `src/data/` (e.g., experience.ts, projects.ts)
3. Add translations in `src/data/translations.ts` for both 'es' and 'en'
4. Run `npm run lint` and fix issues
5. Run `npm run build` to verify no TypeScript errors

---

## Future Improvements

- Add Vitest for unit testing
- Add Playwright for E2E testing
- Set up pre-commit hooks with lint-staged
- Add type-checking to CI/CD pipeline
