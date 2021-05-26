const axios = require("axios");
const chalk = require("chalk");

describe(chalk.yellow("GET Request Demo"), function () {
  it(chalk.magenta("Try 1"), function () {
    axios
      .get("https://reqres.in/api/users/2")
      .then(function (response) {
        // handle success
        console.log("------------------------------------------");
        console.log("Status Code :: " + response.status);
        console.log("Status Code :: " + response.statusText);
        console.log("------------------------------------------");
        // console.log(response);
        // console.log("------------------------------------------");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  fit(chalk.magenta("Try 2"), function () {
    axios
      .get("http://demo.guru99.com/test/newtours/")
      .then((response) => {
        //console.log(response.data);
        console.log("------------------------------------------");
        console.log("Status Code :: " + response.status);
        console.log("Status Code :: " + response.statusText);
        console.log("------------------------------------------");
        //console.log(response.headers);
        //console.log(response.config);
        // console.log("------------------------------------------");
        // console.log(response);
        // console.log("------------------------------------------");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  fit("Try 3 ::", function () {
    axios.get("http://demo.guru99.com/test/newtours/").then((response) => {
      if (response.status >= 400) {
        console.log(" >> Its a dead line");
      } else {
        console.log(
          " >> Its proper link with status code : " + response.status
        );
      }
    });
  });
});
