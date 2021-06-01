const path = require("path");
const { browser, element } = require("protractor");

describe('File upload & download demo', () => {
    beforeAll(function () {
        browser.manage().window().maximize()
        browser.waitForAngularEnabled(false)

    });
    it('Upload Demo', () => {

        let testDataPath = "C:/Users/admin/Music/LearnJS/Part4/Akhil/testdata/signupForm.json"
        let fpath = path.resolve(__dirname, testDataPath);

        console.log(`fpath : ${fpath}`);
        browser.get("https://cgi-lib.berkeley.edu/ex/fup.html")
        browser.sleep(2000)
        element(by.name("upfile")).sendKeys(fpath)
        browser.sleep(2000)
        element(by.name("note")).sendKeys("Protractor Testing")
        element(by.css('input[type = "submit"][value="Press"]')).click()
        browser.sleep(2000)
        console.log('File upload completed...');

    });

    xit('Download Demo', () => {



    });

});