const { browser, element, ElementFinder } = require("protractor");

describe("Handling WebTables", () => {
  beforeAll(function () {
    browser.manage().window().maximize();
  });

  fit("Print total rows of first web table", () => {
    var count = 0;
    browser.get("https://letcode.in/table");

    const tableTitle = element(by.xpath("//label[text()='Shopping List']"));
    tableTitle.getText().then(function (title) {
      console.log(`Table title :: ${title}`);
    });

    //pass the fruit name, The respective price will be printed
    const fname = "Eggs";

    //table[@id = "shopping"]//tbody//tr//td[text()="Corn"]
    //table[@id = "shopping"]//tbody//tr//td[text()="Corn"]/following-sibling::td

    const price = element(
      by.xpath(
        '//table[@id = "shopping"]//tbody//tr//td[text()' +
          "=" +
          '"' +
          fname +
          '"' +
          "]/following-sibling::td"
      )
    );
    //table[@id = "shopping"]//tbody//tr//td[text()="Corn+"]/following-sibling::td

    price.getText().then(function (price) {
      console.log("price Value :: " + price);
    });
  });
});
