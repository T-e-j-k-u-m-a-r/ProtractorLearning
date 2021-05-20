const { browser } = require("protractor");

describe("Handling Navigations", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("TC1", function () {
    browser.get("https://demoqa.com/widgets");
    browser.sleep(3000);
    browser.navigate().to("https://opensource-demo.orangehrmlive.com/");

    browser.navigate().back();
    browser.sleep(2000);
    browser.navigate().forward();
    browser.sleep(2000);
    browser.navigate().refresh();

    browser.sleep(3000);
  });
});
