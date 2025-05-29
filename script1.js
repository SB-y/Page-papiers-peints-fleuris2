let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

img1.addEventListener("mouseover", function() {
    img1.style.display = "none"; 
    img2.style.display = "block"; 
});

img2.addEventListener("mouseout", function() {
    img2.style.display = "none"; 
    img1.style.display = "block"; 
});


let message=document.querySelector("#messageResult");
let buttonElement=document.getElementById("resultat");
let buttonElementReset=document.getElementById("reset");
buttonElementReset.style.display="none"

buttonElement.addEventListener("click", function () {
let valeur1=parseFloat(document.getElementById("hauteur").value);
let valeur2=parseFloat(document.getElementById("largeur").value);
let nombre1=Math.floor(10/valeur1);
let nombre2=valeur2/0.5;
let nombreRouleaux=Math.ceil(nombre2/nombre1);

if (isNaN(valeur1) || isNaN(valeur2)) {
message.innerText="Veuillez indiquer des valeurs numériques en mètre !";
}
else if (nombreRouleaux==Infinity) {
message.innerText="Pour une hauteur de mur supérieure à 10 mètres, merci de nous contacter !"
}
else {
message.innerText=nombreRouleaux+" rouleaux";
}
if (message.style.display="block") 
{buttonElementReset.style.display="block"
}
}
)

buttonElementReset.addEventListener("click", function () {
message.style.display="none";
document.getElementById("hauteur").value="";
document.getElementById("largeur").value="";
}
)




