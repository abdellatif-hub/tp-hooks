# Mini Bibliothèque React

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Statut-En%20cours-22c55e" alt="Statut" />
</p>

## Aperçu
Mini projet React qui simule une petite bibliothèque interactive.
L'utilisateur sélectionne un livre, le titre de l'onglet navigateur se met à jour, puis peut ajouter des likes au livre affiché.

## Fonctionnalités
- Sélection d'un livre parmi 3 titres.
- Mise à jour dynamique du document title avec `useEffect`.
- Compteur de likes local avec `useState`.
- Composant réutilisable `BookLike`.

## Captures d'écran

<table>
  <tr>
    <td><img src="public/images/1.png" alt="Capture 1" /></td>
    <td><img src="public/images/2.png" alt="Capture 2" /></td>
    <td><img src="public/images/3.png" alt="Capture 3" /></td>
    <td><img src="public/images/4.png" alt="Capture 4" /></td>
  </tr>
  <tr>
    <td><img src="public/images/5.png" alt="Capture 5" /></td>
    <td><img src="public/images/6.png" alt="Capture 6" /></td>
    <td><img src="public/images/7.png" alt="Capture 7" /></td>
    <td><img src="public/images/8.png" alt="Capture 8" /></td>
  </tr>
</table>

## Stack technique
- React 19
- Vite 7
- JavaScript (ES Modules)
- ESLint

## Installation et lancement
```bash
npm install
npm run dev
```

## Scripts disponibles
- `npm run dev` : lance le serveur de développement.
- `npm run build` : génère le build de production.
- `npm run preview` : prévisualise le build localement.
- `npm run lint` : exécute ESLint.

## Structure du projet
```text
mini-bibliotheque-react/
  public/
    images/
      1.png ... 8.png
  src/
    components/
      BookLike.jsx
    App.jsx
    App.css
    index.css
    main.jsx
```

## Concepts React utilisés
- `useState` : gestion de l'état local (`livre`, `likes`).
- `useEffect` : effet de bord pour synchroniser le titre de la page.
- Props : passage des données de `App` vers `BookLike`.

## Auteur
Projet réalisé par **Abdela**.
