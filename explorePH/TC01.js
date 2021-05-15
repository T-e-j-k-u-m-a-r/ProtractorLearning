const { browser, element, by, ExpectedConditions } = require("protractor");
const protractorHelper = require("protractor-helper");

describe("TS01", () => {
  it("TC01", () => {
    const EC = protractor.ExpectedConditions;
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("https://demoqa.com/");
    protractorHelper.waitForUrlToContainString("qa");
    protractorHelper.waitForUrlToBeEqualToExpectedUrl("https://demoqa.com/");

    browser.executeScript("window.scrollBy(0,300)");
    const interactionsObj = element(
      by.xpath("//h5[contains(text(),'Interactions')]")
    );

    protractorHelper.waitForElementVisibility(interactionsObj, 5000);

    //click on interactions menu
    interactionsObj.click();

    const draggableObj = element(by.xpath('//span[text()="Dragabble"]'));

    //Scroll till an element
    browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    browser.sleep(2000);

    protractorHelper.waitForElementVisibility(draggableObj, 5000);
    draggableObj.click();

    dragMeObj = element(by.id("dragBox"));

    browser
      .actions()
      .dragAndDrop(dragMeObj, { x: 100, y: 0 })
      .mouseUp()
      .perform();
  });

  browser.sleep(3000);
});
