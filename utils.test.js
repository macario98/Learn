module.exports = {printTestResult}

function printTestResult(description,expected, response, ...params){
    
    let paramsFormat = ""
    if (params && params.length && params.length > 0){
        //paramsFormat = `(${params.reduce((p, c)=> p+JSON.stringify(c),"")})`
        paramsFormat = `(${params.map(e=>JSON.stringify(e)).join(",")})`

    }
    if(response == expected){
        console.info(`- ${description}${paramsFormat},SUCCESS: ${expected}`)
        return true
    }
    
    console.error(`x ${description}${paramsFormat},FAILED: ${expected} => ${response}`)
    return false
}

function print(...e){
    console.log(e)
}


//