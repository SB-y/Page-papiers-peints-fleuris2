// Déclaration de la variable produits en dehors de la fonction DOMContentLoaded
let produits = [
    { nom: "Freesia", prix: 18.99, quantite: 0, total: 0 },
    { nom: "Kalmia", prix: 19.99, quantite: 0, total: 0 },
    { nom: "Nerine", prix: 20.99, quantite: 0, total: 0 },
    { nom: "Wedelia", prix: 21.99, quantite: 0, total: 0 }
];

document.addEventListener("DOMContentLoaded", function() {
     // Effacer le contenu du panier en supprimant l'entrée 'panier' du stockage local
localStorage.removeItem('panier');

    let btnsAjout = document.querySelectorAll('.btn-add');
    let btnsRet = document.querySelectorAll('.btn-ret');
 
     btnsAjout.forEach((btn, index) => {
         btn.addEventListener('click', function() {
             ajouterProduit(produits[index], index);
             ajouterProduitAuPanier(produits[index]); // Appel avec le produit spécifique ajouté
         });
     });
 
     btnsRet.forEach((btn, index) => {
         btn.addEventListener('click', function() {
             retirerProduit(produits[index], index);
             ajouterProduitAuPanier(produits[index]); // Appel avec le produit spécifique retiré
         });
     });
 
 });
 
 function ajouterProduit(produit, index) {
     produit.quantite++;
     produit.total = produit.quantite * produit.prix;
     mettreAJourDetailProduit(produit, index);
     mettreAJourTotalPanier();
 }
 
 function retirerProduit(produit, index) {
     if (produit.quantite > 0) {
         produit.quantite--;
         produit.total = produit.quantite * produit.prix;
         mettreAJourDetailProduit(produit, index);
         mettreAJourTotalPanier();
     }
 }
 
 function mettreAJourDetailProduit(produit, index) {
     const detailProduitElement = document.getElementById("detailProduit"+index);
     if (produit.quantite<=1) {
         detailProduitElement.innerText = "Vous avez commandé "+produit.quantite+" produit \n"+produit.nom+" pour "+produit.total.toFixed(2)+"€";
       }
         else {
         detailProduitElement.innerText = "Vous avez commandé "+produit.quantite+" produits \n"+produit.nom+" pour "+produit.total.toFixed(2)+"€";
       }
 }
 
 function mettreAJourTotalPanier() {
     let totalPanier = 0;
     let totalProduits = 0;
     produits.forEach(produit => { //  Lorsqu'une fonction de rappel est utilisée avec des méthodes comme forEach, map, filter, etc., 
                                   // on peut nommer la variable qui représente chaque élément du tableau comme on le souhaite
         totalPanier += produit.total; // A chaque clic, ajoute le coût de chaque produit
         totalProduits += produit.quantite; // A chaque clic, ajoute le nombre de chaque produit
     });
     if (totalProduits<=1) {
         document.getElementById("messagePanierTotal").innerText = "Votre commande totale est de "+totalProduits+" produit pour "+totalPanier.toFixed(2)+"€";
       }
       else {
         document.getElementById("messagePanierTotal").innerText = "Votre commande totale est de "+totalProduits+" produits pour "+totalPanier.toFixed(2)+"€";
   }
 
 }





 function ajouterProduitAuPanier(produit) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(produit);
    localStorage.setItem('panier', JSON.stringify(panier));
 }



document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les images du panier par leur classe
    let panierImages = document.querySelectorAll('.material-symbols-outlined');

    // Ajouter un gestionnaire d'événements pour le clic sur chaque image du panier
    panierImages.forEach(function(panierImage) {
        panierImage.addEventListener('click', function() {
            // Récupérer le panier depuis le stockage local
            let panier = JSON.parse(localStorage.getItem('panier')) || [];
            // Ouvrir la page des derniers produits dans une nouvelle fenêtre avec les données du panier
            window.open('derniers-produits.html?panier=' + encodeURIComponent(JSON.stringify(panier)), '_blank');
        });
    });
});
