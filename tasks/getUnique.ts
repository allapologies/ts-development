'use strict'

function getUnique (...args: number[]): number[] {
    let result: number[] = []
    for (let i=0; i < args.length; i++) {
        if (result.indexOf(args[i]) === -1) {
            result.push(args[i])
        }
    }

    return result
}
