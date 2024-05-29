const secretCode = 'скибиди';
let inputSequence = '';

function skibidi(event) {
    inputSequence += event.key;
    inputSequence = inputSequence.slice(-secretCode.length);

    if (inputSequence === secretCode) {
        const secretMessage = document.getElementById('secretMessage');
        if (secretMessage.style.display !== 'block') {
            secretMessage.style.display = 'block';
        }
    }
}

document.getElementById('txt').addEventListener('keydown', skibidi);