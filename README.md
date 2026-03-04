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

# 🖼️ Captures d'écran

---

## 1️⃣ Interface principale

L'application affiche le titre **Ma bibliothèque en React** et le livre sélectionné.

L'utilisateur peut sélectionner un livre grâce aux boutons.

![Interface principale](public/images/1.png)

---

## 2️⃣ Sélection du livre *Les Misérables*

Lorsque l'utilisateur clique sur **Livre 2**, le livre sélectionné devient **Les Misérables**.

Le titre de l'onglet du navigateur se met à jour automatiquement grâce au hook `useEffect`.

![Les Misérables](public/images/2.png)

---

## 3️⃣ Sélection du livre *Le Petit Prince*

Lorsque l'utilisateur clique sur **Livre 1**, le livre sélectionné devient **Le Petit Prince**.

L'application met à jour l'interface dynamiquement.

![Le Petit Prince](public/images/3.png)

---

## 4️⃣ Sélection du livre *Clean Code*

En cliquant sur **Livre 3**, l'application affiche le livre **Clean Code**.

![Clean Code](public/images/4.png)

---

## 5️⃣ Structure du projet

Cette capture montre l'organisation du projet dans **VS Code**.

On peut voir :
- le dossier `src`
- le dossier `components`
- les fichiers React du projet.

![Structure du projet](public/images/5.png)

---

## 6️⃣ Fichier `main.jsx`

Ce fichier est le **point d'entrée de l'application React**.

Il permet de monter le composant `App` dans l'élément `root` du fichier HTML.

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
