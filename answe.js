const screenDisplay = document.querySelector('.screen');
const bottons = document.querySelectorAll('button');

let calculation = [];
let acumulativeCalculater;

function calculate(button){
    const value = button.textContent;
    if (value === 'CLEAR'){
        calculation = [];
        screenDisplay.textContent = '';
    } else if(value === '='){
        screenDisplay.textContent = eval(acumulativeCalculater);
    } else{
        calculation.push(value);
        acumulativeCalculater = calculation.join('');
        screenDisplay.textContent = acumulativeCalculater;
    }
}

bottons.forEach(button => button.addEventListener('click', () => calculate(button)));