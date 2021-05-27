const { browser } = require("protractor")

describe("Handling all types of alerts", () =>{
    it("Simple Alert - 1", () =>{

        browser.get("http:www.google.com")
        browser.getTitle().then(function(title){
            console.log(`App title:: ${title}`)
        })

    })

    it("", ()=>{
        
    })
})