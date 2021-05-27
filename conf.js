let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");
//const failFast = require("protractor-fail-fast");

exports.config = {

  
  //plugins: [failFast.init()],

  directconnect: true,
  framework: "jasmine",

  /*Note: 
  As Selenium 4 doesn't support WBJS control flow,
  Now there should be different mechanism that needs to be adopted for handling promises in Protractor
  So, We should disable promise handling by WebDriverJS by using below command
  */

  SELENIUM_PROMISE_MANAGER: false,

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
    chromeOptions: {
      //Show FPS data
      //args: ["show-fps-counter=true"],
      //Below option is used to handle allow location share pop up in chrome browser
      //args: ["--incognito"],
      //OR Below code also works
      // prefs: {
      //   "profile.managed_default_content_settings.notifications": 1,
      // },
      //Below option is used to make sure right click is working
      w3c: false,
    },
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

  //waitForAngular: false
  //How to Run multi spec files at once
  // specs: [
  //   "sampleTests/TC01.js",
  //   "sampleTests/TC02.js",
  //   "sampleTests/TC03.js",
  //   "sampleTests/TC04.js",
  //   "sampleTests/TestBothAngularNOnAngular.js",
  // ],

  //How to run single spec file
  //specs: ["toolsQA/Find_Total_Internal_External_Links/TC01.js"],
  specs: ["allSpecs/toolsQA/Axios/TC01*.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000,
  },

  //Run test on multi browsers at once
  // multiCapabilities: [
  //   // {
  //   //   browserName: "firefox",
  //   // },
  //   {
  //     browserName: "chrome",
  //     chromeOptions: {
  //       prefs: {
  //         "profile.managed_default_content_settings.notifications": 1,
  //       },
  //     },
  //   },
  // ],

  //Run test on headless mode

  //Run different test types (smoke, sanity, regression & etc using scripts keyword)

  //OnPrepare Block
  onPrepare: function () {

   
    //To print total duration of the automation run for protractor-beautiful reporter
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
        prefixes: {
          success: "✔️",
          failure: "❌",
          pending: "🚧",
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
    //failFast.clean();
  },
};
