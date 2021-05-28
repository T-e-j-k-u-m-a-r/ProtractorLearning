const { browser, element, by } = require("protractor")

describe("Options Locators for Drop Down", () =>{

it("Type 1", async ()=>{

    await browser.get("https://juliemr.github.io/protractor-demo/")
    await browser.sleep(2000)

    await browser.getTitle().then(function(title){

        console.log(`App page title : ${title}`)
    })

    let operationsDropDown = await element.all(by.options('value for (key, value) in operators'))
    
    await operationsDropDown.each(async function(ele){
       await ele.getText().then(async function(operator){
            console.log(`Operator : ${operator}`)
        })
    })

})

})