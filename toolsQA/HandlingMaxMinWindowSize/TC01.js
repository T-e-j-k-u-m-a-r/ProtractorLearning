const { browser } = require("protractor");

describe("Handling min max window size", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Browser window methods", function () {
    browser.get("https://demoqa.com/browser-windows");
    browser.manage().window().setSize(400, 600);
    browser.sleep(3000);
    browser.manage().window().setPosition(100, 350);
    browser.sleep(3000);
  });
});
