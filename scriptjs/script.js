const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close")

if (bar) {
    bar.addEventListener('click', () => {
        console.log("Clicked on bars"); // Check if this message appears in the console
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        console.log("Clicked on bars"); // Check if this message appears in the console
        nav.classList.remove('active');
    });
}




