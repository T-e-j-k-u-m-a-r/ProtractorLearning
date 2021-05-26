const { browser, by, element } = require("protractor")

describe("OpenCart Testing", () => {

    it("Login to SauceDemo with valid credentails", ()=>{

        browser.waitForAngularEnabled(false);
        browser.get("https://www.saucedemo.com/");
        browser.manage().window().maximize();

        element(by.className("login_logo"));
        element(by.id("user-name")).sendKeys("standard_user");
        element(by.id("password")).sendKeys("secret_sauce")
        element(by.id("login-button")).click();


        //print home page title 
        browser.getCurrentUrl().then((url)=>{
            console.log(`Home Page URL : ${url}`)
        })

        //verify home page URL 
        expect(browser.getCurrentUrl()).toEqual("https://www.saucedemo.com/inventory.html")
        browser.sleep(3000)

        //click on burger icona and logout
        element(by.xpath("//button[@id='react-burger-menu-btn']")).click();
        browser.sleep(2000)
        element(by.id("logout_sidebar_link")).click();

        browser.sleep(3000)

        expect(element(by.xpath("//div[@class='login_credentials']//h4[1]")).getText()).toContain("Accepted usernames")


    })

    it("Login to SauceDemo with Invalid credentails", ()=>{

        browser.waitForAngularEnabled(false);
        browser.get("https://www.saucedemo.com/");
        browser.manage().window().maximize();

        element(by.className("login_logo"));
        element(by.id("user-name")).sendKeys("standard_user");
        element(by.id("password")).sendKeys("secret_sauce11")
        element(by.id("login-button")).click();
        browser.sleep(3000)

        //get text of error message and compare
        expect(element(by.xpath("//h3[text()='Epic sadface: Username and password do not match any user in this service']")).getText()).toContain("Username and password do not match any user in this service")

    })


})