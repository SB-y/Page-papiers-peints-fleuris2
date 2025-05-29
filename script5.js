document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le panier depuis le stockage local
    let panier = JSON.parse(localStorage.getItem('panier')) || [];

    // Sélectionner l'élément UL où nous afficherons les produits
    let listeProduits = document.getElementById('liste-produits');
    // Parcourir les produits du panier et les ajouter à la liste
    panier.forEach(produit => {
        // Créer un élément LI pour chaque produit
        let itemProduit = document.createElement('li');
        // Définir le contenu du produit dans l'élément LI
        itemProduit.textContent = "Nom :"+produit.nom+" Quantité :"+produit.quantite;
        // Ajouter l'élément LI à la liste
        listeProduits.appendChild(itemProduit);
   console.log(panier);
    });
});
