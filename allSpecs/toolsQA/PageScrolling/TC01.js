const { browser, element } = require("protractor");

describe("Page Scrolling Demo", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Type 1", function () {
    browser.get("https://www.w3schools.com/");
    //scroll till bottom of the page

    browser.executeScript("window.scrollBy(0,9999)");
    browser.sleep(3000);

    //scroll till specific element on the page
    let excerciseObj = element(by.xpath("//h2[text()='Exercises']"));

    browser.executeScript("arguments[0].scrollIntoView();", excerciseObj);
    browser.sleep(3000);
  });
});
