'use strict'

type arr = Array<number|string>

function isInArray(array:arr, ...elements: arr): boolean {
    for (let element of elements) {
        if (array.indexOf(element) === -1) {
            return false
        }
    }

    return true
}
