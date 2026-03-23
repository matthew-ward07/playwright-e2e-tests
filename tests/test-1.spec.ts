/**
 * Test case to verify the login functionality and navigation to the "Make Appointment" page
 * on the Katalon Demo CURA Healthcare Service website.
 *
 * Steps:
 * 1. Navigate to the Katalon Demo CURA Healthcare Service homepage.
 * 2. Click on the "Make Appointment" link.
 * 3. Verify that the login prompt is visible.
 * 4. Enter the username "John Doe" in the Username field.
 * 5. Enter the password "ThisIsNotAPassword" in the Password field.
 * 6. Verify that the "Login" button is visible.
 * 7. Verify that the "Make Appointment" header is displayed after login.
 */
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page.getByText("Please login to make")).toBeVisible();
  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("John Doe");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  await expect(page.locator("h2")).toContainText("Make Appointment");
});
