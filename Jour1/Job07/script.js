function jourTravaille(date) {
    const joursFeries2024 = [
        "2024-01-01",
        "2024-04-01",
        "2024-05-01",
        "2024-05-08",
        "2024-05-09",
        "2024-05-20",
        "2024-07-14",
        "2024-08-15",
        "2024-11-01",
        "2024-11-11",
        "2024-12-25"
    ];

    let dateStr = date.toISOString().split("T")[0];

    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();

    if (joursFeries2024.includes(dateStr)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié`);
        return;
    }

    let jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour}/${mois}/${annee} est un week-end`);
        return;
    }

    console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé`);
}

jourTravaille(new Date("2024-05-01"));
jourTravaille(new Date("2024-05-04"));
jourTravaille(new Date("2024-05-02"));