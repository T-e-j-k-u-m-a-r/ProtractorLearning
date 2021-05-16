const { browser, element } = require("protractor");

describe("Handling multi tabs/windows", () => {
  beforeEach(function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("http://demo.automationtesting.in/Windows.html");

    //mhover on SwitchTo()
    const switchToMenu = element(by.linkText("SwitchTo"));
    browser.actions().mouseMove(switchToMenu).perform();

    //click on windows sub menu
    const windowsSubMenu = element(by.linkText("Windows"));
    windowsSubMenu.click();
  });

  it("Type 1", () => {
    const click1 = element(
      by.xpath("//div[contains(@class,'active tab-pane')]//button[1]")
    );

    click1.click();
    browser.sleep(3000);

    let whs = browser.getAllWindowHandles();

    whs.then(function (handle) {
      console.log("Total windows handles in tab 1 :: " + handle.length);

      const firstWindow = handle[0];
      const secondWindow = handle[1];

      console.log("First window handle ID:: " + firstWindow);
      console.log("Second window handle ID:: " + secondWindow);

      browser.switchTo().window(firstWindow);

      const pageTitle1 = browser.getTitle();
      pageTitle1.then(function (title1) {
        console.log("Page title :: " + title1);
      });
    });
  });

  it("Type 2", () => {
    //click on 2nd sub menu
    const secondMenu = element(by.linkText("Open New Seperate Windows"));
    secondMenu.click();

    //click on click2
    const click2 = element(
      by.xpath(
        "//p[text()='click the button to open a new window with some specifications ']/following-sibling::button"
      )
    );
    click2.click();
    //get all window handle IDs
    const whs2 = browser.getAllWindowHandles();

    //print all window handle IDs
    whs2.then(function (whs_tab2) {
      console.log("Total windows :: " + whs_tab2.length);

      const firstW = whs_tab2[0];
      const secondW = whs_tab2[1];

      console.log("fW :: " + firstW);
      console.log("sW :: " + secondW);

      //switch to any specific window using ID/titlename
      browser.switchTo().window(firstW);
    });

    //print the title name
    browser.getTitle().then(function (ttl) {
      console.log("Window title :: " + ttl);
    });
  });

  fit("Type 3", () => {
    //click on 3rd menu
    const thirdMenu = element(by.linkText("Open Seperate Multiple Windows"));
    thirdMenu.click();

    //click on click3
    const thirdClickButton = element(by.xpath("//button[text()='click ']"));
    thirdClickButton.click();

    //print all window HandlingAllTypesWindowHandles
    const whs_3 = browser.getAllWindowHandles();

    whs_3.then(function (window_handle3) {
      console.log("Total window handles :: " + window_handle3.length);

      const fWh = window_handle3[0];
      const sWh = window_handle3[1];
      const tWh = window_handle3[2];

      browser.switchTo().window(tWh);

      browser.getTitle().then(function (pTitle) {
        console.log("Window title :: " + pTitle);
      });
    });
  });
});
