const { browser, element, by } = require("protractor");
const axios = require("axios");

//Yet to be researched ------------------------->>>>>>>>>>>>>>>>

describe("Find total broken and proper link", function () {
  beforeAll(async function () {
    await browser.manage().window().maximize();

    //Note: Enable the bleow link only for non-angular type web app's
    await browser.waitForAngularEnabled(false);
    await browser.get("http://demo.guru99.com/test/newtours/");
  });

  xit("Validate a link is deadlink or broken link", async function () {
    var deadLInkCount;
    var properLinkCount;
    await browser.get("http://demo.guru99.com/test/newtours/");
    let allLinks = element.all(by.xpath("//a"));
    await allLinks.each(async function (ele, index) {
      //console.log(await ele.getAttribute("href"));

      //GET REQUEST -> STARTS
      let link = await ele.getAttribute("href");
      axios.get(link).then((response) => {
        if (
          response.status == undefined ||
          response.status >= 400 ||
          response.status == null
        ) {
          console.log("Index = " + index + "," + link + " >> Its a dead line");
          deadLInkCount++;
        } else {
          console.log(
            "Index = " +
              index +
              "," +
              link +
              " >> Its proper link with status code : " +
              response.status
          );
          properLinkCount++;
        }
      });
      //GET REQUEST -> ENDS
    });

    //Print the total broken links
    console.log("Total dead link :: " + deadLInkCount);

    //Print the total proper links
    console.log("Total proper link :: " + properLinkCount);
  });
});
