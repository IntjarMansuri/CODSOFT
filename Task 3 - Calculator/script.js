const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let button of buttons){

    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        
        if(buttonText === 'C'){
            screen.value = "";
        }

        else if(buttonText === 'X'){
            screen.value += '*';
        }

        else if(buttonText == '⌫'){
            screen.value = screen.value.slice(0, -1);
        }

        else if(buttonText === '='){
            try {
                screen.value = eval(screen.value);
            } 
            catch (error) {
                screen.value = 'Invalid Operator!!';
            }
        }
        else {
            screen.value += buttonText;
        }
    })
}