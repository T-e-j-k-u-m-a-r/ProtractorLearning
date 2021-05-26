const { browser, element } = require("protractor");

describe("Implementing Drag & Drop", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Type 1 in Tools QA", function () {
    browser.get("https://demoqa.com/dragabble");
    browser.executeScript("window.scrollBy(0,300)");
    browser.sleep(3000);
    let sourceEle = element(by.id("dragBox"));

    browser.actions().dragAndDrop(sourceEle, { x: 30, y: 55 }).perform();
    browser.sleep(3000);
  });
});
