function compterVoyelles(phrase) {
    const tabVoyelle = ["a", "e", "i", "o", "u", "y"];
    let compt = 0;

    for (c in phrase) {
        if (tabVoyelle.includes(phrase[c])) {
            compt++;
        }
    }
    console.log("La phrase contient " + compt + " voyelles");
}

compterVoyelles("je suis un oiseau");
compterVoyelles("je m'appelle Guillaume");
compterVoyelles("j'aime bien les glaces à la vanille");
compterVoyelles("c'est dur de trouver une phrase ou même un mot sans voyelles");