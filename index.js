let display = document.querySelector('.calculator__display');
let buttons = Array.from(document.querySelectorAll('.calculator__btn'));

buttons.map((calculator__btn) => {
    calculator__btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '0';
            break;

            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = 'Ошибочка';
                }                
            break;

            case '+/-':
                display.innerText = '-';
            break;

            case '%':
                let passedText = display.innerText + '/ 100';
                display.innerText = eval(passedText);
            break;
            
            default:
                if (display.innerText === '0' && e.target.innerText !== '.') {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});