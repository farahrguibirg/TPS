        let T_Voitures = [
            {
                immatriculation: "48-A-20000",
                marque: "Clio 3",
                couleur: "Noir",
                carburant: "Diesel",
                prix_jour: 250
            },
            {
                immatriculation: "48-A-20001",
                marque: "Clio 4",
                couleur: "Rouge",
                carburant: "Diesel",
                prix_jour: 300
            },
            {
                immatriculation: "48-A-20002",
                marque: "Dacia",
                couleur: "Noir",
                carburant: "Essence",
                prix_jour: 200
            }
        ];
        function getAllVoitures() {
            let html = '<table>';
            html += '<tr>';
            html += '<th>Immatriculation</th>';
            html += '<th>Marque</th>';
            html += '<th>Couleur</th>';
            html += '<th>Carburant</th>';
            html += '<th>Prix_Jour</th>';
            html += '<th>Action</th>';
            html += '</tr>';
            
            for (let i = 0; i < T_Voitures.length; i++) {
                html += '<tr>';
                html += '<td>' + T_Voitures[i].immatriculation + '</td>';
                html += '<td>' + T_Voitures[i].marque + '</td>';
                html += '<td>' + T_Voitures[i].couleur + '</td>';
                html += '<td>' + T_Voitures[i].carburant + '</td>';
                html += '<td>' + T_Voitures[i].prix_jour + '</td>';
                html += '<td><button onclick="deleteVoiture(\'' 
                + T_Voitures[i].immatriculation + '\')">Supprimer</button></td>';
                html += '</tr>';
            }
            
            html += '</table>';
            document.getElementById("tableContainer").innerHTML = html;
        }
        function deleteVoiture(immatriculation) {
            for (let i = 0; i < T_Voitures.length; i++) {
                if (T_Voitures[i].immatriculation === immatriculation) {
                    T_Voitures.splice(i, 1);
                    break;
                }
            }
            getAllVoitures();
        }
        function getVoitures(marque) {
            let html = '<table>';
            html += '<tr>';
            html += '<th>Immatriculation</th>';
            html += '<th>Marque</th>';
            html += '<th>Couleur</th>';
            html += '<th>Carburant</th>';
            html += '<th>Prix_Jour</th>';
            html += '<th>Action</th>';
            html += '</tr>';
            
            for (let i = 0; i < T_Voitures.length; i++) {
                if (T_Voitures[i].marque === marque) {
                    html += '<tr>';
                    html += '<td>' + T_Voitures[i].immatriculation + '</td>';
                    html += '<td>' + T_Voitures[i].marque + '</td>';
                    html += '<td>' + T_Voitures[i].couleur + '</td>';
                    html += '<td>' + T_Voitures[i].carburant + '</td>';
                    html += '<td>' + T_Voitures[i].prix_jour + '</td>';
                    html += '<td><button onclick="deleteVoiture(\''
                     + T_Voitures[i].immatriculation + '\')">Supprimer</button></td>';
                    html += '</tr>';
                }
            }
            
            html += '</table>';
            document.getElementById("tableContainer").innerHTML = html;
        }
        function filtrer() {
            let marque = document.getElementById("marqueInput").value.trim();
            if (marque === "") {
                getAllVoitures();
            } else {
                getVoitures(marque);
            }
        }
        getAllVoitures();