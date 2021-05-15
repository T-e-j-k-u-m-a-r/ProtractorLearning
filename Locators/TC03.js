const { browser, element, by } = require("protractor");
const protractorHelper = require("protractor-helper");

describe("Exploring SwitchTo() options", () => {
  beforeEach(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("http://demo.automationtesting.in/Alerts.html");
  });

  it("Switch to Alerts -> Type 1", () => {
    const clickButton = element(by.xpath("//button[@class='btn btn-danger']"));

    clickButton.click();

    browser.sleep(3000);

    browser
      .switchTo()
      .alert()
      .getText()
      .then(function (alertText) {
        console.log(`Alert text :: ${alertText}`);
      });

    browser.switchTo().alert().accept();
  });

  it("Switch to Alerts -> Type 2", () => {
    const alertMainMenu = element(
      by.xpath("//a[contains(text(),'Alert with OK & Cancel')]")
    );

    alertMainMenu.click();

    const alertButton = element(
      by.xpath("//button[text()='click the button to display a confirm box ']")
    );

    alertButton.click();

    browser
      .switchTo()
      .alert()
      .getText()
      .then(function (alertText) {
        console.log(`Alert message :: ${alertText}`);
      });

    browser.sleep(3000);
    browser.switchTo().alert().dismiss();
  });

  it("Switch to Alerts -> Type 3", () => {
    const alertButton3 = element(
      by.xpath(
        '//ul[@class="nav nav-tabs nav-stacked"]//li[3]//a[text()="Alert with Textbox "]'
      )
    );
    alertButton3.click();

    const alertButton3a = element(
      by.xpath(
        "//button[contains(text(),'click the button to demonstrate the prompt box')]"
      )
    );

    alertButton3a.click();

    const alertPopUp = browser.switchTo().alert();
    alertPopUp.sendKeys("Protractor Testing");

    browser.sleep(5000);

    alertPopUp.getText().then(function (alertText) {
      console.log(`Alert pop up text :: ${alertText}`);
    });

    alertPopUp.accept();
  });
});
