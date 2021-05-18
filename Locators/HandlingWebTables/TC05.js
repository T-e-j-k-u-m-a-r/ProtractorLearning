const { browser } = require("protractor");

describe("Scrolling throught pages", function () {
  it("All types of scrolling", function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("https://github.com/cypress-io/cypress");

    let ele = element(by.xpath("//h2[text()='Installing']"));

    browser.executeScript("arguments[0].scrollIntoView();", ele);

    // browser.sleep(3000);

    // browser.navigate().refresh();

    // browser.executeScript("window.scrollBy(0,9999)");

    browser.executeScript("window.scrollBy(0,document.body.scrollHeight)");

    browser.sleep(3000);
  });
});
