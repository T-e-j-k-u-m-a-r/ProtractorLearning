const path = require("path")

let file_upload = function (testDataFilePath, browserButtonEle, clickUploadButton) {

    let testDataPath = testDataFilePath
    let fpath = path.resolve(__dirname, testDataPath);

    console.log(`fpath : ${fpath}`)
    browser.sleep(2000)
    browserButtonEle.sendKeys(fpath)
    browser.sleep(2000)
    clickUploadButton.click()
    browser.sleep(2000)
    console.log('File upload completed...');
}