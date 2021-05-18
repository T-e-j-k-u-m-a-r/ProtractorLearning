const { browser, element, by } = require("protractor");

describe("Handling Frames", () => {
  beforeEach(() => {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  });

  it("Frame 1 :: ", () => {
    browser.get("http://demo.automationtesting.in/Frames.html");
    browser.switchTo().frame(0);

    element(by.tagName("input")).sendKeys("Handling IFrames");

    browser.switchTo().defaultContent();
    const header = element(by.linkText("Single Iframe"));
    header.getText().then(function (title) {
      console.log("Header Title1 :: " + title);
    });
  });

  it("Frame 2::", () => {
    browser.get("https://ide.geeksforgeeks.org/tryit.php");
    browser.switchTo().frame(1);

    //print the value of static inside the frame
    const h2tagName = element(by.xpath("//h2[text()='Welcome To GFG']"));

    h2tagName.getText().then(function (txt) {
      console.log("Static text inside iFrame :: " + txt);
    });

    //switch back to default page
    browser.switchTo().defaultContent();

    //print the title of a from
    const formTitle = element(
      by.xpath("//p[text()='Edit the code and Run to see changes']")
    );

    formTitle.getText().then(function (titl) {
      console.log("Form title : " + titl);
    });
  });
});
