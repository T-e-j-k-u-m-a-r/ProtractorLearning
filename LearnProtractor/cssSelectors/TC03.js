const { browser, element } = require("protractor");


//Handling all types of clicks 
describe("Clicks Demo", () => {

    beforeAll(async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await browser.get("https://demoqa.com/buttons")

    })
    it("Handling different types of clicks", async () => {
        //const EC = browser.ExpectedConditions;

        //Object Identification
        let doubleClickButton = await element(by.id("doubleClickBtn"))
        let rightClickButton = await element(by.id("rightClickBtn"))
        let simpleClickButton = await element(by.buttonText("Click Me"))

        //print the page title
        await browser.getTitle().then(function (title) {
            console.log(`Page title : ${title}`)
        })

        //1 - Perform double click action

        // browser.wait(EC.elementToBeClickable(doubleClickButton), 5000);
        await browser.actions().doubleClick(doubleClickButton).perform();
        await browser.sleep(5000)

        let confirmationOfDoubleClickText = await element(by.id("doubleClickMessage"))
        await confirmationOfDoubleClickText.getText().then(async function (msg) {
            await console.log(`Confirmation message : ${msg}`)
        })



        //2 - Perform right click action

        // browser.wait(EC.elementToBeClickable(doubleClickButton), 5000);
        await browser.actions().click(rightClickButton, protractor.Button.RIGHT).perform();
        await browser.sleep(5000)

        let confirmationOfRightClickText = await element(by.id("rightClickMessage"))
        await confirmationOfRightClickText.getText().then(async function (msg) {
            await console.log(`Confirmation message : ${msg}`)
        })


        //3 - Perform simple click action

        // browser.wait(EC.elementToBeClickable(doubleClickButton), 5000);
        await browser.actions().doubleClick(simpleClickButton).perform();
        await browser.sleep(5000)

        let confirmationOfSimpleClickText = await element(by.id("dynamicClickMessage"))
        await confirmationOfSimpleClickText.getText().then(async function (msg) {
            await console.log(`Confirmation message : ${msg}`)
        })
    })

})