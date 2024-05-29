document.querySelectorAll('#list li').forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.innerHTML);
    });
});