const pic1Overlay = document.querySelector(".pic1-overlay");
const pic2Overlay = document.querySelector(".pic2-overlay");
const pic3Overlay = document.querySelector(".pic3-overlay");
const pic4Overlay = document.querySelector(".pic4-overlay");
const pic5Overlay = document.querySelector(".pic5-overlay");
const pic6Overlay = document.querySelector(".pic6-overlay");
const pic7Overlay = document.querySelector(".pic7-overlay");

window.setTimeout(() => {
    console.log('Fading out picture 1');
    console.log(pic1Overlay);
    if (pic1Overlay) {
        pic1Overlay.style.opacity = 0;
    }
}, 1000);

window.setTimeout(() => {
    if (pic2Overlay) {
        pic2Overlay.style.opacity = 0;
    }
}, 3000);

window.setTimeout(() => {
    if (pic3Overlay) {
        pic3Overlay.style.opacity = 0;
    }
}, 5000);

window.setTimeout(() => {
    if (pic4Overlay) {
        pic4Overlay.style.opacity = 0;
    }
}, 7000);

window.setTimeout(() => {
    if (pic5Overlay) {
        pic5Overlay.style.opacity = 0;
    }
}, 9000);

window.setTimeout(() => {
    if (pic6Overlay) {
        pic6Overlay.style.opacity = 0;
    } 
}, 11000);

window.setTimeout(() => {
    if (pic7Overlay) {
        pic7Overlay.style.opacity = 0;
    }
}, 12000);