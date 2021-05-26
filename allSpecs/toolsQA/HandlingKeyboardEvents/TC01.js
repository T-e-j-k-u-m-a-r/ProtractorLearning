const { browser, element } = require("protractor");

describe("Handling Keyboard events", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("Keyboard Events Demo", function () {
    browser.get("https://opensource-demo.orangehrmlive.com/");
    browser.sleep(3000);

    //enter the username
    element(by.id("txtUsername")).sendKeys("Admin");

    //hit tab
    element(by.id("txtUsername")).sendKeys(protractor.Key.TAB);

    //enter the password
    element(by.id("txtPassword")).sendKeys("admin123");

    //hit tab and click on login button
    element(by.id("btnLogin")).click();
    browser.sleep(5000);
  });
});
