import { test, expect } from "@playwright/test";

test("Should load home page with current title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("Should demo locators", {tag: "@smoke"}, async ({ page }, testInfo) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
});
