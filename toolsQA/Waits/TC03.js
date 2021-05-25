const { browser, element } = require("protractor");
const chalk = require("chalk");
//Illustration of using Chalk npm package...

describe(
  chalk.blue("Find broken or dead links in an application"),
  function () {
    beforeAll(function () {
      browser.waitForAngularEnabled(false);
    });

    describe(chalk.blue("Dead Link - Broken Link"), function () {
      beforeEach(function () {
        browser.manage().window().maximize();
        browser.get("http://demo.guru99.com/test/newtours/");
      });

      it(chalk.yellow("Print page title"), function () {
        browser.getTitle().then(function (title) {
          console.log(chalk.magenta(`Page title :: ${title}`));
        });
      });

      it(chalk.yellow("Print total links"), function () {
        let allLinks = element.all(by.xpath("//a"));

        allLinks.each(function (element, index) {
          element.getAttribute("href").then(function (hrefValue) {
            console.log(
              chalk.white(`Index value ${index} || href value :: ${hrefValue}`)
            );
          });
        });

        allLinks.count().then(function (count) {
          console.log(chalk.magenta(`Total links :: ${count}`));
        });
      });
    });
  }
);
