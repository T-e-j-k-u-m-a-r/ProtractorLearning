const { browser, element } = require("protractor");

describe("Handling Web Tables", () => {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("https://demoqa.com/webtables");
  });

  it("TC01", () => {
    const testData = "Kierra";

    //print the department for the given test data

    //enter the test data in the search filterbox
    element(by.id("searchBox")).sendKeys(testData);
    browser.sleep(3000);

    //find if the results occurs or not
    const rows = element.all(
      by.xpath(
        '//div[@class="rt-tr-group"]' +
          "//div[text()=" +
          '"' +
          testData +
          '"' +
          "]"
      )
    );
    //div[@class="rt-tr-group"]//div[text()="Kierra"]

    const searchResult = element(by.xpath("(//div[@class='rt-tr-group'])[2]"));

    searchResult.getText().then(function (title) {
      console.log("Title :: " + title);
    });

    element(by.xpath("(//div[@class='rt-td'])[7]//div[1]//span[1]")).click();
    browser.sleep(3000);

    //if yes, Edit the department and save the changes
    const deptTxtBox = element(by.id("department"));
    deptTxtBox.clear();
    deptTxtBox.sendKeys("Finance");

    element(by.id("submit")).click();
    browser.sleep(3000);

    //verify if the updated values s reflecting or not
    //const deptValue = element(by.xpath('//div[@class="rt-tr -odd"]//div[6]'));

    //expect(deptValue).toContain("Finance");

    let allLinks = element.all(by.xpath("//a"));
    // console.log("Total links in the page :: " + allLinks.count());

    expect(allLinks.count()).toBe(2);

    allLinks.count().then(function (count) {
      console.log("Total links in the web page :: " + count);
    });
  });
});
