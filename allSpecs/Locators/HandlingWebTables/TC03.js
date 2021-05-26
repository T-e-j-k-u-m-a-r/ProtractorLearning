const { browser, element, by } = require("protractor");

describe("Handling WebTables", function () {
  beforeAll(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get(
      "http://www.appliedselenium.com/2019/04/automate-web-table-in-selenium/"
    );
  });

  it("Spec 1", function () {
    const ele = element(by.xpath("(//input[@type='search'])[2]"));
    const testData = "Italy";
    browser.executeScript("arguments[0].scrollIntoView();", ele);

    let searchResult = element(by.id("tablepress-1_info"));

    //split searchResult string
    // searchResult.getText().then(function (text) {
    //   console.log("Matching Search Result : " + text.substr(8, 2));
    // });

    //Print total rows in the table
    const totalRows = element.all(
      by.xpath("//table[@id='tablepress-1']//tbody//tr")
    );

    totalRows.count().then(function (count) {
      console.log("Total rows in the table :: " + count);
    });

    //Print total columns in the table
    const totalColumns = element.all(
      by.xpath("//table[@id='tablepress-1']//thead//tr//th")
    );
    totalColumns.count().then(function (cnt) {
      console.log("Total columns in the table :: " + cnt);
    });

    Text().then(function (txt) {
      console.log(txt);
    });
  });
});
