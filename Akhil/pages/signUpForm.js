let signUpForm = function () {

    this.fullName = element(by.id("username"))
    this.emailID = element(by.id("email"))
    this.telePhoneNumber = element(by.id("tel"))

    this.get = function (url) {
        browser.get(url)
    }

    this.enterFullName = function (fname) {
        this.fullName.sendKeys(fname)
    }

    this.enterEmailID = function (mailID) {
        this.emailID.sendKeys(mailID)
    }

    this.enterTelephoneNumber = function (contactNumber) {
        this.telePhoneNumber.sendKeys(contactNumber)
    }

}

module.exports = new signUpForm();