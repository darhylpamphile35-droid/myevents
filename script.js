// alert('JS fonctionne');

const evenements = [
    {
        id: 1,
        titre: "Vèvè Haïti",
        type: "Culturel",
        emoji: "🎭",
        date: "26 avril 2026",
        heure: "18h00",
        lieu: "Palette lounge, Pétion-ville",
        Admission: "1500 Gdes(à l’avance)",
        description:
            "Reconnectez-vous à vos racines et explorez la richesse de notre identité culturelle avec VÈVÈ AYITI. Cet événement met en évidence une conférencière d’exception : Bonheur Manoucheka (Manbo Lavi Djò), dont la parole et l’expérience apporteront un éclairage profond sur notre héritage, notre spiritualité et notre capacité à créer en restant fidèles à nous-mêmes. À travers conférences, ateliers et débats, venez participer à un moment d’échange authentique autour du thème : Identité, Héritage, Création. Un rendez-vous important pour mieux comprendre notre essence et valoriser ce que nous sommes."
    },
    {
        id: 2,
        titre: "Tournoi de football interscolaire",
        type: "Sportif",
        emoji: "⚽",
        date: "22 avril 2026",
        lieu: "Stade sylvio cator",
        description:
            "Le grand tournoi interscolaire annuel réunissant les meilleures équipes de football des lycées de port-au-prince"
    },
    {
        id: 3,
        titre: "Journée de débat sur la crise sécuritaire en Haïti",
        type: "Social",
        emoji: "💨",
        date: "18 mai 2026",
        lieu: "Pétion-Ville",
        description:
            "Une journée dédiée à des échanges portant sur la crise sécuritaire en Haîti, ses causes, ses conséquences et les potentielles solutions à cette dernière"
    },
    {
        id: 4,
        titre: "Conférence sur l'Entrepreneuriat",
        type: "Académique",
        emoji: "🎓",
        date: "2 Mai 2026",
        heure: "09h00",
        lieu: "Pétion-Ville",
        description:
            "Une conférence réunissant les entrepreneurs haïtiens les plus influents pour partager leurs expériences et conseils aux jeunes."
    }
];

function afficherDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const evenement = evenements.find(function (e) {
        return e.id === id;
    });

    if (evenement) {
        document.querySelector('.detail-carte h2').textContent = evenement.titre;
        document.querySelector('.detail-type').innerHTML = '<span aria-hidden="true">' + evenement.emoji + '</span> ' + evenement.type;
        document.querySelector('.detail-date').textContent = evenement.date;
        document.querySelector('.detail-heure').textContent = evenement.heure;
        document.querySelector('.detail-lieu').textContent = evenement.lieu;
        document.querySelector('.detail-description').textContent = evenement.description;
    }
    }

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
