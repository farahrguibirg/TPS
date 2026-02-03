function factorielle(x) {
    if (x < 0) {
        window.alert("Erreur : la factorielle n'existe pas pour les nombres négatifs");
        return;
    }
    let s = 1;
    for (let i = 1; i <= x; i++) {
        s = s * i;
    }
    return s;
}
window.alert(factorielle(5));
