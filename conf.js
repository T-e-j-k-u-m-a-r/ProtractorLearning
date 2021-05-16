let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");

exports.config = {
  directconnect: true,
  framework: "jasmine",

  //How to disable/skip certain tests from execution
  // exclude: [
  //   "sampleTests/TC01.js",
  //   "sampleTests/TC02.js",
  //   "sampleTests/TC03.js",
  //   "sampleTests/TC04.js",
  // ],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 1,
  },

  //How to run all tests in single instance of chrome browser
  // capabilities: {
  //   browserName: "chrome",
  //   chromeOptions: {
  //     debuggerAddress: "localhost:51473",
  //   },
  // },

  waitForAngular: false,
  //How to Run multi spec files at once
  // specs: [
  //   "sampleTests/TC01.js",
  //   "sampleTests/TC02.js",
  //   "sampleTests/TC03.js",
  //   "sampleTests/TC04.js",
  //   "sampleTests/TestBothAngularNOnAngular.js",
  // ],

  //How to run single spec file
  specs: ["Locators/HandlingWindowHandles/HandlingAllTypesWindowHandles.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  //Run test on multi browsers at once
  // multiCapabilities: [{
  //     browserName: 'firefox'
  //   }, {
  //     browserName: 'chrome'
  //   }]

  //Run test on headless mode

  //Run different test types (smoke, sanity, regression & etc using scripts keyword)

  //OnPrepare Block
  onPrepare: function () {
    //To print total duration of the automation run for protractor-beatutiful reporter
    const startTime = new Date();
    // Add a screenshot reporter:
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "reports-tmp",
        docTitle: function () {
          const finishTime = new Date();
          const diffSeconds = Math.floor((finishTime - startTime) / 1000);

          return `Research Project Report (Total Duration ${diffSeconds}s)`;
        },
      }).getJasmine2Reporter()
    );

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true,
        },
      })
    );

    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    var reporter = new HtmlReporter({
      baseDirectory: "tmp/screenshots",
    });

    //Take screen shots only for failed test cases
    new HtmlReporter({
      baseDirectory: "tmp/screenshots",
      takeScreenShotsOnlyForFailedSpecs: true,
    });

    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "tmp/screenshots",
      }).getJasmine2Reporter()
    );

    //Research >> 🦁
    //Allure reporting
    // var AllureReporter = require("jasmine-allure-reporter");
    // jasmine.getEnv().addReporter(
    //   new AllureReporter({
    //     resultsDir: "allure-results",
    //   })
    // );

    //end of onPrepare Function 🦁
  },

  beforeLaunch: function () {
    console.log("Before launch block....");
  },

  afterLaunch: () => {
    console.log("After launch block....");
  },
};
