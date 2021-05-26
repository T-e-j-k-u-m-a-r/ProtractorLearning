const { browser, element, by } = require("protractor");
const moment = require("moment");

describe("Handling Date", function () {
  beforeEach(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("https://letcode.in/calendar");
  });

  it("Day +2", function () {
    let futureDate = moment().add(2, "d").format("D");
    element(by.buttonText(futureDate)).click();

    browser.sleep(3000);
    console.log("+2 date to current date is selected");
  });

  it("Next Week", function () {
    let futureWeek = moment().add(7, "d").format("D");
    element(by.buttonText(futureWeek)).click();

    browser.sleep(3000);
    console.log("Next week is selected");
  });

  fit("Add 30 days - Next Month", function () {
    let futureMonth = moment().add(30, "d").format("D MMM");
    let date = futureMonth.split(" ")[0];
    let month = futureMonth.split(" ")[1];

    element(by.xpath("(//div[@class='datepicker-nav-month'])[1]")).click();
    browser.sleep(3000);

    element(by.xpath(`(//div[text()='${month}'])[1]`)).click();
    element(by.xpath(`(//button[text()='${date}'])[1]`)).click();
    browser.sleep(3000);
    console.log("Next month after 30 days is selected");
  });
});
