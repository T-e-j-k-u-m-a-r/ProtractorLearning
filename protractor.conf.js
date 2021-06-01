let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");

// An example configuration file.
exports.config = {
  directConnect: true,


  capabilities: {
    browserName: "chrome",

  },


  framework: "jasmine",


  specs: ["Akhil/research_work/TC01.js"],


  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  jasmineNodeOpts: {
    print: function () { }
  },

  onPrepare: function () {

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );


    new HtmlReporter({
      baseDirectory: "tmp/screenshots",
      takeScreenShotsOnlyForFailedSpecs: true,
    });

    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "tmp/screenshots",
      }).getJasmine2Reporter()
    );

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


  }
};
