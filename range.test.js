const range = require("./range.js")
const utils = require("./utils.test.js")

let [response, expected] = [null, null]


function testRange(){
    const checks = [
        {entry:-1, toBe:[]},
        {entry:0, toBe:[]},
        {entry:10, toBe:[0,1,2,3,4,5,6,7,8,9]},
    ]

    checks.forEach(e =>{
        response = JSON.stringify(range(e.entry))
        expected = JSON.stringify(e.toBe)

        utils.printTestResult("TestRange", expected, response, e.entry)
    })
}

testRange()
