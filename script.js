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
