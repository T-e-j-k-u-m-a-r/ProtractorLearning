const { browser } = require("protractor");

describe("Implementing Fast Fail", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("IT Block - 1", function () {
    browser.get("https://www.npmjs.com/package/protractor-fail-fast");
    browser.getTitle().then(function (title) {
      console.log("App title : " + title);
    });

    expect(browser.getTitle()).toBe("protractor-fail-fast - npm");
  });
  it("IT Block - 2", function () {
    browser.get("https://www.npmjs.com/package/protractor-fail-fast");
    browser.getTitle().then(function (title) {
      console.log("App title : " + title);
    });

    expect(browser.getTitle()).toBe("protractor-fail-fast - npm");
  });

  it("IT Block - 3", function () {
    browser.get("https://www.npmjs.com/package/protractor-fail-fast");
    browser.getTitle().then(function (title) {
      console.log("App title : " + title);
    });

    expect(browser.getTitle()).toBe("protractor-fail-fast - npm");
  });

  it("IT Block - 4", function () {
    browser.get("https://www.npmjs.com/package/protractor-fail-fast");
    browser.getTitle().then(function (title) {
      console.log("App title : " + title);
    });

    expect(browser.getTitle()).toBe("protractor-fail-fast - npm2");
  });

  it("IT Block - 5", function () {
    browser.get("https://www.npmjs.com/package/protractor-fail-fast");
    browser.getTitle().then(function (title) {
      console.log("App title : " + title);
    });

    expect(browser.getTitle()).toBe("protractor-fail-fast - npm");
  });
});
