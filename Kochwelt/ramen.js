async function init() {
    await includeHTML();
    navSlide();
    loadRecipe();
}

let amount = [2, 1, 0.125, 50, 25, 50, 1, 0.5, 0.125, 300, 1];
let portion = ['', '', '', 'g', 'g', 'g', '', 'EL', 'TL', 'ml', 'TL'];
let recipe = ['Shiitake-Pilz(e), frische oder getrocknete', 'Frühlingszwiebel(n)', 'Noriblatt', 'Tofu für Suppen', 'Sojasprossen', 'Ramen-Nudeln', 'Knoblauchzehe(n)', 'Öl, neutrales', 'Chiliflocken', 'Gemüsebrühe', 'Miso'];

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