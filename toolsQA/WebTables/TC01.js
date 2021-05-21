const { browser, element } = require("protractor");

describe("Handling webtables", function () {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  var allHeaders;

  it("Print all the headers", function () {
    browser.get("https://demoqa.com/webtables");
    browser.sleep(3000);

    allHeaders = element.all(
      by.xpath('//div[@class = "rt-resizable-header-content"]')
    );
    allHeaders.each(function (header, index) {
      header.getText().then(function (header_text) {
        console.log(header_text);
      });
    });
  });

  it("Print total rows", function () {
    let rows = element.all(by.xpath('//div[@class = "rt-tr-group"]'));
    rows.count().then(function (count) {
      console.log("Total rows : " + count);
    });
  });

  it("Print total columns", function () {
    allHeaders.count().then(function (cnt) {
      console.log("Total columns :: " + cnt);
    });
  });
});
