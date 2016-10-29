'use strict'

const example = 'test one two three'

function converter (sentence: string): string {
    let wordsArr = sentence.split(' ')
    let newString = ``

    for (let word of wordsArr) {
        if (word.length === 3) {
            newString += word.replace(/^\w/, function(match) {
                return match.toUpperCase()
            })
        } else {
            newString += ` word`
        }
    }

    return newString
}

function assert (expected :string,  result: string) : string {
    return expected === result ? 'Assertion successful'
        : `Assertion wrong, expected is ${expected}, but resulted ${result}`
}

assert('One', converter("one"));
assert('test One Two three', converter(example));
