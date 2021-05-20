const { browser, element } = require("protractor");

//Handling chrome browser with Allow locatoin notification pop up
describe("Allow Notifications Pop Up Demo", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("https://www.ajio.com/");
  });

  it("Type 1 - Going Incognito", function () {
    //click on cancel of notification pop up
    //The below code should be used only on Incognito mode, Not in type of handling notifications using pref's

    //element(by.xpath('//div[@class = "ic-close-quickview"]')).click();

    browser.sleep(3000);

    let menObj = element(by.linkText("MEN"));
    let womenObj = element(by.linkText("WOMEN"));
    let kidsObj = element(by.linkText("KIDS"));
    let indieObj = element(by.linkText("INDIE"));
    let homeAndKitchenObj = element(by.linkText("HOME AND KITCHEN"));
    let newArrivalsObj = element(by.linkText("NEW ARRIVALS"));

    browser.actions().mouseMove(menObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(womenObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(kidsObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(indieObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(homeAndKitchenObj).perform();
    browser.sleep(2000);

    browser.actions().mouseMove(newArrivalsObj).perform();
    browser.sleep(2000);
  });
});
