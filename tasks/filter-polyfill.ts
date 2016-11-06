type cbType = (element: number, index? : number) => boolean

Array.prototype.myFilter = function (callback: cbType) : number[] {
    let filteredArray :number[] = []
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