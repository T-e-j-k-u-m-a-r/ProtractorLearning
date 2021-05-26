const { ConsoleReporter } = require("jasmine");
const { browser, element,by } = require("protractor")

describe("Orange HRM - 2 Scenarios", () =>{


    beforeAll(() =>{

        browser.waitForAngularEnabled(false);
        browser.get("https://opensource-demo.orangehrmlive.com/");
        browser.manage().window().maximize()

    })


    it("TS01 - Verify the presence of all UI elements",() => {

        element(by.xpath('//span[text()="( Username : Admin | Password : admin123 )"]')).getText().then(function(loginDetails){
            
          console.log(`Login details are :: ${loginDetails}`)
          expect(loginDetails).toEqual("( Username : Admin | Password : admin123 )");

        })


    })


    it("TS02 - Print & verify copy right information",()=>{
        
    element(by.xpath("//div[@id='footer']/div[1]")).getText().then((appversion) =>{

    console.log(`App version, Copyright Information wiht year details :: ${appversion}`)
    expect(appversion).toContain("OrangeHRM 5.8");

    })
    })


})