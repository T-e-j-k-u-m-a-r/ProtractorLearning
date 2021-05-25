const casual = require("casual");

describe("Caual Test Data Generator Demo", () => {
  it("Casual API", () => {
    console.log("Phone number :: " + casual.phone);
    console.log("Email ID :: " + casual.email);

    console.log("Country :: " + casual.country);
    console.log("City :: " + casual.city);
    console.log("Country Code  :: " + casual.country_code);
    console.log("UUID :: " + casual.uuid);
    console.log("Title :: " + casual.title);
    console.log("Address1 :: " + casual.address1);
    console.log("AM/PM :: " + casual.am_pm);
    console.log("Password :: " + casual.password);
  });
});
