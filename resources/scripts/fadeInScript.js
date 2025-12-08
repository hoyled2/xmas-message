const pic1Overlay = document.querySelector(".pic1-overlay");
const pic2Overlay = document.querySelector(".pic2-overlay");
const pic3Overlay = document.querySelector(".pic3-overlay");

console.log('Pic 1:', pic1Overlay);
console.log('Pic 2:', pic2Overlay);
console.log('Pic 3:', pic3Overlay);

window.setTimeout(() => {
    console.log('Fading out picture 1');
    console.log(this.pic1Overlay);

    pic1Overlay.style.opacity = 0;
}, 1000);

window.setTimeout(() => {
    pic2Overlay.style.opacity = 0;
}, 3000);

window.setTimeout(() => {
    pic3Overlay.style.opacity = 0;
}, 3000);
