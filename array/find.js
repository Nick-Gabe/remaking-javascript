Array.prototype.find = function (callback, thisArg = this) {
    if(typeof callback !== 'function') throw TypeError(`${callback} is not a function`)
    for (let index = 0; index < thisArg.length; index++) {
        if (callback(thisArg[index], index, thisArg)) return thisArg[index]
    }
    return undefined
}