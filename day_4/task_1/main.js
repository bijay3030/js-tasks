const buttons = document.querySelectorAll('button')
const result = document.getElementById('result')
let resultValue = '';
buttons.forEach(button => {
    button.addEventListener('click', e => {
        let buttonValue = e.target.innerText;
        if (buttonValue == 'C'){
            resultValue = '';
            result.value = resultValue;
        }
        else if (buttonValue == '='){
            result.value = eval(resultValue);
            resultValue =''
        }
        else{
           resultValue += buttonValue;
           result.value = resultValue
        }

    })
})

