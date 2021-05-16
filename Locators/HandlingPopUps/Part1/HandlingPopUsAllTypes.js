const { browser, element, by } = require("protractor");
const protractorHelper = require("protractor-helper");

describe("Handling Alerts in JS", () => {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("http://demo.automationtesting.in/Register.html");

    //mhover on switchTo and click on alerts section
    const switchToObj = element(by.linkText("SwitchTo"));
    browser.actions().mouseMove(switchToObj).perform();

    const alertsObj = element(by.linkText("Alerts"));

    alertsObj.click();
    browser.sleep(3000);
  });

  it("Type 1 ", () => {
    browser.get("http://demo.automationtesting.in/Alerts.html");

    const clickButtonObj1 = element(
      by.xpath(
        "//button[text()[normalize-space()='click the button to display an alert box:']]"
      )
    );

    //protractorHelper.waitForElementVisibility(clickButtonObj);
    protractorHelper.click(clickButtonObj1, 3000);
    browser.sleep(5000);
    protractorHelper.waitForAlertToBePresent();

    const alertPopUp = browser.switchTo().alert();

    alertPopUp.getText().then(function (alertMsg) {
      console.log(`Alert message :: ${alertMsg}`);
    });

    alertPopUp.accept();
    console.log("Type 1 :: Completed");
  });

  it("Type 2 ", () => {
    browser.get("http://demo.automationtesting.in/Alerts.html");

    const buttonObj1 = element(by.linkText("Alert with OK & Cancel"));
    buttonObj1.click();

    clickButtonObj2 = element(
      by.xpath(
        "//button[contains(text(),'click the button to display a confirm box')]"
      )
    );

    protractorHelper.waitForElementVisibility(clickButtonObj2);
    protractorHelper.click(clickButtonObj2, 3000);
    browser.sleep(5000);

    protractorHelper.waitForAlertToBePresent();

    const confirmationPopUp = browser.switchTo().alert();

    confirmationPopUp.getText().then(function (confirmationMsg) {
      console.log(`"Confirmation message :: ${confirmationMsg}`);
    });

    confirmationPopUp.accept();
  });

  it("Type 3 ", () => {
    browser.get("http://demo.automationtesting.in/Alerts.html");

    //click on 3rd main menu
    const button3 = element(by.linkText("Alert with Textbox"));
    protractorHelper.click(button3, 3000);

    //click on button to display alertPopUp
    const alertBtn = element(
      by.xpath(
        "//button[text()='click the button to demonstrate the prompt box ']"
      )
    );
    protractorHelper.click(alertBtn, 3000);

    //check for the alert presence & print the alert text
    protractorHelper.waitForAlertToBePresent();
    const alert3 = browser.switchTo().alert();
    alert3.getText().then(function (txt) {
      console.log(`"Alert message :: ${txt}`);
    });

    //enter the value into inputbox of alertprompt
    alert3.sendKeys("Protractor Testing");

    //click on OK
    alert3.accept();
    browser.sleep(3000);

    //print the confirmation of the alertPopUp
    element(by.id("demo1"))
      .getText()
      .then((mssg) => {
        console.log(`Final confirmation message :: ${mssg}`);
      });
  });
});
