const recursion = require("./recursion.js")
const utils = require("./utils.test.js")
//[1,2,3], 2 >> 1*2 = 2
//1 >> 1
//0 >> 0
//[0,3,2,1], 1 >> 0

let [response, expected] = [null, null]

testCountUp()
testCountDown()
testMultiplyFirstLoop()
testMultiplyFirst()


function testCountUp(){

    const checks = [
        {entry:10, tobe:[1,2,3,4,5,6,7,8,9,10]},
        {entry:1, tobe:[1]},
        {entry:2, tobe:[1,2]},
        {entry:0, tobe:[]},
        {entry:-1, tobe:[]},
    ]

    checks.forEach(e=>{
        response = JSON.stringify(recursion.countUp(e.entry))
        expected = JSON.stringify(e.tobe)

        utils.printTestResult("TestCountUp", expected, response)
    })
}

function testCountDown(){

    const checks = [
        {entry:10, tobe:[10,9,8,7,6,5,4,3,2,1]},
        {entry:1, tobe:[1]},
        {entry:2, tobe:[2,1]},
        {entry:0, tobe:[]},
        {entry:-1, tobe:[]},
    ]

    checks.forEach(e=>{
        response = JSON.stringify(recursion.countDown(e.entry))
        expected = JSON.stringify(e.tobe)

        utils.printTestResult("TestCountDown", expected, response)
    })
}

function testMultiplyFirstLoop(){
    const checks = [
        {entry1:[1,2,3], entry2:2, tobe:2},
        {entry1:[1,2,3], entry2:1, tobe:1},
        {entry1:[1,2,3], entry2:0, tobe:0},
        {entry1:[0,3,2,1], entry2:1, tobe:0},
        {entry1:[0,3,2,1], entry2:4, tobe:0},//ZERO
        {entry1:[0,3,2,1], entry2:5, tobe:0}//OUTSIDDE
    ]

    checks.forEach(e=>{
        response = recursion.multiplyFirstLoop(e.entry1, e.entry2)
        expected = e.tobe

        utils.printTestResult("TestMultiplyFirstLoop", expected, response, e.entry1, e.entry2)
    })
}

function testMultiplyFirst(){
    const checks = [
        {entry1:[1,2,3], entry2:2, tobe:2},
        {entry1:[1,2,3], entry2:1, tobe:1},
        {entry1:[1,2,3], entry2:0, tobe:0},//ZERO ELEMENTS
        {entry1:[0,3,2,1], entry2:1, tobe:0},
        {entry1:[0,3,2,1], entry2:4, tobe:0},//* ZERO
        {entry1:[0,3,2,1], entry2:5, tobe:0}//OUTSIDDE
    ]

    checks.forEach(e=>{
        response = recursion.multiplyFirst(e.entry1, e.entry2)
        expected = e.tobe

        utils.printTestResult("TestMultiplyFirst", expected, response, e.entry1, e.entry2)
    })
}