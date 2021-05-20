const { browser, element, by } = require("protractor");
const pH = require("protractor-helper");

describe("Handling Alerts", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Handling all types of alerts", function () {
    browser.get("https://demoqa.com/alerts");

    let simpleAlertButton = element(by.id("alertButton"));
    let timerAlertButton = element(by.id("timerAlertButton"));
    let confirmAlertButton = element(by.id("confirmButton"));
    let promptAlertButton = element(by.id("promtButton"));

    //Simple Alert Section
    simpleAlertButton.click();
    browser.sleep(3000);

    pH.waitForAlertToBePresent();

    let simpleAlert = browser.switchTo().alert();

    simpleAlert.getText().then(function (txt) {
      console.log("Simple Alert Message :: " + txt);
    });

    simpleAlert.accept();

    //Timer Alert Section
    pH.click(timerAlertButton);
    pH.waitForAlertToBePresent(6000);

    let timerAlert = browser.switchTo().alert();

    timerAlert.getText().then(function (txt) {
      console.log("Timer Alert Message :: " + txt);
    });

    timerAlert.accept();
    browser.navigate().refresh();
    browser.sleep(3000);

    //Confirm Alert Section
    confirmAlertButton.click();
    browser.sleep(3000);

    pH.waitForAlertToBePresent();

    let confirmAlert = browser.switchTo().alert();

    confirmAlert.getText().then(function (txt) {
      console.log("Confirm Alert Message :: " + txt);
    });

    confirmAlert.accept();

    element(by.id("confirmResult"))
      .getText()
      .then(function (txt) {
        console.log("Confirmation message :: " + txt);
      });

    //Prompt Alert section
    promptAlertButton.click();
    browser.sleep(3000);

    let promptAlert = browser.switchTo().alert();

    promptAlert.getText().then(function (txt) {
      console.log("Prompt Alert Message ::" + txt);
    });

    promptAlert.sendKeys("Protrctor Testing");
    promptAlert.accept();

    element(by.id("promptResult"))
      .getText()
      .then(function (txt) {
        console.log("Prompt Alert Confirmation message :: " + txt);
      });
  });
});
