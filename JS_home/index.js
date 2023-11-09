// Task 1 - start
function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a
    }

    console.log(result)
}

let check = (x, n) => Number.isInteger(n) ? pow(x, n) : console.log('Число не натуральное!')

// check(2,3)
// Task 1 - finish

// Task 2 - start
function gcd(a, b) {
    if (a > 0 && b > 0) {
        if (a % b === 0 || b % a === 0 ) console.log(Math.min(a, b))
        else {
            let arr = []
            for (let i = 1; i < Math.min(a, b); i++) {
                if (a % i === 0 && b % i === 0) arr.push(i)
            }

            let result = arr.length > 0 ? Math.max.apply(null, arr) : 'Числа не имеют НОД'
            console.log(result)
        }
    } else console.log('Переданы отрицательные параметры')
}

// gcd(32, 24)
// Task 2 - finish

// Task 3 - start
function minDigit(x) {
    x = String(x)

    let result = []
    for (let i = 0; i < x.length; i++) result.push(x[i])

    console.log(Math.min.apply(null, result))
}

// minDigit(482309)
// Task 3 - finish

// Task 4 - start
function pluralizeRecords(n) {
    n = String(n)
    let arrExeption = [3, 4]
    let wordForm =
        n[n.length - 2] === '1' ? 'записей' :
            n[n.length - 1] === '1' ? 'запись' :
                n[n.length - 1] === '2' || arrExeption.indexOf(Number(n)) !== -1 ? 'записи' :
                    'записей'

    console.log(`В результате выполнения запроса было найдено ${n} ${wordForm}`)
}

// pluralizeRecords(55)
// Task 4 - finish

// Task 5 - start
function fibb(n) {
    let result = n === 1 ? 0 : n === 2 ? 1 : NaN

    if (isNaN(result)) {
        let fibbArray = [0, 1]

        for (let i = 1; i < n - 1; i++) {
            const newNum = fibbArray[i] + fibbArray[i - 1]
            fibbArray.push(newNum)
        }

        result = fibbArray[fibbArray.length - 1]
    }

    console.log(result)
}

// fibb(1)
// Task 5 - finish

// Task 6 - start
function getSortedArray(array, key) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j][key] > array[j + 1][key]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const arr = [
    {'name': 'Ksenia', 'age': 19, 'university': 'RGGU'},
    {'name': 'Vladimir', 'age': 21, 'university': 'MosPolitech'},
    {'name': 'Oleg', 'age': 18, 'university': 'Bauman Moscow State Technical University'}
]

console.log('R'.charCodeAt(0))
console.log('M'.charCodeAt(0))
console.log('B'.charCodeAt(0))

const sortedArray = getSortedArray(arr, "age");
console.log(sortedArray);
// Task 6 - finish

// Task 7 - start
function cesar(str, shift, action) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

    str = str.toLowerCase()

    if (action === 'encode') {
        let encodeStr = ''
        for (let i = 0; i <= str.length - 1; i++) {
            if (str[i] === ' ') encodeStr += ' '
            else encodeStr += alphabet[alphabet.indexOf(str[i]) + shift]
        }

        console.log(encodeStr)
    } else {
        let decodeStr = ''
        for (let i = 0; i <= str.length - 1; i++) {
            if (str[i] === ' ') decodeStr += ' '
            else decodeStr += alphabet[alphabet.indexOf(str[i]) - shift]
        }

        console.log(decodeStr)
    }
}

// cesar('тулезх плу', 3, 'decode')
// Task 7 - finish
