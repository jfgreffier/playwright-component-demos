// import playwright ct test methods
import { expect, test } from "@playwright/experimental-ct-react";
// the component to test
import Fetch from "./fetch";

test("loads and displays greeting", async ({ mount }) => {
  // Render a React element
  const component = await mount(<Fetch url="/greeting" />);

  await component.getByText("Load Greeting").click();
  // no need to wait before throwing an error if it cannot find an element

  // assert that the alert message is correct using
  // toHaveText, a matcher from Playwright.
  await expect(component.getByRole("heading")).toHaveText("hello there");
  await expect(component.getByRole("button")).toBeDisabled();
});
