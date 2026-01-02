# 📖 Guide Utilisateur - Restaurateur

## Bienvenue sur KeepFood Pro !

Ce guide vous aidera à utiliser toutes les fonctionnalités de la plateforme KeepFood pour gérer votre restaurant.

---

## 🚀 Démarrage Rapide

### 1. Connexion
- Accédez à `http://localhost:5202/login`
- Connectez-vous avec vos identifiants
- Vous arrivez sur le **Dashboard**

### 2. Configuration Initiale

#### Créer votre Restaurant
1. Allez dans **🏢 Restaurants**
2. Cliquez sur **➕ Nouveau Restaurant**
3. Remplissez les informations :
   - Nom du restaurant
   - Adresse complète
   - Logo (optionnel)
   - Pack : BASIC / STANDARD / PREMIUM

#### Créer des Catégories
1. Allez dans **📂 Catégories**
2. Cliquez sur **➕ Nouvelle Catégorie**
3. Nommez votre catégorie (ex: "Entrées", "Plats", "Desserts")
4. Ajoutez une image (optionnel)

#### Créer des Produits
1. Allez dans **🍽️ Produits**
2. Cliquez sur **➕ Nouveau Produit**
3. Remplissez :
   - Nom du produit
   - Catégorie
   - Prix
   - Description
   - Image(s)
   - Type : FOOD (plat) ou DRINK (boisson)
   - Allergènes et tags (vegan, végétarien, etc.)

#### Créer des Tables
1. Allez dans **🪑 Tables**
2. Cliquez sur **➕ Nouvelle Table**
3. Remplissez :
   - Nom (ex: "Table 1", "Terrasse 3")
   - Capacité (nombre de personnes)
   - Zone (ex: "Salle principale", "Terrasse")
4. **Générer le QR Code** : Cliquez sur le QR code pour l'imprimer et le placer sur la table

---

## 📋 Fonctionnalités Principales

### 📊 Dashboard
- Vue d'ensemble de votre activité
- Statistiques en temps réel
- Commandes du jour
- Produits les plus vendus

### 🪑 Gestion des Tables
- **Créer des zones** : Organisez vos tables par zone (Salle, Terrasse, Bar)
- **Générer QR codes** : Chaque table a un QR code unique
- **Vue Plan Salle** : Visualisez vos tables en temps réel
- **Éditeur Plan** : Créez votre plan de salle interactif

### 🍽️ Gestion du Menu
- **Catégories** : Organisez vos produits par catégories
- **Produits** : Ajoutez photos, descriptions, prix, variantes
- **Disponibilité** : Activez/désactivez les produits rapidement

### 📋 Commandes
- Voir toutes les commandes
- Filtrer par statut (En attente, En préparation, Prête, etc.)
- Modifier ou annuler des commandes
- Voir l'historique

### 👥 Employés
- Ajouter des employés
- Définir leurs rôles (MANAGER, SERVEUR, CUISINE, BAR)
- Attribuer des tables aux serveurs
- Attribuer des zones aux serveurs

### 📈 Statistiques Avancées
- Performance par employé
- Évolution des ventes
- Top produits
- Graphiques détaillés

---

## 🎯 Workflow Typique

### Matin (Ouverture)
1. ✅ Vérifier que tous les produits sont disponibles
2. ✅ Vérifier que les tables sont actives
3. ✅ Vérifier que les serveurs sont connectés

### Pendant le Service
1. 📱 Les clients scannent les QR codes
2. 🛒 Les clients commandent depuis leur smartphone
3. 🍳 Les commandes apparaissent automatiquement en cuisine/bar
4. 👨‍💼 Les serveurs voient les commandes sur leur tablette
5. ✅ Quand c'est prêt, la cuisine marque "Prêt"
6. 🔔 Les serveurs reçoivent une notification
7. 💰 Les serveurs encaissent à la fin

### Soir (Fermeture)
1. 📊 Consulter les statistiques du jour
2. 💾 Tout est sauvegardé automatiquement

---

## 💡 Astuces

- **Zones** : Créez des zones pour mieux organiser votre restaurant
- **QR Codes** : Imprimez les QR codes et placez-les sur chaque table
- **Statuts** : Utilisez les statuts pour suivre l'état de chaque commande
- **Notifications** : Les notifications apparaissent automatiquement en temps réel

---

## 🆘 Support

En cas de problème :
1. Vérifiez que le backend est démarré (port 5201)
2. Vérifiez que le frontend est démarré (port 5202)
3. Consultez les logs dans la console du navigateur

---

*Dernière mise à jour : 2025*
