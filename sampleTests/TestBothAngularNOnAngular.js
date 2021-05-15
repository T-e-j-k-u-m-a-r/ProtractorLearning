const { browser } = require("protractor")

describe("Test both angular and non-angular app", () =>{

    beforeAll(() => {

        browser.manage().window().maximize()

    })



it("Test non-angular web app", () =>{

    browser.waitForAngularEnabled(false)
browser.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
browser.getTitle().then(function(pageTitle1){
    console.log(`Non- angular web apppage title : ${pageTitle1}`)
})

})


it("Test angular web app", () =>{

    browser.waitForAngularEnabled(true)
    browser.get("https://angular.io/guide/example-apps-list")
browser.getTitle().then(function(pageTitle2){
    console.log(`Non- angular web apppage title : ${pageTitle2}`)
})

    
})



})