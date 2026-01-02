# 🚀 GUIDE DE DÉMARRAGE RAPIDE
## Nouvelles Interfaces Bar & Serveur

---

## 📱 ACCÉDER AUX NOUVELLES INTERFACES

### 1. 🍸 Interface BAR/CAISSE

**URL** : `http://localhost:5202/bar-pos`

**OU depuis l'app serveur** :
1. Aller sur `/server`
2. Cliquer sur le bouton **"🍸 Interface Bar/Caisse"** en haut

**Utilisation** :
- Sélectionner catégorie de boissons (Softs, Cafés, Bières, Vins, Cocktails...)
- Cliquer sur produits avec images pour ajouter au panier
- Choisir une table
- Ajuster quantités avec +/-
- **Envoyer au bar** OU **Payer directement** (CB/Cash/Ticket)

---

### 2. 👨‍🍳 Prise de Commande par Étapes

**Depuis la page serveur** (`/server`) :
1. Trouver la table désirée
2. Cliquer sur le **bouton "+" vert** à côté du nom de la table
3. Vous êtes redirigé vers l'interface de commande par étapes

**Les 5 étapes** :
1. **🍸 Apéritifs** - Boissons d'accueil
2. **🥗 Entrées** - Premiers plats
3. **🍽️ Plats** - Plats principaux
4. **🍰 Desserts** - Douceurs
5. **☕ Café/Digestifs** - Pour terminer

**Utilisation** :
- Naviguer entre les étapes avec les boutons en haut
- Cliquer sur les produits (avec images) pour les ajouter
- Les produits ajoutés sont marqués avec un badge bleu
- Ouvrir le panier en haut à droite (icône 🛒)
- Actions possibles :
  - **💰 Demander Paiement** - Notifie le client
  - **📤 Envoyer** - Envoie en cuisine/bar

---

### 3. 🍳 Écran Cuisine/Bar

**URL** : `http://localhost:5202/kitchen-display`

**2 modes disponibles** :
- **🍳 Mode Cuisine** - Affiche uniquement les plats (FOOD)
- **🍸 Mode Bar** - Affiche uniquement les boissons (DRINK)

**Utilisation** :
- Basculer entre Cuisine/Bar avec les boutons en haut
- Voir les commandes avec images des produits
- Cliquer sur les boutons pour changer le statut :
  - **👨‍🍳 Préparer** - Marque en préparation
  - **✅ Prêt** - Notifie le serveur
- Rafraîchissement automatique toutes les 5 secondes

**Recommandé pour** :
- Écran TV en cuisine
- Écran TV au bar
- Tablette chef/barman

---

## 🎯 SCÉNARIOS D'UTILISATION

### Scénario A : Client arrive au bar

1. **Barman** ouvre `/bar-pos`
2. Sélectionne catégorie (ex: Cafés ☕)
3. Clique sur "Espresso" (voit l'image)
4. Clique sur "Cappuccino" (voit l'image)
5. Ajuste quantités si besoin
6. Choisit table ou "Sur place"
7. **Paye directement** avec CB/Cash

### Scénario B : Service en salle complet

1. **Serveur** accueille clients à la Table 5
2. Va sur `/server`
3. Clique sur **"+"** à côté de "Table 5"
4. **Étape 1 - Apéritifs** :
   - Sélectionne "Kir Royal" (image visible)
   - Sélectionne "Coca-Cola" (image visible)
5. **Étape 2 - Entrées** :
   - Sélectionne "Salade César" (image visible)
   - Ajoute note : "Sans croûtons"
6. **Étape 3 - Plats** :
   - Sélectionne "Steak Frites" (image visible)
   - Sélectionne "Pizza Margherita" (image visible)
7. Ouvre le panier (🛒)
8. Vérifie tout est correct
9. **Envoie la commande** 📤

10. **En cuisine** :
    - Chef voit commande sur écran TV
    - Voit photos des plats
    - Clique "👨‍🍳 Préparer" sur chaque plat
    - Quand prêt : clique "✅ Prêt"

11. **Serveur** reçoit notification
12. Va chercher les plats
13. Marque "Servi" sur sa tablette

14. **Fin du repas** :
    - Client demande l'addition
    - Serveur clique "💰 Demander Paiement"
    - Encaisse via l'app ou bar

---

## ✨ FONCTIONNALITÉS CLÉS

### Images Réelles Partout ✅
- Toutes les interfaces montrent les photos des produits
- Reconnaissance visuelle facile
- Moins d'erreurs de commande

### Prise de Commande Professionnelle ✅
- Guidage par étapes (comme dans un vrai restaurant)
- Organisation logique du service
- Impossible d'oublier une étape

### Interface Bar Dédiée ✅
- Catégories spécifiques boissons
- Paiement direct intégré
- Pavé numérique pour montants

### Écrans Cuisine/Bar Séparés ✅
- Filtrage automatique Food/Drink
- Affichage optimisé écran TV
- Mise à jour temps réel

---

## 🎨 PERSONNALISATION

### Ajouter Vraies Images Produits

1. Aller sur `/products`
2. Éditer un produit
3. Ajouter URL de l'image ou uploader
4. L'image apparaîtra automatiquement dans :
   - BarPOS
   - ServerStepOrder
   - KitchenBarDisplay

### Configurer Catégories

Les catégories doivent correspondre aux noms dans le code :
- Pour les **apéritifs** : nommer "Apéritifs" ou "Cocktails"
- Pour les **entrées** : nommer "Entrées" ou "Salades"
- Pour les **plats** : nommer "Plats", "Viandes", "Poissons", etc.
- Pour les **desserts** : nommer "Desserts" ou "Glaces"
- Pour le **café** : nommer "Cafés", "Thés", "Digestifs"

### Types de Produits

**Important** : Bien définir le type :
- `FOOD` → Apparaît dans l'écran Cuisine 🍳
- `DRINK` → Apparaît dans l'écran Bar 🍸

---

## 🔧 DÉPANNAGE

### Les images ne s'affichent pas ?
- Vérifier que l'URL de l'image est accessible
- Vérifier le champ `image` dans la base de données
- Utiliser des URLs HTTPS de préférence

### Produits n'apparaissent pas dans les étapes ?
- Vérifier le nom de la catégorie
- Doit correspondre aux catégories définies dans le code
- Ex: "Entrées" et non "Entree" ou "entrées"

### Écran cuisine/bar vide ?
- Vérifier le type de produit (FOOD/DRINK)
- Vérifier qu'il y a des commandes actives
- Attendre 5 secondes (rafraîchissement auto)

---

## 📱 RACCOURCIS CLAVIER

- **Échap** : Fermer les modales
- **F5** : Rafraîchir la page
- **F11** : Plein écran (recommandé pour écrans TV)

---

## 🎓 FORMATION RAPIDE PERSONNEL

### Pour les Serveurs (5 min)

1. Montrer le bouton "+" sur chaque table
2. Expliquer les 5 étapes
3. Pratiquer une commande test
4. Montrer le bouton "Demander Paiement"
5. Montrer les notifications quand plat prêt

### Pour le Bar (3 min)

1. Ouvrir `/bar-pos`
2. Montrer les catégories
3. Ajouter quelques produits
4. Montrer les boutons de paiement
5. Expliquer "Envoyer au bar" vs "Payer"

### Pour la Cuisine (3 min)

1. Ouvrir `/kitchen-display` mode Cuisine
2. Expliquer les statuts (Attente → Préparation → Prêt)
3. Montrer comment cliquer sur les boutons
4. Expliquer le rafraîchissement auto

---

## 🚀 PRÊT À UTILISER !

Toutes les interfaces sont **opérationnelles** et **prêtes pour production** !

**Bon service !** 🎉

---

*Guide créé le 31/12/2025*  
*Version 1.0*
