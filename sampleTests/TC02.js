const { browser, by, element, ExpectedConditions } = require("protractor");

describe("Login with valid credentials_Orange HRM", () => {
  //const ec = ExpectedConditions;
  // it("TS01 - Verify present of forgot password link ",() =>{

  // })

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  });

  it("TS02 - Login Test ", () => {
    browser.get(
      "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    );
    element(by.id("txtUsername")).sendKeys("Admin");
    element(by.id("txtPassword")).sendKeys("admin123");
    element(by.id("btnLogin")).click();
  });

  it("TS03 - Verify home page is displayed", () => {
    element(by.id("welcome"))
      .getText()
      .then(function (profileName) {
        console.log(`Profile name :: ${profileName}`);
      });

    console.log(browser.getCapabilities("chromeOptions"));

    //expect(true).toEqual(false);
    expect(50).toBeGreaterThan(150);
  });
});
