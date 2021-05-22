const { browser, element, by } = require("protractor");
const ec = browser.ExpectedConditions;

/*
Note: 
1. async await should be used for spec blocks or it blocks
2. outer most describe block shouldn't be added with async instead declare beforeall/beforeach 

*/

describe("Implementing Expected Conditions", function () {
  beforeAll(async () => {
    await browser.manage().window().maximize();
    await browser.waitForAngularEnabled(false);
    await browser.get("https://www.flipkart.com/");
  });

  it("Type 1 ", async () => {
    //Click on cancel button notification pop
    await element(by.buttonText("✕")).click();

    //click on eletronics hyperlink
    let electronicsLink = element(by.xpath("//div[text()='Electronics']"));
    await browser.wait(ec.elementToBeClickable(electronicsLink, 5000));
    browser.actions().mouseMove(electronicsLink).perform();

    //click on MI link from electronics section
    let allObj = element(by.linkText("All"));
    await browser.wait(ec.elementToBeClickable(allObj, 5000));
    allObj.click();

    //browser.sleep(3000);

    //mouse hover on electronics link
    let electronics_Link = element(by.xpath("//span[text()='Electronics']"));
    await browser.wait(ec.elementToBeClickable(electronics_Link, 5000));
    await browser.actions().mouseMove(electronics_Link).perform();

    let mi_Obj = element(by.linkText("Mi"));
    await browser.wait(ec.elementToBeClickable(mi_Obj, 5000));
    await mi_Obj.click();

    //browser.sleep(3000);

    let smartPhoneName = element(by.tagName("h1"));
    await browser.wait(ec.elementToBeClickable(smartPhoneName, 5000));
    smartPhoneName.getText().then(function (name) {
      console.log("Phone name:: " + name);
    });
  });
});
