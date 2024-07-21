let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let keySound = document.getElementById('KeySound');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        keySound.play(); // Play the key sound on button click

        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); 
                input.value = string;
            } catch {
                input.value = "Error"; 
                string = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
