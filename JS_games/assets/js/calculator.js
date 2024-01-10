const expression = document.getElementById('expression')
const result = document.getElementById('result')
const equally = document.getElementById('equally')
const deleteAll = document.getElementById('delete-all')
const deleteOne = document.getElementById('delete-one')
const btnAction = document.querySelectorAll('[data-symbol]');

deleteAll.addEventListener('click', () => {
    expression.style.opacity = '0'
    result.style.opacity = '0'
    expression.innerText = ''
})

deleteOne.addEventListener('click', () => {
    let content = expression.textContent;
    content = content.slice(0, -1);
    expression.textContent = content;
})

btnAction.forEach((action) => {
    action.addEventListener('click', () => {
        expression.style.opacity = '1'

        let dataSymbolValue = action.getAttribute('data-symbol')

        if (!isNaN(dataSymbolValue)) {
            expression.innerHTML += dataSymbolValue
        } else {
            expression.innerHTML += `<span>${dataSymbolValue}</span>`
        }
    })
})

function calculate(expression) {
    const operators = [];
    const values = [];

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    function applyOperator() {
        const operator = operators.pop();
        const b = values.pop();
        const a = values.pop();
        switch (operator) {
            case '+':
                values.push(a + b);
                break;
            case '-':
                values.push(a - b);
                break;
            case '*':
                values.push(a * b);
                break;
            case '/':
                values.push(a / b);
                break;
        }
    }

    function processToken(token) {
        if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length > 0 && operators[operators.length - 1] !== '(') {
                applyOperator();
            }
            operators.pop();
        } else if (precedence.hasOwnProperty(token)) {
            while (
                operators.length > 0 &&
                precedence[operators[operators.length - 1]] >= precedence[token]
                ) {
                applyOperator();
            }
            operators.push(token);
        } else {
            values.push(parseFloat(token));
        }
    }

    const tokens = expression.match(/[+\-*/()]|\d+/g);
    tokens.forEach(processToken);

    while (operators.length > 0) {
        applyOperator();
    }

    return values[0];
}

equally.addEventListener('click', () => {
    const endResult = calculate(expression.textContent)
    result.innerHTML = '=' + String(endResult)
    result.style.opacity = '1'
})