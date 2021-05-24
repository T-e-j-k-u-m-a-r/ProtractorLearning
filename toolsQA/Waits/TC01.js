const { browser, element, ExpectedConditions } = require("protractor");
const ec = browser.ExpectedConditions;

describe("Handling Waits", function () {
  beforeEach(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    await browser.get("https://demoqa.com/alerts");
  });

  it("Type 1", async function () {
    //click on alert button
    let topicName = element(by.xpath("//div[text()='Alerts']"));

    topicName.getText().then(function (title) {
      console.log(`Content Name : ${title}`);
    });

    let alertButton = element(by.id("timerAlertButton"));
    await browser.wait(ec.elementToBeClickable(alertButton), 5000);
    await alertButton.click();

    await browser.sleep(7000);

    await browser.wait(ec.alertIsPresent(), 6000);

    await browser.switchTo().alert().accept();
    console.log(
      "Alert with time delay is handled using Exepcted Conditions property...."
    );
  });
});
