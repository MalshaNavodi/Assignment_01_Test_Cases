import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  
  //Test Case id TC001
  //Verify whether the search function is working correctly
  
  await page.type('#searchField1',"computer vision");
  await page.click('[title="Search"]');

  //Test Case id TC002
  //Verify whether the advance link is working correctly
  await page.getByText('Advanced Search').click();

  //Test Case id TC004
  //Verify whether user can navigate to Login / Register page
  await page.click('text=Login / Register');

  await page.type('[placeholder="Enter your email"]',"malsha1310weerasinghe@gmail.com");
  await page.type('#password',",hcQ*c/nB33_Q%5");

  await page.click('[name="submitButton"]');

  await page.waitForTimeout(3000)

});
