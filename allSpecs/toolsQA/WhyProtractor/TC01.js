const { browser, element, by } = require("protractor");

describe("Why Protractor", function () {
  it("Why Protractor, Why not Selenium?", function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("https://opensource-demo.orangehrmlive.com/");

    console.log("Application is launched");

    //console.log("Application title :: " + browser.getTitle());
    browser.getTitle().then(function (title) {
      console.log("Title :: " + title);
    });

    console.log("-- Printed application title -- ");

    let username = element(by.id("txtUsername"));
    expect(username.getAttribute("name")).toBe("txtUsername");

    console.log("Verified username field");

    let password = element(by.id("txtPassword"));
    expect(password.getAttribute("name")).toBe("txtPassword");

    console.log("Verified password text field");

    let loginBtn = element(by.id("btnLogin"));
    expect(loginBtn.getAttribute("value")).toBe("LOGIN");

    console.log("Verified login button");
  });
});
