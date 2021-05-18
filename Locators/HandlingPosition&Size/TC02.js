const { browser, element, by } = require("protractor");

describe("All types of click", function () {
  beforeAll(() => {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Mouse Operations", function () {
    browser.get("https://demoqa.com/buttons");
    browser.sleep(3000);

    let simpleClick = element(by.xpath("//button[text()='Click Me']"));
    let rightClick = element(by.id("rightClickBtn"));
    let DoubleCLick = element(by.id("doubleClickBtn"));

    simpleClick.click();
    browser.sleep(3000);

    browser.actions().click(rightClick, protractor.Button.RIGHT).perform();
    browser.sleep(3000);

    browser.actions().doubleClick(DoubleCLick).perform();
    browser.sleep(3000);
  });
});
