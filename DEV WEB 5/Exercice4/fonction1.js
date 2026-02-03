const personnes = [
    { prenom: 'Ahmed', nom: 'ALAMI' },
    { prenom: 'Fatima', nom: 'ALAOUI' },
    { prenom: 'Karim', nom: 'BAGHDADI' }
];

const nomsComplets = (tab) => tab.map(p => `${p.prenom} ${p.nom}`);

const resultat = nomsComplets(personnes);

console.log(resultat);
