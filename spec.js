const { browser } = require("protractor")

describe("TC01", function(){

it("TS01", function(){

    
    browser.get("https://juliemr.github.io/protractor-demo/")
   
    browser.manage().window().maximize()
    browser.sleep(3000)
    
    //print tab title
    browser.getTitle().then(function(title){
        console.log(`Page title : ${title}`)
    })
    
    //print current URL
    browser.getCurrentUrl().then(function(pageURL){
        console.log(`Current page URL : ${pageURL}`)
    });
   
})

it("Perform Operations",function(){

    //enter first # 

    //select operator

    //enter second # 

    //click on GO button

})


})