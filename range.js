module.exports = Range

function Range(n=0){
    if(n<=0){
        return []
    }

    n--

    return [...Range(n),n]
}