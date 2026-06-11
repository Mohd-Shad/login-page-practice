import { test, expect } from "@playwright/test";

test("This is login test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  await page.getByRole("textbox", { name: "Username:" }).click();
  await page
    .getByRole("textbox", { name: "Username:" })
    .fill("rahulshettyacademy");
  await page.getByRole("textbox", { name: "Password:" }).click();
  await page
    .getByRole("textbox", { name: "Password:" })
    .fill("Learning@830$3mK2");
  await page.getByRole("combobox").selectOption("consult");
  await page
    .getByRole("checkbox", { name: "I Agree to the terms and" })
    .check();
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page.getByRole("link", { name: "ProtoCommerce Home" }),
  ).toBeVisible();
});
