const { browser, element, by } = require("protractor");

describe("Drag & Drop Demo", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Type 2 in Tools QA", function () {
    browser.get("https://demoqa.com/dragabble");
    element(by.linkText("Axis Restricted")).click();
    browser.executeScript("window.scrollBy(0,200)");
    browser.sleep(3000);
    let restrictedXObj = element(by.id("restrictedX"));
    let restrictedYObj = element(by.id("restrictedY"));

    browser.actions().dragAndDrop(restrictedXObj, { x: 40, y: 0 }).perform();
    browser.sleep(3000);

    browser.actions().dragAndDrop(restrictedYObj, { x: 0, y: 50 }).perform();
    browser.sleep(3000);
  });
});
