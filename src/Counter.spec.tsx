import { expect as playwrightExpect, test } from '@playwright/experimental-ct-react';
import Counter from './Counter';

// very short expect timeout, more confortable if you try TDD
const expect = playwrightExpect.configure({ timeout: 1 });

// Web-first assertions
test('renders', async ({ mount }) => {
  const component = await mount(<Counter />);

  // TODO check it is visible
});

// Locator, auto-waiting
test('increments', async ({ mount }) => {
  const component = await mount(<Counter />);

  // TODO
});

// Testing Library queries, debugging
test('decrements', async ({ mount }) => {
  const component = await mount(<Counter />);

  // TODO
});
