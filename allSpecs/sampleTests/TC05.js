const { browser } = require("protractor");
const protractorHelper = require("protractor-helper");

describe("TC05", () => {
  it("Login Test", () => {});

  browser.waitForAngularEnabled(false);
  browser.get("https://www.npmjs.com/package/protractor-helper");
  protractorHelper.scrollToElement(
    element(by.xpath("//h2[text()[normalize-space()='Available helpers']]"))
  );

  browser.sleep(3000);
});
