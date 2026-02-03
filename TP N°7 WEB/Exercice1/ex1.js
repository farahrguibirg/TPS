mydiv = document.getElementById('d1');
mydiv.innerHTML="Bonjour tout le monde!";
myparagraph =document.createElement('p');
myparagraph.innerHTML="Je suis un nouveau paragraphe";
mydiv.appendChild(myparagraph);
 img=document.getElementById("changer");
my=document.getElementById('p1');
my.style.width="400px";
my.style.height="100px";
my.style.border="2px solid red";
my.style.color="blue";
my2=document.getElementById('p2');
my2.style.fontSize="30px";
my2.style.backgroundColor="yellow";

function afficher(){
    nom=document.getElementById("nom");
    alert(nom.value);

}
function changer(){
    img=document.getElementById("changer");
    img.src="farah2.png";
}
function handl(){
    alert("double click detected");}
function handlemouse(){
    alert("mouse over detected");
}
//function onload(){alert("page loaded");}
//function onload(){alert("page scrolled");}
lien=document.getElementById("lien");
lien.setAttribute("href","https://www.google.com");
alert(img.getAttribute("src"));
supprim=document.getElementById("t1");
supprim.remove();