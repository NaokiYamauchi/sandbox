const body = document.querySelector('body');
const btn = document.querySelector('button');
const tag = document.querySelector('h1');

btn.addEventListener('click', function () {
    const getRandomInt255 = () => Math.floor(Math.random() * 256);

    const getRandomRGBArray = () => [getRandomInt255(), getRandomInt255(), getRandomInt255()];
    const toRGBString = (arr) => `rgb(${arr[0]},${arr[1]},${arr[2]})`;
    const invertRGB = ([r, g, b]) => [255 - r, 255 - g, 255 - b];

    const rgbArray = getRandomRGBArray();
    const bgColor = toRGBString(rgbArray);
    const textColor = toRGBString(invertRGB(rgbArray));

    body.style.background = bgColor;
    tag.style.color = textColor;
    tag.innerText = bgColor.toUpperCase();
})