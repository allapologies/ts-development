'use strict'

const testString = 's1tar3t 2  hellow'//  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5

function reverseLetters(str: string):string  {
    let reversed: string = ``
    const parsed = str.split('')
    const re = /\w/
    for (let letter of parsed) {
        reversed += ``
    }

    return reversed
}

function parseString (input: string): string[] {
    const re = /\s/
    let result: string[] = []
    const strArray = input.split(re)
    for (let string of strArray) {
        result.push(reverseLetters(string))
    }

    return result

}


console.log(parseString(testString))


//алгоритм

// каждую подстроку в основной строке парсим на предмет наличия букв
// все буквы в строке реверсим зеркально
// => создаем новую строку или массив в которой индексы меняются местами

