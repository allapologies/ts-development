'use strict'

type jsPrimitives = string | number | boolean

function getUnique<T> (...args: T[]): T[] {
    let result: T[] = []
    for (let i=0; i < args.length; i++) {
        if (result.indexOf(args[i]) === -1) {
            result.push(args[i])
        }
    }

    return result
}

const uniqArray = getUnique<jsPrimitives>(1,2,'cow',1,false, 6,true, 'cow', false, false, 2)
console.log(uniqArray)