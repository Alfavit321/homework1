const counts = {
    button1: 0,
    button2: 0,
    button3: 0
};

const messages = {
    button1: "даб",
    button2: "ес",
    button3: "скибиди"
};

function handleClick(event) {
    const buttonId = event.target.id;
    counts[buttonId]++;
    if (counts[buttonId] === 7) {
        counts[buttonId] = 1;
    }
    console.log(messages[buttonId].repeat(counts[buttonId]));
};

document.getElementById('button1').addEventListener('click', handleClick);
document.getElementById('button2').addEventListener('click', handleClick);
document.getElementById('button3').addEventListener('click', handleClick);