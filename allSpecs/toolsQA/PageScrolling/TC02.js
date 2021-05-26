const { browser } = require("protractor");

describe("Page Scrolling Demo", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Scrolling all types", function () {
    browser.get("https://www.w3schools.com/");

    //Scroll till end of the pageTitle
    browser.executeScript("window.scrollBy(0,9999)");
    browser.sleep(3000);

    //Scroll till a specific element on the web page
    let ele = element(by.xpath("//h1[text()='JavaScript']"));
    browser.executeScript("arguments[0].scrollIntoView();", ele);
    browser.sleep(3000);
  });
});
