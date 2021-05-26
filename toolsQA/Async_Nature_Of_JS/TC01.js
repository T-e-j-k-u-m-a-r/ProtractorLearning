const { browser } = require("protractor");

describe("Asychronous Nature of Javascript", function () {
  it("Async nature demo", async function () {
    await browser.manage().window().maximize();
    await browser.waitForAngularEnabled(false);

    console.log("Browser in maximized screen mode");
    console.log("Disabled the flag wait for angular enabled to FALSE");
    browser.get("http://cafetownsend-spine.herokuapp.com/#/");

    await browser.sleep(2000);
    console.log("Navigted to application URL");

    //print the app title
    await browser.getTitle().then(async function (title) {
      console.log(`Application title : ${title}`);
    });
    await browser.sleep(2000);
    console.log("Printed the application title");

    await browser.getCurrentUrl().then(async function (url) {
      console.log(`Application URL : ${url}`);
    });
    await browser.sleep(2000);
    console.log("Printed the application URL");
  });
});
