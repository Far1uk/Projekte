function init() {
  getList();
  getBasket();
}

let menu = [
  {
    header: "Veganland Party M",
    content1: "10 Falafel (250g)",
    content2: "2 Backbrötchen",
    content3: "Kopfsalat, Zitrone, Petersilie & Minze",
    content4: "1 Soft Getränk",
    content5: "Sauce",
    content6: "250g Spekulatius-Dessert",
    price: 16.8,
    amount: 1,
  },
  {
    header: "Veganland Party XL",
    content1: "20 Falafel (500g)",
    content2: "4 Backbrötchen",
    content3: "Kopfsalat, Zitrone, Petersilie & Minze",
    content4: "2 Soft Getränk",
    content5: "Sauce",
    content6: "500g Spekulatius-Dessert",
    price: 28.5,
    amount: 1,
  },
  {
    header: "Veganland Party XXL",
    content1: "40 Falafel (1000g)",
    content2: "8 Backbrötchen",
    content3: "Kopfsalat, Zitrone, Petersilie & Minze",
    content4: "4 Soft Getränk",
    content5: "Sauce",
    content6: "1000g Spekulatius-Dessert",
    price: 51.0,
    amount: 1,
  },
];

let prices = [];
let shopping = [];
let amounts = [];

function renderBasket() {
  let shoppingBasket = document.getElementById("shoppingBasket");
  shoppingBasket.innerHTML = "";
  let sum = 0;
  let betweenSum = 0;

  for (let i = 0; i < shopping.length; i++) {
    let name = shopping[i];
    let price = prices[i];
    let amount = amounts[i];
    sum = amount * price;
    betweenSum = betweenSum + sum;
    const formattedPrice = sum.toFixed(2).replace(".", ",");

    shoppingBasket.innerHTML += /*html*/ `
    <div class="basket-shopping">
      <div class="basket-shopping-ul">
        <ul>
          <li><b>${amount}</b></li>
          <li><b>${name}</b></li>
          <li>${formattedPrice} €</li>
        </ul>
      </div>
      <div class="basket-shopping-icon">
        <a href="#">Anmerkung hizufügen</a>
        <p onclick="removeFood(${i})"><i class="fa-solid fa-minus"></i></p>
        <p onclick="addFood(${i})"><i class="fa-solid fa-plus"></i></p>
      </div>
    </div>
  `;
  }
  if (shopping.length > 0) {
    shoppingBasket.innerHTML += showFinalSum(betweenSum);
  } else {
    document.getElementById("basketFlex").classList.remove("d-none");
  }
}

function addFood(i) {
  amounts[i]++;
  renderBasket();
}

function removeFood(i) {
  if (amounts[i] <= 1) {
    shopping.splice(i, 1);
    prices.splice(i, 1);
    amounts.splice(i, 1);
    renderBasket();
  }
  else {
    amounts[i]--;
    renderBasket();
  }
}

function showFinalSum(betweenSum) {
  let finalSum = 0;
  finalSum = betweenSum + 2;
  return /*html*/ `
    <div class="basket-ul">
        <ul>
          <li>Zwischensumme</li>
          <li>${betweenSum.toFixed(2)} €</li>
        </ul>
        <ul>
          <li>Lieferkosten</li>
          <li>2,00 €</li>
        </ul>
        <ul>
          <li><b>Gesamt</b></li>
          <li>${finalSum.toFixed(2)} €</li>
        </ul>
        <p>Kostenfreie Lieferung ab 50,00 €</p>
        <p class="warenkorb">${finalSum.toFixed(2)} €</p>
      </div>
  `;
}

function addBasket(i) {
  let header = menu[i].header;
  let sum = menu[i].price;
  let index = shopping.indexOf(header);

  if (index == -1) {
    shopping.push(header);
    prices.push(sum);
    amounts.push(1);
  } else {
    amounts[index]++;
  }

  document.getElementById("basketFlex").classList.add("d-none");
  renderBasket();
}

function getBasket() {
  let basket = document.getElementById("basket");
  basket.innerHTML = /*html*/ `
        <section id="test" class="basket">
            <div class="basket-header">
                <h2>Warenkorb</h2>
            </div>
            <div id="basketFlex" class="basket-content">
                <p><i class="fa-solid fa-bag-shopping"></i></p>
                <h2>Fülle deinen Warenkorb</h2>
                <span>Füge einige leckere Gerichte aus der Speisekarte.</span>
            </div>
            <div id=shoppingBasket></div>
        </section>
    `;
}

function getList() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    const counter = menu[i];
    list.innerHTML += generatedList(i);
  }
}

function generatedList(i) {
  let counter = menu[i];
  return /*html*/ `
        <section class="list-content">
        <div class="list-header">
            <h3 id="name${i}">${counter["header"]}</h3>
            <div class="add-menu">
                <p onclick="addBasket(${i})"><i class="fa-solid fa-plus"></i></p>
            </div>
        </div>
        <div class="list">
            <ul>
                <li>${counter["content1"]}</li>
                <li>${counter["content2"]}</li>
                <li>${counter["content3"]}</li>
                <li>${counter["content4"]}</li>
                <li>${counter["content5"]}</li>
                <li>${counter["content6"]}</li>
            </ul>
        </div>
        <div class="list-price">
            <h3 id="sum${i}">${counter["price"].toFixed(2)} €</h3>
        </div>
        </section>
    `;
}

function openDialog() {
  document.getElementById("dialog").classList.add("d-flex");
}

function closeDialog() {
  document.getElementById("dialog").classList.remove("d-flex");
}

function openBasket() {
  document.getElementsByName("warenkorb").classList.add("d-flex");
}

window.onscroll = function () {
  let test = document.getElementById("test");
  if (window.scrollY > 0) {
    test.style = "top: 0px";
  } else {
    test.style = "top: 85px";
  }
};
