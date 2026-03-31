// alert('JS fonctionne');

const filtres = document.querySelectorAll(".filtre");
const cartes = document.querySelectorAll(".carte");

filtres.forEach(filtre => {
    filtre.addEventListener("click", () => {
        filtres.forEach(f => f.classList.remove("actif"));
        filtre.classList.add("actif");

        const type = filtre.dataset.type;

        cartes.forEach(carte => {
            if (type === "tous" || carte.dataset.type === type) {
                carte.style.display = "block";
            } else {
                carte.style.display = "none";
            }
        });
    });
});

function rechercherEvent() {
    const recherche = document
        .querySelector("#entree input")
        .value.toLowerCase();

    cartes.forEach(function(carte) {
        const titre = carte.querySelector("h4").textContent.toLowerCase();

        if (titre.includes(recherche)) {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
}
