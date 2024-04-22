import { expect as playwrightExpect, test } from '@playwright/experimental-ct-react';
import Counter from './Counter';

// very short expect timeout
const expect = playwrightExpect.configure({ timeout: 1 });

// Web-first assertions
test('renders', async ({ mount }) => {
  const component = await mount(<Counter />);

  // TODO check it is visible
});
