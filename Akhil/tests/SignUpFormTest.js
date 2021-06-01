//Objective: Automate sign up page

//Importing files from difference location
const testData = require("../testdata/signupForm.json")
const signUpForm = require("../pages/signUpForm")

describe("Signup Form", () => {
    beforeAll(() => {
        browser.manage().window().maximize()
        browser.waitForAngularEnabled(false)
    })

    it("TC01", () => {

        signUpForm.get(testData.signUp.appURl)
        signUpForm.enterFullName(testData.signUp.fullName)
        signUpForm.enterEmailID(testData.signUp.email_id)
        signUpForm.enterTelephoneNumber(testData.signUp.telephone)

    })

    xit("File upload", () => {

    })

    xit("File download", () => {

    })










})