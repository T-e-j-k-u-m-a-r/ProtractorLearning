const { browser, element, id } = require("protractor");

//Handling Modal Dialogs
describe("Model Dialogs", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("https://demoqa.com/modal-dialogs");
  });

  it("Type 1", function () {
    let smallButton = element(by.id("showSmallModal"));
    smallButton.click();
    browser.sleep(3000);

    let smallModelPopUp = element(
      by.xpath(
        "//div[text()='This is a small modal. It has very less content']"
      )
    );

    smallModelPopUp.getText().then(function (msg) {
      console.log("Small model message :: " + msg);
    });

    element(by.id("closeSmallModal")).click();

    browser.sleep(3000);
  });

  it("Type 2", function () {
    let largeButton = element(by.id("showLargeModal"));

    largeButton.click();
    browser.sleep(3000);

    let largeModelPopUp = element(by.xpath("//div[@class='modal-body']//p[1]"));

    largeModelPopUp.getText().then(function (msg) {
      console.log("Small model message :: " + msg);
    });

    element(by.id("closeLargeModal")).click();

    browser.sleep(3000);
  });
});
