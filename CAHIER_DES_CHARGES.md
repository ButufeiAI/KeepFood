# CAHIER DES CHARGES COMPLET
## Plateforme SaaS « KeepFood » – Restaurants & HoReCa

**Stack : React (front) – Node.js (API) – PostgreSQL (DB)**

---

## 1. Présentation du projet

**Nom de la plateforme** : KeepFood  
**Type de solution** : SaaS (Software as a Service) multi-établissements  
**Secteur** : Restaurants, snacks, pizzerias, cafés, bars, food-trucks, cantines d'entreprise (HoReCa)

KeepFood est une plateforme en ligne permettant à tout établissement HoReCa de :

- Digitaliser son menu et ses commandes.
- Permettre aux clients de commander eux-mêmes depuis leur smartphone (via QR code à table).
- Donner aux serveurs une application moderne sur tablette.
- Afficher les commandes en temps réel sur des écrans (TV) en cuisine et au bar.
- Gérer paiements, fidélité, abonnements de midi, statistiques, etc.

Chaque établissement dispose de son propre espace (multi-tenant), avec son logo, ses données, ses menus, ses utilisateurs.

---

## 2. Objectifs

- Fluidifier le service en salle (moins d'allers-retours, moins d'erreurs).
- Réduire la charge des serveurs en permettant aux clients de passer eux-mêmes commande.
- Accélérer la préparation en cuisine grâce à un affichage clair et temps réel.
- Automatiser les paiements (POS, QR, paiements en ligne).
- Proposer un menu digital attractif, avec photos, allergènes et descriptions.
- Fidéliser la clientèle via points, réductions, abonnements de midi.
- Offrir une solution clé en main à tous les restaurants, sans développement sur mesure.

---

## 3. Public cible

**Établissements** :
- Restaurants traditionnels
- Snacks, sandwicheries, pizzerias
- Cafés, bars, brasseries
- Food-trucks
- Cantines de sociétés, restauration collective

**Public final** :
- Familles, jeunes actifs, travailleurs, groupes d'amis.

---

## 4. Modèle de business – Abonnements SaaS KeepFood

KeepFood est commercialisé sous forme d'abonnements mensuels / annuels.  
Les modules disponibles dépendent du pack choisi.

### 4.1. Pack BASIC

Pour petits établissements ou tests.

**Fonctionnalités incluses** :

- Fiche restaurant (logo, coordonnées, horaires).
- Gestion du menu (produits, prix, catégories).
- Menu digital accessible via lien ou QR code.
- Commandes clients sur place via QR (sans paiement en ligne).
- Interface cuisine + bar (écran TV) avec séparation des éléments.
- Interface serveur simple (prise de commande et validation).

### 4.2. Pack STANDARD

Pour restaurants actifs avec service complet.

**Inclut tout le BASIC +** :

- **Paiements intégrés** :
  - via fournisseur(s) de paiement (ex. Viva Wallet, Payconiq, Bancontact, Stripe, etc.).
  - enregistrement automatique des paiements.
- **Gestion avancée des serveurs** :
  - comptes par serveur
  - attribution de zones et de tables.
- **Commandes à emporter et livraison** (site / app).
- **Gestion simple des stocks** (optionnelle).
- **Dashboard de base** : ventes par jour, par catégorie.

### 4.3. Pack PREMIUM

Pour restaurants et chaînes en croissance.

**Inclut tout le STANDARD +** :

- **Abonnements de midi** (3 jours / 5 jours / mensuel).
- **Module de fidélité** (points, réductions, offres).
- **Marketing** (notifications, campagnes ciblées).
- **Analyse avancée des produits** :
  - produits vedettes
  - produits qui ne se vendent pas.
  - Test A/B sur produits (nom, photo, description).
- **Support multi-restaurant** (chaîne avec plusieurs établissements).

---

## 5. Fonctionnalités détaillées

### 5.1. Gestion des restaurants (Back-office KeepFood)

Chaque établissement peut :

- Créer un compte restaurant.
- **Configurer** :
  - nom, logo, adresse ;
  - TVA, coordonnées de facturation ;
  - horaires d'ouverture ;
  - canaux activés : sur place, à emporter, livraison.
- Choisir son pack (BASIC / STANDARD / PREMIUM).
- **Configurer les moyens de paiement** :
  - KeepFood Pay (via fournisseur(s) intégré(s) ex. Viva)
  - ou fournisseur externe (si possible via API).

### 5.2. Gestion du menu & des produits

#### Création de produits

- Nom du produit.
- Description courte (liste).
- Description détaillée (fiche produit).
- Prix (un ou plusieurs formats : petit / normal / grand).
- Catégorie : entrées, plats, desserts, boissons, menus du jour, etc.
- Sous-catégorie (ex : Pizzas → Pizzas blanches, Pizzas rouges).
- Photos (1 principale + plusieurs secondaires).
- Allergènes (case à cocher).
- Tags : vegan, végétarien, halal, épicé, sans gluten, etc.
- **Variantes** :
  - tailles (S, M, L)
  - options (supplément fromage, sauce, garniture, etc.).

#### Fonctions avancées (Premium)

- **Assistant de création de produit** :
  - saisie simple → génération automatique du nom marketing + description.
- **Suggestions d'upsell / cross-sell** :
  - ex. proposer boisson + dessert avec un plat.
- **Statistiques de performance par produit**.

### 5.3. Commande client depuis son smartphone (QR à table)

- QR code unique par table (généré par KeepFood).
- Le client scanne, arrive sur la page du restaurant (PWA / web).
- Il voit :
  - le menu complet
  - photos, descriptions, allergènes, prix.
- Il ajoute des produits au panier.
- Il peut :
  - choisir la table (pré-remplie via QR)
  - ajouter remarques (ex. sans oignon).
- Il valide la commande :
  - mode BASIC : commande envoyée, paiement géré par serveur.
  - mode STANDARD/PREMIUM : possibilité de payer immédiatement (en ligne).
- La commande est automatiquement :
  - associée à la table
  - envoyée en cuisine/bar + sur tablette(s) des serveurs.

**Objectif** : Aider les serveurs → ils ont moins de prises de commande à la main, se concentrent sur le service et l'encaissement.

### 5.4. Application serveur (tablettes)

Les serveurs ont une application (web React ou app dédiée) sur tablette (Android / iPad) avec :

- Liste des tables / zones.
- Liste des commandes :
  - commandes prises par eux
  - commandes envoyées par les clients via QR.
- Possibilité de :
  - ajouter ou modifier une commande pour une table ;
  - annuler un article (avec raison) ;
  - marquer une commande comme « servie ».
- **Bouton Encaissement** :
  - choix du type de paiement :
    - Cash
    - Carte via terminal banque (marqué comme payé manuellement)
    - Paiement intégré (Viva / Payconiq / etc.)
  - en cas de paiement intégré :
    - l'application envoie la somme vers l'API du fournisseur ;
    - le terminal de paiement ou la page de paiement se lance ;
    - confirmation retour → commande marquée « payée ».

### 5.5. Affichage cuisine & bar (écran TV)

Un ou plusieurs écrans (TV/moniteur) sont installés en cuisine et au bar.  
Ces écrans affichent, via navigateur web, une interface KeepFood spécifique.

#### Séparation par poste

- **Écran Cuisine** :
  - affiche seulement les éléments de commande marqués comme « plats / nourriture ».
- **Écran Bar** :
  - affiche seulement les éléments marqués comme « boissons ».

#### Organisation

- à gauche : commandes récentes (N° commande, table, heure)
- au centre : liste des produits à préparer
- chaque article peut être marqué :
  - « en préparation »
  - « prêt »

Lorsqu'un produit est marqué « prêt » :
- le serveur reçoit une notification (sur tablette)
- la commande peut être passée au statut suivant (servie).

### 5.6. Commandes à emporter & livraison (STANDARD/PREMIUM)

Module pour commandes depuis domicile / bureau.

- Interface web KeepFood pour les clients.
- Choix :
  - à emporter
  - en livraison (si activé par le restaurant).
- Adresse de livraison, créneau horaire.
- Paiement recommandé en ligne (mais possibilité de paiement à la livraison selon configuration).

### 5.7. Module de fidélité (Premium)

- Compte client KeepFood (par email / téléphone).
- Accumulation de points par commande.
- Définition d'offres :
  - X points = dessert offert
  - Y points = réduction Z%
- Historique des récompenses.
- Affichage des avantages dans :
  - l'app client
  - l'interface serveur (info client).

### 5.8. Abonnements de midi (Premium)

- Création d'offres :
  - 3 jours / semaine
  - 5 jours / semaine
  - mensuel.
- Gestion :
  - jours où le client vient
  - possibilité de pause (congé, maladie).
- Restaurant voit :
  - liste abonnés
  - repas consommés / restants.
- Facturation récurrente possible via fournisseur de paiement.

### 5.9. Statistiques & tableau de bord

Pour chaque restaurant :

- Ventes par jour / semaine / mois.
- Top produits.
- Produits peu vendus.
- Temps moyen de préparation (si suffisamment de données).
- Répartition paiements (cash / carte / en ligne).
- Performance par serveur (en option).

---

## 6. Interfaces et rôles

### 6.1. Rôles d'utilisateurs

- **SUPER ADMIN (KeepFood)** : gestion globale de la plateforme (clients, packs, facturation).
- **ADMIN RESTAURANT** : gère tout dans son établissement.
- **MANAGER** : gère le service, les utilisateurs, les horaires.
- **SERVEUR** : prend commandes, encaisse, voit ses tables.
- **CUISINE / BAR** : consulte et met à jour l'état des commandes.
- **CLIENT FINAL** : commande via QR ou site / app.

---

## 7. Architecture technique

### 7.1. Frontend

- **Framework** : React
- **Type** : SPA (Single Page Application)
- **Responsive** : desktop + tablette + mobile
- **PWA** (Progressive Web App) pour clients et serveurs.
- Possibilité, à terme, d'app mobile native (React Native) réutilisant la même API.

### 7.2. Backend

- **Runtime** : Node.js
- **Framework** : NestJS ou Express (laissé au choix de l'équipe dev).
- **API** : REST (JSON).
- **Authentification** : JWT (JSON Web Token) + refresh tokens.
- **Multi-tenant** :
  - toutes les données liées à un `restaurant_id`.
  - séparation stricte des données entre établissements.

### 7.3. Base de données

**SGBD** : PostgreSQL

**Tables principales (exemple)** :

- `restaurants`, `plans`, `restaurant_settings`
- `users`, `roles`, `user_roles`
- `tables` (tables physiques du restaurant)
- `categories`, `products`, `product_images`, `product_variants`, `product_tags`
- `orders`, `order_items`, `order_status_history`
- `payments`, `invoices`
- `loyalty_accounts`, `loyalty_transactions`
- `subscriptions` (abonnements midi)
- `kitchen_screens`, `bar_screens` (config des écrans)

---

## 8. Paiements

### 8.1. Fournisseurs possibles

- Viva Wallet (ex : pour POS intégré et paiements en ligne).
- Payconiq / Bancontact (surtout Belgique).
- Stripe, Mollie, etc. (selon pays).

KeepFood doit :

- proposer une intégration par défaut (ex : Viva = KeepFood Pay).
- permettre, si possible, une configuration avancée pour certains restaurants (compte propre).

### 8.2. Intégration technique

- KeepFood ne stocke pas les données de carte.
- KeepFood envoie :
  - montant
  - ID commande
  - restaurant_id
  - au fournisseur de paiement.
- Réponse du fournisseur :
  - succès / échec
  - ID transaction
  - → sauvegardée dans `payments`.

### 8.3. Modes de paiement supportés

- Cash (marqué manuel par serveur).
- Carte via terminal bancaire classique (manuel, mais enregistré dans KeepFood).
- Carte / Wallet via POS ou app (via Viva, etc.).
- Paiement en ligne (QR, lien de paiement).

---

## 9. Sécurité & RGPD

- HTTPS obligatoire.
- Mots de passe hashés (bcrypt ou équivalent).
- Tokens JWT sécurisés.
- Limitation des droits par rôle.
- Journalisation des actions sensibles (audit log).
- Sauvegardes régulières de la base de données.
- **Respect RGPD** :
  - consentement pour données clients
  - possibilité d'export / suppression de compte.

---

## 10. Équipements recommandés

- Tablettes Android / iPad pour serveurs.
- TV / écrans larges en cuisine et au bar (navigateur web).
- Imprimantes thermiques (option, si le restaurant veut des tickets papier).
- Routeur Wi-Fi fiable, réseau interne stable.
- QR codes imprimés (stickers, supports de table).

---

## 11. Déploiement & phases

### Phase 1 – MVP (minimum viable product)

- Gestion restaurant + menus.
- Commande client via QR à table (sans paiement online).
- Application serveur (tablette) pour commandes + marquage payé cash.
- Écrans cuisine + bar avec séparation des articles.
- Dashboard simple de ventes.

### Phase 2 – Paiements & online

- Intégration paiements (ex. Viva + Payconiq / Bancontact).
- Commandes à emporter / livraison.
- Statistiques plus détaillées.

### Phase 3 – Premium & marketing

- Abonnements de midi.
- Fidélité, points, coupons.
- Test A/B sur produits.
- Marketing (notifications, promotions).
- Multi-restaurant (chaînes).

---

## 12. Maintenance & support

- Monitoring 24/7 (uptime cible minimum ex. 99,5%).
- Mises à jour régulières (corrections bug, nouvelles fonctionnalités).
- Système de ticketing / support pour restaurants.
- Documentation en ligne (FAQ, guides vidéo).

---

*Document créé le : 2024*  
*Version : 1.0*



