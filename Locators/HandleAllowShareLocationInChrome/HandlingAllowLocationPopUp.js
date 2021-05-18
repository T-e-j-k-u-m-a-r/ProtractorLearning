const { browser, element } = require("protractor");

describe("Tool tip Demo", function () {
  beforeAll(() => {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Demo 1", function () {
    browser.get("https://www.ajio.com/");
    browser.sleep(2000);

    //Note🐧  The below code is cancel the share/allow location popup
    //element(by.xpath("(//div[@class='modal-content']//div)[1]")).click();

    //mhover on all the below objects
    const menObj = element(by.xpath("//a[@title='MEN']"));
    const womenObj = element(by.xpath("//a[@title='WOMEN']"));
    const kidsObj = element(by.xpath("//a[@title='KIDS']"));
    const indieObj = element(by.xpath("//a[@title='INDIE']"));
    const homeAndKitchenObj = element(
      by.xpath("//a[@title='HOME AND KITCHEN']")
    );
    const NewArrivalsObj = element(by.xpath("//a[@title='NEW ARRIVALS']"));

    browser.actions().mouseMove(menObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(womenObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(kidsObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(indieObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(homeAndKitchenObj).perform();
    browser.sleep(1000);

    browser.actions().mouseMove(NewArrivalsObj).perform();
    browser.sleep(1000);

    //print the tool tip for men objects
    menObj.getText("title").then(function (tooltip) {
      console.log("Tool tip for men object : " + tooltip);
    });
  });
});
