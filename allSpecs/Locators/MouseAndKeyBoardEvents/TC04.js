const { browser } = require("protractor");

describe("Mouse Operations", function () {
  beforeAll(() => {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Right Click Demo", function () {
    browser.get("http://demo.guru99.com/test/simple_context_menu.html");
    let rightClickButton = element(by.xpath("//span[text()='right click me']"));

    browser
      .actions()
      .click(rightClickButton, protractor.Button.RIGHT)
      .perform();
    browser.sleep(5000);
  });
});
