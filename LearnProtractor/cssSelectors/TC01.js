const { browser,by, element } = require("protractor")
const protractorHelper = require("protractor-helper")
const casual = require("casual");

describe("Mastering CSS Selectors", ()=>{

    beforeAll(()=>{

        browser.manage().window().maximize()
        browser.waitForAngularEnabled(false);
    })

    it("CSS SELECTOR DEMO - 1", async ()=>{
        await browser.get("https://demoqa.com/text-box")

        let fullNameLabel = await element(by.css("div[id='userName-wrapper'] > div > label"));
        let fullNameInputBox = await element(by.css("#userName[placeholder='Full Name']"))
        let emailIDInputBox = await element(by.css("#userEmail[placeholder = 'name@example.com']"))
        let currentAddressInputBox = await element(by.css("#currentAddress[placeholder = 'Current Address']"))
        let permanentAddressInputBox = await element(by.css("#permanentAddress"))
        let submitButton = await element(by.buttonText("Submit"))
        
        protractorHelper.waitForElementVisibility(fullNameLabel);
        protractorHelper.waitForElementVisibility(fullNameInputBox);
        protractorHelper.waitForElementVisibility(emailIDInputBox);
        protractorHelper.waitForElementVisibility(currentAddressInputBox);
        protractorHelper.waitForElementVisibility(permanentAddressInputBox);

        await fullNameInputBox.sendKeys("Protractor Testing")
        await browser.sleep(2000)
        await emailIDInputBox.sendKeys("xakora1591@64ge.com")
        await browser.sleep(2000)
        await currentAddressInputBox.sendKeys(casual._address1())
        await browser.sleep(2000)
        await permanentAddressInputBox.sendKeys(casual._address2())
        await browser.sleep(2000)

         //scroll into submit button in the screen

         //Note: Below statement also works for scrolling till submit button web element
         //await browser.executeScript("arguments[0].scrollIntoView();",submitButton)

         await browser.executeScript("window.scrollBy(0,9999)")
         await browser.sleep(2000)
         await  protractorHelper.click(submitButton,3000);
         await browser.sleep(2000)

         console.log("------Practice form filled successfully------")
    })
})