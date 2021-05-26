const { browser, element, by } = require("protractor");

describe("Handing new tabs or windows", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Type 1", function () {
    browser.get("https://demoqa.com/browser-windows");
    browser.sleep(3000);

    //click on link

    let newTabButton = element(by.id("tabButton"));
    let newWindowButton = element(by.id("windowButton"));
    let newWindwowMessageButton = element(by.id("messageWindowButton"));

    newTabButton.click();
    browser.sleep(3000);

    const gws = browser.getAllWindowHandles();

    gws.then(function (gws_1) {
      console.log("Total new tabs :: " + gws_1.length);

      let firstTab = gws_1[0];
      let secondTab = gws_1[1];

      browser.switchTo().window(secondTab);
      browser.sleep(3000);

      browser.getTitle().then(function (title) {
        console.log("Page title :: " + title);
      });

      element(by.id("sampleHeading"))
        .getText()
        .then(function (msg) {
          console.log("Message :: " + msg);
        });
    });
  });
});
