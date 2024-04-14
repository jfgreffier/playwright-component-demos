# Playwright Component Testing demos

[Official documentation](https://playwright.dev/docs/test-components)

## Demo 1 - First Playwright component test

[Demo1.spec.tsx](./src/Demo1.spec.tsx)

[Demo1-annotated.spec.tsx](./src/Demo1-annotated.spec.tsx)

Very similar to [Testing Library example](https://testing-library.com/docs/react-testing-library/example-intro/#quickstart), it shows that you are probably familiar with Playwright !

## Demo 2 - Live-coding

Let's code a counter with the help of [Playwright VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). We'll see Locators, web-first assertions, step by step debugging, and screenshots !

[Counter.spec.tsx](./src/Counter.spec.tsx)

### Watch mode
CLI watch mode is not documented. If you want it to be publicly available, please upvote this [GitHub issue](https://github.com/microsoft/playwright/issues/21960)

It's almost fast enough for TDD !

```bash
PWTEST_WATCH=1 npm run test
```

```batch
set PWTEST_WATCH=1
npm run test
```

```powershell
$env:PWTEST_WATCH=1
npm run test
```

Alternatives are the VSCode extension and UI mode.

## Demo 3 - Trace viewer

https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/cb0fa77ebd9487a5c899f3ae65a7ffdbac681182.zip
