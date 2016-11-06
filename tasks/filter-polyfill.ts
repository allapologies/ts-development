type elementType = number | string
type callbackType = (element: elementType, index : number) => boolean

Array.prototype.myFilter = function (callback: callbackType) : elementType[] {
    let filteredArray :elementType[] = []
    for (let i = 0; i< this.length; i++) {
        if (callback(this[i], i)) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

let test = [1,2,3,4,3].myFilter(function(value) {
    return value % 2 === 0
})

console.log(test)