var ChCouelur=document.getElementById("ChangerCouleur");
var ChTaille=document.getElementById("ChangerTaille");
var Cacher=document.getElementById("Cacher");
var Couleur=document.getElementById("Couleur");
var modif=document.getElementById("modifier");
var L=document.getElementById("Longueur");
var l=document.getElementById("Largeur");
ChCouelur.onclick=function(){
    var couleurChoisie=Couleur.value;
    modif.style.backgroundColor=couleurChoisie;
}
ChTaille.onclick=function(){
    modif.style.height=L.value+"px";
    modif.style.height=l.value+"px";
}
Cacher.onclick=function(){
    if(modif.style.display=="none"){
         modif.style.display = "block";
            Cacher.textContent = "Cacher";
        } else {
            modif.style.display = "none";
            Cacher.textContent = "Afficher";
        }
    }

  