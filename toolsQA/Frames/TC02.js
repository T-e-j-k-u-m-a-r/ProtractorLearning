const { browser, element, by } = require("protractor");

describe("Nested Frames Demo", function () {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Type 2", function () {
    browser.get("https://demoqa.com/nestedframes");

    //print the parent frame text
    browser.switchTo().frame(0);
    let parentObj = element(by.tagName("body"));

    //print the text
    parentObj.getText().then(function (t1) {
      console.log("Parent text : " + t1);
    });

    //print child frame text
    browser.switchTo().frame(0);
    let childObj = element(by.tagName("p"));

    childObj.getText().then(function (t2) {
      console.log("Child text : " + t2);
    });

    browser.switchTo().defaultContent();
    let defaultPage = element(by.xpath("//div[text()='Nested Frames']"));

    defaultPage.getText().then(function (title) {
      console.log("Page title :: " + title);
    });
  });
});
