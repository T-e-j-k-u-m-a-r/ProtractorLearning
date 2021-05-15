const { browser, by, element, ExpectedConditions } = require("protractor")

describe("Verify the presence of UI elements", () => {

    const ec = protractor.ExpectedConditions;

    beforeAll( () =>{

        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get("https://www.saucedemo.com/");

    })
    
    it("Verify if the elements are displayed on the screen", () => {

        //verify if the official logo is displayed or not
       expect(element(by.xpath('//div[@class="login_logo"]')).isPresent()).toBe(true)
       console.log("Official logo is displayed")


    })

    it("Verify if the elements are interactable on the screen", () => {

        //verify if the element is enabeld in the GUI or not
        expect(element(by.id('user-name')).isEnabled()).toBe(true)
        console.log("User name text box is enabled")
    
    })

    it("Enter and clear text on user name text box", () => {

    element(by.id('user-name')).sendKeys('testing');
    browser.sleep(2000)
    element(by.id('user-name')).clear()

    console.log("Text enterted and clear on user name text box successfully...")
     })




     it("Scroll till a specific element", () =>{

        browser.waitForAngularEnabled(false);
        browser.get("https://www.saucedemo.com/");
        browser.manage().window().maximize();

        element(by.className("login_logo"));
        element(by.id("user-name")).sendKeys("standard_user");
        element(by.id("password")).sendKeys("secret_sauce")
        element(by.id("login-button")).click();

        var addToCartButton = element(by.xpath("//button[@data-test='add-to-cart-sauce-labs-onesie']"));
        browser.executeScript("arguments[0].scrollIntoView()",addToCartButton);
        
        browser.sleep(3000)
     })


})