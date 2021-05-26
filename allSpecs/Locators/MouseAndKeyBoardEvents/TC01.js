const { browser, element } = require("protractor");
const protractorHelper = require("protractor-helper");

//Illustration of how to use all types of mouse operatios
describe("Mouse Operations", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Mouse Operations - All Types", function () {
    browser.get("http://demo.guru99.com/test/simple_context_menu.html");

    //Right click
    const buttonOne = element(by.xpath("//span[text()='right click me']"));

    browser.actions().click(buttonOne, protractor.Button.RIGHT).perform();

    browser.sleep(3000);
    console.log("Right click is done...");

    //Double click
    // const buttonTwo = element(
    //   by.xpath("//button[text()='Double-Click Me To See Alert']")
    // );
    // browser.actions().doubleClick(buttonTwo).perform();

    // browser.sleep(3000);
    // browser.switchTo().alert().accept();

    // console.log("Double click is done...");
  });
});
