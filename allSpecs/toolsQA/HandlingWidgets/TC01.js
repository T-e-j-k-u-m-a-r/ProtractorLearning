const { browser, element, by } = require("protractor");

describe("Handling Widgets", function () {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Slider Demo", function () {
    browser.get("https://demoqa.com/slider");
    browser.sleep(3000);

    let sliderObj = element(
      by.xpath("//input[@class='range-slider range-slider--primary']")
    );

    browser.actions().dragAndDrop(sliderObj, { x: 0, y: 25 }).perform();
    browser.sleep(3000);

    sliderObj.getAttribute("value").then(function (value) {
      console.log("Slider Value : " + value);
    });
  });

  it("Progress Bar Demo", function () {
    browser.get("https://demoqa.com/progress-bar");
    let startStopButton = element(by.id("startStopButton"));

    startStopButton.click();

    let progressPercantage = element(by.xpath("//div[@role='progressbar']"));
    browser.sleep(5500);

    startStopButton.click();

    progressPercantage.getText().then(function (pp) {
      console.log("Progress Percentage :: " + pp);
    });
  });
});
