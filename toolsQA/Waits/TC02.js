const { element, by, browser } = require("protractor");
const protractorHelper = require("protractor-helper");

describe("Handling Waits", function () {
  beforeEach(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    await browser.get("https://demoqa.com/alerts");
  });

  it("Waits Demo", async function () {
    await browser.getTitle().then(function (title) {
      console.log(`Application Title :: ${title}`);
    });

    await element(by.id("timerAlertButton"));

    //protractorHelper.
  });
});
