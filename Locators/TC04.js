const { browser, element, by, driver } = require("protractor");

describe("Exploring switchTo() windows", () => {
  beforeEach(function () {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get("http://demo.automationtesting.in/Windows.html");
    //mouse hover and click
    const ele1 = element(by.xpath("//a[contains(text(),'SwitchTo')]"));
    const ele2 = element(by.xpath("(//ul[@class='dropdown-menu']//a)[2]"));

    browser.actions().mouseMove(ele1).perform();
    ele2.click();
    browser.sleep(2000);
  });

  it("Type 1", () => {
    const click1 = element(by.xpath("(//button[@class='btn btn-info'])[1]"));

    click1.click();

    let whs = browser.getAllWindowHandles();

    whs.then(function (ID) {
      const firstWindow = ID[0];
      const secondWindow = ID[1];
      console.log("firstWindow = " + firstWindow);
      console.log("secondWindow = " + secondWindow);

      browser.switchTo().window(secondWindow);
    });

    browser.getTitle().then(function (title) {
      console.log("Page title :: " + title);
    });

    element(by.xpath("//a[contains(text(),'Downloads')]")).click();

    browser.getTitle().then(function (title) {
      console.log("Navigated page title :: " + title);
    });

    whs.then(function (ID) {
      firstWindow = ID[0];
      secondWindow = ID[1];
      console.log("firstWindow = " + firstWindow);
      console.log("secondWindow = " + secondWindow);

      browser.switchTo().window(firstWindow);
    });

    browser.getTitle().then(function (title) {
      console.log("Page title :: " + title);
    });

    browser.sleep(3000);
  });

  it("Type 2", () => {
    const click1 = element(by.linkText("Open New Seperate Windows"));

    click1.click();

    const clickButton = element(by.xpath("//button[text()='click']"));
    clickButton.click();

    const whs = browser.getAllWindowHandles();

    whs.then(function (getID) {
      currentControlWindow = getID[1];
      parentControlWindow = getID[0];

      console.log("currentControlWindow :: " + currentControlWindow);
      console.log("parentControlWindow :: " + parentControlWindow);

      browser.switchTo().window(parentControlWindow);
      browser.sleep(3000);
    });

    browser.getTitle().then(function (title) {
      console.log("Page title :: " + title);
    });
  });

  it("Type 3", () => {
    const windowButton = element(by.linkText("Open Seperate Multiple Windows"));
    windowButton.click();

    const clickButton = element(by.xpath("//button[text()='click ']"));
    clickButton.click();

    browser.sleep(3000);

    const ghs = browser.getAllWindowHandles();

    ghs.then(function (ID) {
      console.log("Count :: " + ID.length);

      firstWindow = ID[0];
      secondWindow = ID[1];
      thirdWindow = ID[2];

      browser.switchTo().window(firstWindow);
    });

    browser.getTitle().then(function (title) {
      console.log("Page title :: " + title);
    });
  });
});
