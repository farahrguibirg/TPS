const btnAjouteTele = document.getElementById("AjouteTele");
const telesZones = document.getElementById("TelesZones");
const btnEnvoyer = document.getElementById("envoyer");

let teleIndex = 1;
btnAjouteTele.onclick = (e) => {
  e.preventDefault();
  teleIndex++;
  let idTele = "tele" + teleIndex;
  const newTeleDiv = document.createElement("div");
  newTeleDiv.className = "zone";
  newTeleDiv.innerHTML = `
    <label for="${idTele}">Téléphone</label>
    <input type="tel" name="telephone[]" id="${idTele}" value="" />
    <button class="supprimer">Supprimer</button>
    <span >Champ obligatoire!(ou supp)</span>
  `;

  telesZones.appendChild(newTeleDiv);

  const btnSupprimer = newTeleDiv.querySelector(".supprimer");
  btnSupprimer.onclick = (e) => {
    e.preventDefault();
    telesZones.removeChild(newTeleDiv);
  };

  return false;
};

//validation du formulaire :

btnEnvoyer.onclick = (e) => {
  e.preventDefault();
  let isValid = true;

  const teleInputs = document.querySelectorAll(
    'input[type = "text"], input[type="tel"], input[name="telephone[]"]'
  );
  teleInputs.forEach((input) => {
    const errorSpan =
      document.getElementsByTagName("span")[
        Array.from(teleInputs).indexOf(input)
      ];
    if (input.value.trim() === "") {
      errorSpan.classList.add("error");
      input.classList.add("invalide");
      isValid = false;
    } else {
      errorSpan.classList.remove("error");
      input.classList.add("valide");
      input.classList.remove("invalide");
      
      
    }
  });
  if (isValid) {
    alert("Formulaire soumis avec succes !");
  }
  return false;
};