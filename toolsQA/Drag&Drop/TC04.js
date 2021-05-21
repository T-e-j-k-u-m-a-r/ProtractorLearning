const { browser, element } = require("protractor");

describe("Implementing Drag & Drop", function () {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Drag & Drop Demo", function () {
    browser.get("https://demoqa.com/droppable");
    browser.sleep(3000);

    let sourceObj = element(by.id("draggable"));
    let destObj = element(by.id("droppable"));

    browser.actions().dragAndDrop(sourceObj, destObj).perform();
    browser.sleep(3000);
  });
});
