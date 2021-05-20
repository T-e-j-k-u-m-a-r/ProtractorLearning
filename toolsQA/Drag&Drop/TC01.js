const { browser, element, by } = require("protractor");

describe("Drag & Drop to particular target without using location", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("DD Demo", function () {
    browser.get("https://demoqa.com/droppable");
    browser.sleep(3000);
    let sourceObj = element(by.id("draggable"));
    let destObj = element(by.xpath("(//p[text()='Drop here'])[1]"));

    browser.actions().dragAndDrop(sourceObj, destObj).perform();
    browser.sleep(3000);
  });
});
