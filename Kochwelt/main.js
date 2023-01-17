async function init() {
    await includeHTML();
    getFirstElement();
    navSlide();
}

let images = ['./img/falafel.jpg','./img/ramen.jpg','./img/salat.jpg','./img/thai.jpg','./img/lasagne.jpg','./img/hähnchen.jpg',
'./img/nudeln.jpg','./img/auflauf.jpg', './img/steak.jpg'];
let nextImage = 0;

function toRight() {
    loadImages(nextImage);
    nextImage++;
    if(nextImage == 9){
        nextImage = 0;
    }

    loadImages2(nextImage);
    nextImage++;
    if(nextImage == 9){
        nextImage = 0;
    }

    loadImages3(nextImage);
    nextImage++;
    if(nextImage == 9) {
        nextImage = 0;
    }
}

function toLeft() {
    loadImages(nextImage);
    nextImage++;
    if(nextImage == 9){
        nextImage = 0;
    }

    loadImages2(nextImage);
    nextImage++;
    if(nextImage == 9){
        nextImage = 0;
    }

    loadImages3(nextImage);
    nextImage++;
    if(nextImage == 9) {
        nextImage = 0;
    }
}

function loadImages(i) {
    document.getElementById('image').src = images[i];
}

function loadImages2(i) {
    document.getElementById('image2').src = images[i];
}

function loadImages3(i) {
    document.getElementById('image3').src = images[i];
}

function getFirstElement() {
    document.getElementById('third-container').innerHTML = `
            <h2>Ist KitchenAid wirklich so gut?</h2>
            <section class="third-all-row">
                <div>
                    <p>Die KitchenAid hat ein schönes Design, sie ist gut verarbeitet, hat eine gute Haptik und alles funktioniert stimmig. Die Maschine ist einfach ein Design-Klassiker, der uns persönlich sehr gut gefällt.</p>
                </div>
                <div class="second-row">
                    <img onclick="openFirstDialog()" src="./img/kitchenAid.jpg">
                </div>
            </section>
    `;
    setTimeout(getSecondElement, 5000);
}

function getSecondElement() {
    document.getElementById('third-container').innerHTML = `
    <h2>Für wen lohn sich der Thermomix?</h2>
            <section class="third-all-row">
                <div class="first-row">
                    <p>Kann sich aus gesundheitlicher Sicht lohnen<br><br>Finanziell lohnt sich ein Thermomix für Paare oder Singles also offenbar nicht. Aber: Das Küchengerät kann dabei helfen, weniger Fertiggerichte im Supermarkt zu kaufen. Selbst gebackenes Brot, frische Soßen – das alles machen Sie einfach selbst.</p>
                </div>
                <div class="second-row">
                    <img onclick="openSecondDialog()" src="./img/thermomix.jpg">
                </div>
            </section>
        </div>
        </section>
    `;
    setTimeout(getThirdElement, 5000);
}

function getThirdElement() {
    document.getElementById('third-container').innerHTML = `
    <h2>Was ist besser Pfanne oder Wok?</h2>
            <section class="third-all-row">
                <div class="first-row">
                    <p>Ein weiterer Vorteil ist das schnelle und leichte Rühren von Gerichten. Der Rand des Woks ist höher als der von normalen Pfannen und erleichtert so das Schwenken des Garguts, sodass beim Mischen und Rühren der Gerichte nichts aus dem Wok fallen kann.</p>
                </div>
                <div class="second-row">
                    <img onclick="openThirdDialog()" src="./img/wok.jpg">
                </div>
            </section>
        </div>
        </section>
    `;
    setTimeout(getFirstElement, 5000);
}

function firstContainerDialog() {
    document.getElementById('dialog').innerHTML = `
        <h2>Ist KitchenAid wirklich so gut?</h2>
        <section class="dialog-all-row">
            <div class="dialog-first-row">
                <p>Die KitchenAid hat ein schönes Design, sie ist gut verarbeitet, hat eine gute Haptik und alles funktioniert stimmig. Die Maschine ist einfach ein Design-Klassiker, der uns persönlich sehr gut gefällt.</p>
            </div>
            <div class="dialog-second-row">
                <img src="./img/kitchenAid.jpg">
            </div>
        </section>
    `;
}

function openFirstDialog() {
    document.getElementById('container-dialog').classList.remove('d-none');
    firstContainerDialog();
}

function secondContainerDialog() {
    document.getElementById('dialog').innerHTML = `
        <h2>Für wen lohn sich der Thermomix?</h2>
        <section class="dialog-all-row">
            <div class="dialog-first-row">
                <p>Kann sich aus gesundheitlicher Sicht lohnen<br><br>Finanziell lohnt sich ein Thermomix für Paare oder Singles also offenbar nicht. Aber: Das Küchengerät kann dabei helfen, weniger Fertiggerichte im Supermarkt zu kaufen. Selbst gebackenes Brot, frische Soßen – das alles machen Sie einfach selbst.</p>
            </div>
            <div class="dialog-second-row">
                <img src="./img/thermomix.jpg">
            </div>
        </section>
    `;
}

function openSecondDialog() {
    document.getElementById('container-dialog').classList.remove('d-none');
    secondContainerDialog();
}

function thirdContainerDialog() {
    document.getElementById('dialog').innerHTML = `
        <h2>Was ist besser Pfanne oder Wok?</h2>
        <section class="dialog-all-row">
            <div class="dialog-first-row">
                <p>Ein weiterer Vorteil ist das schnelle und leichte Rühren von Gerichten. Der Rand des Woks ist höher als der von normalen Pfannen und erleichtert so das Schwenken des Garguts, sodass beim Mischen und Rühren der Gerichte nichts aus dem Wok fallen kann.</p>
            </div>
            <div class="dialog-second-row">
                <img src="./img/wok.jpg">
            </div>
        </section>
    `;
}

function openThirdDialog() {
    document.getElementById('container-dialog').classList.remove('d-none');
    thirdContainerDialog();
}

function closeDialog() {
    document.getElementById('container-dialog').classList.add('d-none');
}