import { expect, test } from '@playwright/experimental-ct-react';
import Counter from './Counter';

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
