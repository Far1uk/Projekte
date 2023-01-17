async function init() {
    await includeHTML();
    navSlide();
    loadRecipe();
}

let amount = [62.5, 0.25, 0.25, 7.5, 5, 0.25, 0.25, 0.25, 0.125, 0.5];
let portion = ['g', '', '', 'g', 'EL', 'TL', 'TL', 'TL', 'TL', 'EL'];
let recipe = ['Brokkoliröschen, ohne Strunk', 'Paprikaschote(n), rote, geviertelt', 'Apfel, entkernt, geviertelt', 'Öl', 'Essig', 'Senf', 'Honig', 'Salz', 'Pfeffer', 'Sonnenblumenkerne'];

function calculate() {
    let menge = +document.getElementById('myInput').value;
    document.getElementById('first-col').innerHTML = '';
    for(let i = 0; i < amount.length; i++) {
        document.getElementById('first-col').innerHTML += `
            <tr>
                <td class="td-left">${amount[i] * menge} ${portion[i]}</td>
                <td class="td-right">${recipe[i]}</td>
            </tr>
        `;
    }
}

function loadRecipe() {
    for(let i = 0; i < amount.length; i++) {
        document.getElementById('first-col').innerHTML += `
            <tr>
                <td class="td-left">${amount[i]} ${portion[i]}</td>
                <td class="td-right">${recipe[i]}</td>
            </tr>
        `;
    }
}