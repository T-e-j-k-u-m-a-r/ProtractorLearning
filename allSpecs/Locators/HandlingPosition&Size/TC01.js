const { browser, element } = require("protractor");
//Not working and not plemented fuly

describe("Implementing position & size", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Size & Position Demo", function () {
    browser.get("https://opensource-demo.orangehrmlive.com/");
    browser.sleep(3000);

    let loginBtn = element(by.id("btnLogin"));

    let loginBtnLocation = loginBtn.getLocation();

    let loginBtnSize = loginBtn.getSize();

    loginBtnLocation.then(function (loc) {
      console.log(`Login button Location :: ${loc}`);
    });

    loginBtnSize.then(function (size) {
      console.log(`Login button Size :: ${size}`);
    });
  });
});
