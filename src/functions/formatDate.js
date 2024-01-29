export default function formatDate(value) {
    let diff = ecartDate(value);
    let nbreDays = convertInDay(diff);
    let time = new Date(value)
    if (nbreDays <= 1) {
        //one day on affiche l'heure
        return time.getHours() + ":" + time.getMinutes();
    }
    else if (nbreDays <= 7) {
        //one week afficher les jours
        return Math.round(nbreDays) + "j"
    }
    else if (nbreDays <= 30) {
        //one month afficher les semaines
        return Math.round(nbreDays / 7) + "sem"
    }
    else if (nbreDays <= 182) {
        //half-year affiche les mois
        return Math.round(nbreDays / 30) + "mois"
    }
    else if (nbreDays <= 365) {
        //one year on affiche la date
        return time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay();
    }
    else if (nbreDays > 365) {
        //many year on affiche les annees
        return Math.round(nbreDays / 365) + "ans"
    }
}
function ecartDate(value) {
    let currentDate = new Date();
    return Math.round(currentDate-value);
}
function convertInDay(valueMilliSec) {
    return Math.round(valueMilliSec / 86400000);
}