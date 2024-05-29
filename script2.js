function skibidi() {
    document.body.style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

document.querySelector('.button-fon').addEventListener('click', skibidi);