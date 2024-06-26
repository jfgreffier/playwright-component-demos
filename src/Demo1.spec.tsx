import { expect, test } from '@playwright/experimental-ct-react';
import Fetch from './fetch';

test('loads and displays greeting', async ({ mount }) => {
  // Arrange
  const component = await mount(<Fetch url="/greeting" />);

  // Act
  await component.getByText('Load Greeting').click();

  // Assert
  await expect(component.getByRole('heading')).toHaveText('hello there');
  await expect(component.getByRole('button')).toBeDisabled();
});
