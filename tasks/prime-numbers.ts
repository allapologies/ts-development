/**
 *  print prime numbers till n
 *  prime numbers = numbers from 1 till n, that are divided without rest
 */

function isPrime (number: number):boolean {
    if (number < 1) {
        return false

    } else {
        for (let k:number = 2; k < number; k++) {
            if (number % k == 0) {
                return false
            }
        }
    }

    return true
}

function getPrimeNumbers (max: number):number[] {
    let result: number[]=[]
    for (let i:number = 1; i< max; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result
}

console.log(getPrimeNumbers(1000))