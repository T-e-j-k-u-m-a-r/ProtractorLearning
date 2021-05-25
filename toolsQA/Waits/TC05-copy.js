//How to make an HTTP request using an URL and extract responseCode

const { browser, element, by } = require("protractor");
const axios = require("axios");
const chalk = require("chalk");

describe("Validate Broken or Dead link in an Web App", function () {
  //Global declaration of allLinks element
  //var allLinks = element.all(by.xpath("//a"));

  beforeAll(async function () {
    await browser.manage().window().maximize();

    //Note: Enable the bleow link only for non-angular type web app's
    await browser.waitForAngularEnabled(false);
    await browser.get("http://demo.guru99.com/test/newtours/");
  });

  xit("Print total links", async function () {
    let allLinks = element.all(by.xpath("//a"));
    await allLinks.count().then(function (cnt) {
      console.log(`Total links :: ${cnt}`);
    });
  });

  fit("Print all links", async function () {
    let allLinks = element.all(by.xpath("//a"));
    let internalLinkCount = 0;
    let externalLinkCount = 0;

    allLinks.each(async function (ele) {
      let link = await ele.getAttribute("href");

      if (link.includes("guru99")) {
        console.log(
          chalk.yellow(
            ">> " +
              (await ele.getAttribute("href")) +
              " >> INTERNAL Link  --->" +
              internalLinkCount
          )
        );
        internalLinkCount++;
      } else {
        console.log(
          chalk.green(
            ">> " +
              (await ele.getAttribute("href")) +
              " >> EXTERNAL Link --->" +
              externalLinkCount
          )
        );
        externalLinkCount++;
      }
    });

    //print total internal link and external links
    // console.log("Total internal links :: " + internalLinkCount);
    // console.log("Total external links :: " + externalLinkCount);
  });

  xit("Print total internal and external links", function () {
    var domainName = "guru99";
    let allLinks = element.all(by.xpath("//a"));
    var internalLinkCount = 0;
    var externalLinkCount = 0;

    allLinks.each(async function (ele) {
      if ((await ele.getAttribute("href")).includes(domainName)) {
        internalLinkCount++;
      } else {
        externalLinkCount++;
      }
    });

    console.log("Total Internal Links :: " + internalLinkCount);
    console.log("Total Internal Links :: " + externalLinkCount);
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
