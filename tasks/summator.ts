'use strict'

function summator(...args: Array<number|string>): number {
    let result: number = 0
    for (let element of args) {
        result += (typeof(element) === 'string') ? Number(element) : element
    }

    return result
}