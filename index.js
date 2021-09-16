const puppeteer = require("puppeteer");
require("dotenv").config();

// let browser, page;
// puppeteer
//   .launch({
//     headless: false,
//     defaultViewport: null,
//     args: ["--start-maximized "],
//   })
//   .then((browserOpen) => {
//     browser = browserOpen;
//     return browserOpen.newPage();
//   })
//   .then((newTab) => {
//     page = newTab;
//     return newTab.goto(process.env.LOGIN_LINK);
//   })
//   .then(() => page.type("#input-1", process.env.CRED, { delay: 100 }))
//   .then(() => page.type("#input-2", process.env.PASS, { delay: 100 }))
//   .then(() => page.click("button.auth-button", { delay: 500 }))
//   .then(() => page.waitForTimeout(3000))
//   .then(() =>
//     page.waitForSelector('li.track-card a[href="/domains/algorithms"]')
//   )
//   .then(() =>
//     page.click('li.track-card a[href="/domains/algorithms"]', { delay: 1500 })
//   )
//   .then(() => page.waitForTimeout(3000))
//   .then(() => page.waitForSelector('input[value="unsolved"]'))
//   .then(() => page.click('input[value="unsolved"]', { delay: 100 }))
//   .then(() => page.waitForTimeout(2000))
//   .then(() => page.waitForSelector(".recommended-challenge"))
//   .then(() => page.click(".recommended-challenge", { delay: 100 }))
//   .then(() => page.waitForTimeout(2000))
//   .then(() => page.waitForSelector(".checkbox-input"))
//   .then(() => page.click(".checkbox-input", { delay: 500 }))
//   .then(() => page.waitForSelector("#input-1"))
//   .then(() => page.type("#input-1", process.env.ANSWER, { delay: 50 }))
//   .then(() => page.keyboard.down("Control"))
//   .then(() => page.keyboard.press("A", { delay: 500 }))
//   .then(() => page.keyboard.press("X", { delay: 500 }))
//   .then(() => page.keyboard.up("Control"))
//   .then(() => page.waitForSelector(".hr-monaco-editor-parent"))
//   .then(() => page.click(".hr-monaco-editor-parent", { delay: 500 }))
//   .then(() => page.keyboard.down("Control"))
//   .then(() => page.keyboard.press("A", { delay: 500 }))
//   .then(() => page.keyboard.press("V", { delay: 500 }))
//   .then(() => page.keyboard.up("Control"))
//   .then(() => page.waitForTimeout(2500))
//   .then(() => browser.close())
//   .catch((err) => console.log(err));

//refactored with async await
(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized "],
    });
    const page = await browser.newPage();
    await page.goto(process.env.LOGIN_LINK);
    await page.type("#input-1", process.env.CRED, { delay: 100 });
    await page.type("#input-2", process.env.PASS, { delay: 100 });
    await page.click("button.auth-button", { delay: 500 });
    await page.waitForTimeout(3000);
    await page.waitForSelector('li.track-card a[href="/domains/algorithms"]');
    await page.click('li.track-card a[href="/domains/algorithms"]', {
      delay: 1500,
    });
    await page.waitForTimeout(3000);
    await page.waitForSelector('input[value="unsolved"]');
    await page.click('input[value="unsolved"]', { delay: 100 });
    await page.waitForTimeout(2000);
    await page.waitForSelector(".recommended-challenge");
    await page.click(".recommended-challenge", { delay: 100 });
    await page.waitForTimeout(2000);
    await page.waitForSelector(".checkbox-input");
    await page.click(".checkbox-input", { delay: 500 });
    await page.waitForSelector("#input-1");
    await page.type("#input-1", process.env.ANSWER, { delay: 50 });
    await page.keyboard.down("Control");
    await page.keyboard.press("A", { delay: 500 });
    await page.keyboard.press("X", { delay: 500 });
    await page.keyboard.up("Control");
    await page.waitForSelector(".hr-monaco-editor-parent");
    await page.click(".hr-monaco-editor-parent", { delay: 500 });
    await page.keyboard.down("Control");
    await page.keyboard.press("A", { delay: 500 });
    await page.keyboard.press("V", { delay: 500 });
    await page.keyboard.up("Control");
    await page.waitForTimeout(2500);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
