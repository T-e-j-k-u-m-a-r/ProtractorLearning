const { browser, element } = require("protractor");

describe("Implementing Drag & Drop", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Drag&Drop Demo", function () {
    browser.get("http://demo.guru99.com/test/drag_drop.html");
    browser.executeScript("window.scrollBy(0,300)");
    browser.sleep(3000);
    let sourceEle = element(by.linkText("SALES"));
    let destinationEle = element(by.xpath("(//li[@class='placeholder'])[3]"));

    browser.actions().dragAndDrop(sourceEle, destinationEle).perform();
    browser.sleep(3000);
  });
});
