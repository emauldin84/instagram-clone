// When we click an image
// A const is a "constant" variable
// Which means it cannot be reasssigned
// const targetElements = document.querySelectorAll("[data-target]");

// // we see an enlarged version of
// // that image.

// function respondToClick(event) {
//     // add the "big" class to the thing that got clicked.
//     // console.log(event.target.parentElement);
//     event.target.parentElement.classList.toggle('big');
// }

// function attachClickHandler(oneElement) {
//     oneElement.addEventListener("click", respondToClick);
// }





const targetElements = document.querySelectorAll('[data-target]');
const largeImageOutput = document.querySelector('[data-output]');

function respondToClick(event) {
    console.log(event.target.getAttribute('src'));
    imgSrc = event.target.getAttribute('src');
    largeImageOutput.setAttribute('src', imgSrc);
    largeImageOutput.classList.remove('hidden');
}

function attachClickEvent(eachImage) {
    eachImage.addEventListener('click', respondToClick);
}

function dismissLargeImage() {
    largeImageOutput.classList.add('hidden');
}

largeImageOutput.addEventListener('click', dismissLargeImage)

targetElements.forEach(attachClickEvent);
