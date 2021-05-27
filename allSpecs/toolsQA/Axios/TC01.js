const axios = require("axios");
const chalk = require("chalk");
const casual = require("casual");
const moment = require("moment");

describe(chalk.yellow("GET Request Demo"), function () {
  beforeAll(function () {
    console.log(
      "------------------BEFORE ALL BLOCK : STARTS----------------------"
    );

    console.log("CITY :: " + casual.city);
    console.log("COUNTRY :: " + casual.country);
    console.log("COUNTRY CODE :: " + casual.country_code);
    console.log("COMPANY NAME :: " + casual.company_name);
    console.log("CARD TYPE :: " + casual.card_type);
    console.log("CARD NUMBER :: " + casual.card_number());
    console.log("ARRAY OF WORDS :: " + casual.array_of_words());

    console.log("Current TimeSTAMP >>  " + moment().format("DD MMM YYYY"));

    console.log("ADDRESS :: " + casual._address());

    console.log(
      "------------------BEFORE ALL BLOCK : ENDS----------------------"
    );
  });

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
