const { browser, by, element } = require("protractor");

describe("Mouse Operations", function () {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Simple mhover", function () {
    browser.get("https://www.flipkart.com/");
    browser.sleep(3000);
    element(by.xpath("//button[text()='✕']")).click();

    let fashion = element(by.xpath("//img[@alt='Fashion']"));
    let electronics = element(by.xpath("//div[text()='Electronics']"));
    let home = element(by.xpath("//img[@alt='Home']"));
    let appliances = element(by.xpath("//img[@alt='Appliances']"));
    let beautyToysMore = element(by.xpath("//img[@alt='Beauty, Toys & More']"));

    browser.actions().mouseMove(fashion).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(electronics).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(home).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(appliances).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(beautyToysMore).perform();
    browser.sleep(2000);
  });

  it("All types of clicks", function () {
    browser.get("https://demoqa.com/buttons");
    browser.sleep(3000);

    let doubleClick = element(by.id("doubleClickBtn"));
    let rightClick = element(by.id("rightClickBtn"));
    let simpleClick = element(by.xpath("//button[text()='Click Me']"));

    browser.actions().doubleClick(doubleClick).perform();
    browser.sleep(3000);

    element(by.id("doubleClickMessage"))
      .getText()
      .then(function (msg) {
        console.log("Double click message :: " + msg);
      });

    browser.actions().click(rightClick, protractor.Button.RIGHT).perform();
    browser.sleep(3000);

    element(by.id("rightClickMessage"))
      .getText()
      .then(function (msg) {
        console.log("Right click message :: " + msg);
      });

    simpleClick.click();
    browser.sleep(3000);

    element(by.id("dynamicClickMessage"))
      .getText()
      .then(function (msg) {
        console.log("Simple click message :: " + msg);
      });
  });
});
