const { browser, element, by } = require("protractor");
const pH = require("protractor-helper");

describe("Handling Alerts", function () {
  beforeAll(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
  });

  it("Handling all types of alerts", async function () {
    await browser.get("https://demoqa.com/alerts");

    let simpleAlertButton = await element(by.id("alertButton"));
    let timerAlertButton = await element(by.id("timerAlertButton"));
    let confirmAlertButton = await element(by.id("confirmButton"));
    let promptAlertButton = await element(by.id("promtButton"));
    let ec = browser.ExpectedConditions;

    //Simple Alert Section
    await simpleAlertButton.click();
    await browser.sleep(3000);

    await pH.waitForAlertToBePresent();

    let simpleAlert = await browser.switchTo().alert();

    await simpleAlert.getText().then(function (txt) {
      console.log("Simple Alert Message :: " + txt);
    });

    await simpleAlert.accept();

    //Timer Alert Section
    await pH.click(timerAlertButton);
    await browser.wait(ec.alertIsPresent(10000));
    await browser.sleep(3000);

    let timerAlert = await browser.switchTo().alert();

    await timerAlert.getText().then(function (txt) {
      console.log("Timer Alert Message :: " + txt);
    });

    await timerAlert.accept();
    await browser.navigate().refresh();
    await browser.sleep(3000);

    //Confirm Alert Section
    await confirmAlertButton.click();
    await browser.sleep(3000);

    await pH.waitForAlertToBePresent();

    let confirmAlert = await browser.switchTo().alert();

    await confirmAlert.getText().then(function (txt) {
      console.log("Confirm Alert Message :: " + txt);
    });

    await confirmAlert.accept();

    await element(by.id("confirmResult"))
      .getText()
      .then(function (txt) {
        console.log("Confirmation message :: " + txt);
      });

    //Prompt Alert section
    await promptAlertButton.click();
    await browser.sleep(3000);

    let promptAlert = await browser.switchTo().alert();

    await promptAlert.getText().then(function (txt) {
      console.log("Prompt Alert Message ::" + txt);
    });

    await promptAlert.sendKeys("Protrctor Testing");
    await promptAlert.accept();

    await element(by.id("promptResult"))
      .getText()
      .then(function (txt) {
        console.log("Prompt Alert Confirmation message :: " + txt);
      });
  });
});
