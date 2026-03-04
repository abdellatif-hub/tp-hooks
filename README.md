# 📚 Mini Bibliothèque React

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Statut-En%20cours-22c55e" />
</p>

---

# 📖 Aperçu
Mini projet **React** qui simule une petite bibliothèque interactive.

L'utilisateur peut :
- choisir un livre
- voir les informations du livre
- ajouter des likes
- voir le **titre du navigateur changer automatiquement**

Ce projet permet de pratiquer les **React Hooks (`useState`, `useEffect`)**.

---

# ⚙️ Fonctionnalités

✅ Sélection d'un livre parmi 3 titres  
✅ Mise à jour dynamique du **titre du navigateur**  
✅ Compteur de **likes**  
✅ Composant réutilisable **BookLike**  
✅ Interface simple et claire  

---

## 📂 Structure des fichiers

### 📄 main.jsx
Ce fichier est le **point d'entrée de l'application React**.  
Il utilise `createRoot` pour afficher le composant principal `App` dans l'élément HTML ayant l'id `root`.  
Il utilise aussi `StrictMode` pour activer les vérifications supplémentaires pendant le développement.

<img width="2559" height="1280" alt="5" src="https://github.com/user-attachments/assets/bb7fd629-7039-4625-9772-42efefa1c7aa" />

---

### 📄 index.css
Ce fichier contient **les styles globaux de l'application**.  
Il définit :
- la police du site
- la couleur de fond
- le style du conteneur principal
- le design des cartes et des boutons.

  <img width="2559" height="1268" alt="4" src="https://github.com/user-attachments/assets/b1ab2dae-4796-410d-9465-a04a58ef709b" />


---

### 📄 App.jsx
Ce fichier contient le **composant principal de l'application**.

Il permet de :
- gérer le livre sélectionné avec `useState`
- modifier le titre de la page avec `useEffect`
- afficher les boutons pour choisir un livre
- envoyer les informations du livre au composant `BookLike`.
  <img width="2559" height="1266" alt="3" src="https://github.com/user-attachments/assets/3c71373c-9cd1-4865-9553-8f0ce9230de3" />


---

### 📄 BookLike.jsx
Ce composant affiche **les informations d'un livre**.

Il reçoit les données grâce aux **props** :
- `titre`
- `auteur`

Il utilise `useState` pour gérer un **compteur de likes**.  
Chaque clic sur le bouton **Aimer** augmente le nombre de likes.
<img width="2559" height="1245" alt="2" src="https://github.com/user-attachments/assets/ed8dd394-2cc9-4f20-876f-d3847e4493c9" />


---

## 1️⃣ Interface principale

L'application affiche le titre **Ma bibliothèque en React** et le livre sélectionné.

L'utilisateur peut sélectionner un livre grâce aux boutons.

<img width="2559" height="1346" alt="6" src="https://github.com/user-attachments/assets/e5a10d6d-ced5-484b-ae29-74016264f1a6" />


---

## 2️⃣ Sélection du livre *Les Misérables*

Lorsque l'utilisateur clique sur **Livre 2**, le livre sélectionné devient **Les Misérables**.

Le titre de l'onglet du navigateur se met à jour automatiquement grâce au hook `useEffect`.

<img width="2559" height="1343" alt="7" src="https://github.com/user-attachments/assets/cc05a974-f373-4b57-92d7-158931a51ad4" />


---



## 4️⃣ Sélection du livre *Clean Code*

En cliquant sur **Livre 3**, l'application affiche le livre **Clean Code**.

<img width="2559" height="1343" alt="8" src="https://github.com/user-attachments/assets/8abaf9f8-f80e-457e-9390-1abe29b7f9fd" />


---

## 5️⃣ Structure du projet

Cette capture montre l'organisation du projet dans **VS Code**.

On peut voir :
- le dossier `src`
- le dossier `components`
- les fichiers React du projet.

<img width="1970" height="1296" alt="1" src="https://github.com/user-attachments/assets/3400d721-e584-48cf-86f7-fbe12174debb" />


