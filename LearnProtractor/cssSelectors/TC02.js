const { browser,by, element } = require("protractor")
const protractorHelper = require("protractor-helper")

describe("Mastering CSS Selectors", ()=>{

    var expandButton;
    var collapseButton

    beforeAll(async ()=>{

       await  browser.manage().window().maximize()
       await  browser.waitForAngularEnabled(false);
       await browser.get("https://demoqa.com/checkbox")
       expandButton = await element(by.css("button[title='Expand all']"));
       collapseButton = await element(by.css("button[title='Collapse all']"));
    })

    it("CSS SELECTOR DEMO - 2", async ()=>{
        
        await expandButton.click();
        await browser.sleep(2000)
        await collapseButton.click();

    })

    it("Verify if the DESKTOP web element is displayed post clicking on expand all button",async()=>{
        await expandButton.click();
        let desktopStaticUIElement = await element(by.css("label[for='tree-node-desktop']>span:last-of-type"))
        await protractorHelper.waitForElementVisibility(desktopStaticUIElement,5000)

    })

    console.log("------Verified checkbox successfully------")

})