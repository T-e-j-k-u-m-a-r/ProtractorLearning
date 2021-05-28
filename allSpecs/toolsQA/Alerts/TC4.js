const { browser, element, by } = require("protractor")

describe("Options Locators for Drop Down", () =>{

    beforeAll(async function(){
    await browser.manage().window().maximize()
    })

it("Type 1", async ()=>{

    await browser.get("https://juliemr.github.io/protractor-demo/")
    await browser.sleep(2000)

    await browser.getTitle().then(function(title){

        console.log(`App page title : ${title}`)
    })

    let allOperators =  element.all(by.xpath("(//option)"));
     allOperators.each(function(element){
         element.click()    
        
         element.getText().then(function (text){
            console.log(`Clicked on ${text} operator`)
        })
    
    })
})

})