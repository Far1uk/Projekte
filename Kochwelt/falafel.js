async function init() {
    await includeHTML();
    navSlide();
    loadRecipe();
}

let amount = [50, 0.25, 0.25, 1, 0.125, 0.5, 0.5, '', 0.25, 0.5, 0.25, 0.25];
let recipe = ['Kichererbsen, getrocknete', 'Toastbrot, altbackenes', 'Zwiebel(n)', 'Knoblauchzehe(n)', 'Petersilie', 'Korianderpulver', 'Kreuzkümmelpulver', 'Salz und Pfeffer', 'Backpulver', 'Mehl', 'Öl zum Frittieren', 'Zitrone(n)'];
let portion = ['g', 'Scheibe/n', '', '', 'Bund', 'TL', 'TL', '', 'TL', 'EL', 'Liter', ''];

function calculate() {
    let menge = +document.getElementById('myInput').value;
    document.getElementById('first-col').innerHTML = ``;
    
    for (let i = 0; i < amount.length; i++) {
        document.getElementById('first-col').innerHTML += `
                <tr>
                    <td class="td-left">${amount[i] * menge} ${portion[i]}</td>
                    <td class="td-right">${recipe[i]}</td>
                </tr>
            `;
    }
}

function loadRecipe() {
    for (let i = 0; i < amount.length; i++) {
        document.getElementById('first-col').innerHTML += `
                <tr>
                    <td class="td-left">${amount[i]} ${portion[i]}</td>
                    <td class="td-right">${recipe[i]}</td>
                </tr>
            `;
    }
}