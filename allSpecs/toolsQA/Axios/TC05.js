//How to make an HTTP request using an URL and extract responseCode

const { browser, element, by } = require("protractor");
const axios = require("axios");
const chalk = require("chalk");

describe("Validate Broken or Dead link in an Web App", function () {
  var internalLinkCount = 0;
  var externalLinkCount = 0;

  beforeAll(async function () {
    await browser.manage().window().maximize();

    //Note: Enable the bleow link only for non-angular type web app's
    await browser.waitForAngularEnabled(false);
    await browser.get("http://demo.guru99.com/test/newtours/");
  });

  it("Print total links", async function () {
    let allLinks = element.all(by.xpath("//a"));
    await allLinks.count().then(function (cnt) {
      console.log(`Total links :: ${cnt}`);
    });
  });

  it("Calculate total internal and external links", async function () {
    let allLinks = element.all(by.xpath("//a"));

    allLinks.each(async function (ele) {
      let link = await ele.getAttribute("href");

      if (link.includes("guru99")) {
        internalLinkCount++;
        // console.log(
        //   chalk.yellow(
        //     ">> " +
        //       (await ele.getAttribute("href")) +
        //       " >> INTERNAL Link ---> Count = " +
        //       internalLinkCount
        //   )
        // );
      } else {
        externalLinkCount++;
        // console.log(
        //   chalk.green(
        //     ">> " +
        //       (await ele.getAttribute("href")) +
        //       " >> EXTERNAL Link ---> Count = " +
        //       externalLinkCount
        //   )
        // );
      }
    });
  });

  it("Print total internal and external links", function () {
    console.log("Total Internal Links :: " + internalLinkCount);
    console.log("Total External Links :: " + externalLinkCount);
  });
});
