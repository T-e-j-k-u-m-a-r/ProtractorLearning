const { browser, element, by } = require("protractor");
const protractorHelper = require("protractor-helper");

describe("Handling Date Picker", function () {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  fit("Type 1 - Date Picker Demo", function () {
    browser.get(
      "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    );
    browser.sleep(2000);

    //Login to Orange HRM
    element(by.id("txtUsername")).sendKeys("Admin");
    element(by.id("txtPassword")).sendKeys("admin123");
    element(by.id("btnLogin")).click();

    browser.sleep(3000);

    let timeObj = element(by.xpath("//b[text()='Time']"));
    let timeSheetObj = element(by.id("menu_time_Timesheets"));
    let myTimesheetsObj = element(by.id("menu_time_viewMyTimesheet"));
    let addTimesheetObj = element(by.id("btnAddTimesheet"));
    let time_dateObj = element(by.id("time_date"));
    let monthObj = element(by.xpath("//select[@data-handler='selectMonth']"));
    let yearObj = element(by.xpath("//select[@data-handler='selectYear']"));

    browser
      .actions()
      .mouseMove(timeObj)
      .mouseMove(timeSheetObj)
      .mouseMove(myTimesheetsObj)
      .perform();
    myTimesheetsObj.click();

    browser.sleep(3000);

    addTimesheetObj.click();

    browser.sleep(3000);

    let time_date = element(by.id("time_date"));
    time_date.click();

    let month = element(
      by.xpath("//div[@class='ui-datepicker-title']//select[1]")
    );
    let year = element(
      by.xpath("(//div[@class='ui-datepicker-title']//select)[2]")
    );

    month.sendKeys("Sep");
    browser.sleep(3000);

    year.click();
    element(
      by.xpath('//select[@class="ui-datepicker-year"]//option[text()="1987"]')
    ).click();
    browser.sleep(3000);

    let date = 26;

    let dateObj = element(
      by.xpath(
        '//table[@class="ui-datepicker-calendar"]' +
          "//tbody//tr//td//a[text()=" +
          '"' +
          date +
          '"' +
          "]"
      )
    );

    dateObj.click();
    browser.sleep(5000);

    element(by.id("addTimesheetBtn")).click();
    browser.sleep(5000);
  });
});
