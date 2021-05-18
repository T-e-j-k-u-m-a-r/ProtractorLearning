const { browser, element } = require("protractor");

describe("Web Tables Demo", function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("https://www.w3schools.com/html/html_tables.asp");

    //scroll till the webtable and wait for 3 seconds
    browser.executeScript("window.scrollBy(0,400)");
    browser.sleep(3000);
  });

  it("Print all the headers of the table", function () {
    let allHeaders = element.all(
      by.xpath('//table[@id="customers"]//tbody//tr//th')
    );

    allHeaders.each(function (header, index) {
      header.getText().then(function (headerTxt) {
        console.log(headerTxt + " :: " + index);
      });
    });
  });
});
