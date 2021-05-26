const { browser } = require("protractor");

describe("Navigate Method all Options", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Navigate Demo", function () {
    browser.get("https://opensource-demo.orangehrmlive.com/");

    const title1 = browser.getTitle();
    title1.then(function (t1) {
      console.log("Page title1 :: " + t1);
    });

    browser.navigate().to("https://app.salesfusion.com/");

    const title2 = browser.getTitle();
    title2.then(function (t2) {
      console.log("Page title2 :: " + t2);
    });

    browser.navigate().back();
    browser.sleep(3000);
    browser.navigate().forward();
    browser.sleep(3000);

    browser.navigate().refresh();

    browser.manage().window().setSize(400, 400);
    browser.sleep(3000);
    browser.manage().window().setPosition(100, 300);
  });
});
