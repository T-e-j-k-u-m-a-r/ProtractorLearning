const { browser, element, by } = require("protractor");

describe("Frames Demo", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  fit("Type 1 ", function () {
    browser.get("https://demoqa.com/frames");
    browser.sleep(3000);

    //Toggle to frame1
    browser.switchTo().frame(1);

    let staticTxt_f1 = element(by.id("sampleHeading"));

    //Print the static text inside 1st frame
    staticTxt_f1.getText().then(function (text) {
      console.log("Static text :: " + text);
    });
    browser.sleep(3000);
  });
});
