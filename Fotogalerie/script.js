let images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
];
let numberText = [
  "1 / 10",
  "2 / 10",
  "3 / 10",
  "4 / 10",
  "5 / 10",
  "6 / 10",
  "7 / 10",
  "8 / 10",
  "9 / 10",
  "10 / 10",
];
let cities = [
  "Istanbul",
  "Tokyo",
  "New-York",
  "Dubai",
  "London",
  "Paris",
  "Amsterdam",
  "Rom",
  "Kapstadt",
  "Berlin",
];

function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    let allImages = images[i];
    content.innerHTML += generateRender(i);
  }
}

function generateRender(i) {
  let allImages = images[i];
  return /*html*/ `
        <img onclick="openImage(${i})" class="images" src="${allImages}">
    `;
}

function openImage(i) {
  document.getElementById("dialog-bg").classList.remove("d-none");
  showImage(i);
}

function closeImage() {
  document.getElementById("dialog-bg").classList.add("d-none");
}

function showImage(i) {
  let dialog = document.getElementById("dialog");
  let numbers = document.getElementById("numbertext");
  let cities = document.getElementById("cities");
  let allImages = images[i];
  dialog.innerHTML = generateShowImage(i);
  numbers.innerHTML = generateNumber(i);
  cities.innerHTML = generateCities(i);
}

function generateCities(i) {
  let citiesName = cities[i];
  return /*html*/ `
        <p>${citiesName}</p>
    `;
}

function generateNumber(i) {
  let pages = numberText[i];
  return /*html*/ `
        <p>${pages}</p>
    `;
}

function generateShowImage(i) {
  let allImages = images[i];
  return /*html*/ `
    <button onclick="closeImage()" class="closeButton"><i class="fa-solid fa-xmark"></i></button>
    <button onclick="nextImg(${i})" class="arrow-right"><i class="fa-solid fa-arrow-right"></i></button>
    <div>
        <img class="showImage" src="${allImages}">
    </div>
    <button onclick="prevImg(${i})" class="arrow-left"><i class="fa-solid fa-arrow-left"></i></button>
`;
}

function nextImg(n) {
  if (n < images.length - 1) {
    n++;
  } else {
    n = 0;
  }
  showImage(n);
}

function prevImg(n) {
  if (n > 0) {
    n--;
  } else {
    n = 9;
  }
  showImage(n);
}

//* ich habe eine Frage
//! 
//?
//todo
// alles klar