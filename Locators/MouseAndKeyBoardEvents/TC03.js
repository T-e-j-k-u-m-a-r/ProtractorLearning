const { browser, element, by, ElementFinder } = require("protractor");

describe("Tool tip demo", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Example 1", function () {
    browser.get("https://jqueryui.com/tooltip/");
    browser.sleep(3000);
    browser.executeScript("window.scrollBy(0,400)");
    browser.switchTo().frame(0);
    browser.sleep(3000);

    const ele = element(by.id("age"));

    //mhover on the tet box
    browser.actions().mouseMove(ele).perform();
    browser.sleep(3000);

    ele.getAttribute("title").then(function (title) {
      console.log(`tooltip message: ${title}`);
    });

    console.log("Attribute Value = " + ele.getAttribute("title"));
  });

  xit("Example 2", function () {
    browser.get("https://www.globalsqa.com/demo-site/tooltip/");
    browser.sleep(5000);
    browser.executeScript("window.scrollBy(0,400)");

    //mhover on the image
    browser.switchTo().frame(4);
    const imageObj = element(by.css("[alt='St. Stephen's Cathedral']"));

    // browser.actions().mouseMove(imageObj).perform();
    browser.sleep(3000);

    //click on image
    imageObj.click();
    browser.sleep(3000);
  });

  fit("Example 3", function () {
    browser.get("https://opensource-demo.orangehrmlive.com/");
    browser.sleep(3000);
    const loginDetails = element(
      by.xpath("//span[text()='( Username : Admin | Password : admin123 )']")
    );

    loginDetails.getAttribute("style").then(function (value) {
      console.log("Attribute value of span :: " + value);
    });
  });
});
