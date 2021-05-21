exports.config = {
  directconnect: true,

  capabilities: {
    browserName: "chrome",
    // chromeOptions: {
    //args: ["--incognito"],
    // prefs: {
    //   //Note: The below still induces the Allow notification pop-up
    //   // "profile.managed_default_content_settings.notifications": "Allow",
    //   //Note: The below one works fine
    //   "profile.managed_default_content_settings.notifications": 1,
    // },
    // },
  },

  specs: ["toolsQA/Frames/TC02.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
