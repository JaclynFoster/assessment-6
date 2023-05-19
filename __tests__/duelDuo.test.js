const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the draw button displays div with id of choices", async () => {
    await driver.get("http://localhost:8000")
    await driver.sleep(200)
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(200)
     await driver.wait(until.elementsLocated(By.id("choices"))).isDisplayed(true)
    
  });
  test("clicking the add to duo button displays div with id of player-duo", async () => {
    await driver.get("http://localhost:8000")
    await driver.sleep(200)
    await driver.findElement(By.className("bot-btn")).click()
    await driver.sleep(200)
    await driver.wait(until.elementsLocated(By.id("player-duo"))).isDisplayed(true)
  });
});