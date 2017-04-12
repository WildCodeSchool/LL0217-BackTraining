# La Loupe 0217 - BackTraining
Exercice pour s'entrainer à utiliser la partie Back de notre MeanStack.

## Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)

## Installation

```bash
npm install
```

## Development

```bash
nodemon --exec npm start
```

## Objectif
Créer une API sans authentification qui permet à ses utilisateurs de consulter et d'enrichire une base de donnée de recette de coktails.


``` json
Exemple de recette:

{
  "_id": 1,
  "name": "Piña Colada",
  "ingredients": ["white rum", "pineapple juice", "coconut cream", "pineapple"],
  "method": ["Pulse all the ingredients along with a handful of ice in a blender until smooth", "Pour into a tall glass and garnish as you like."],
  "created_at": "date",
  "updated_at": "date"
}
```

L'utilisateur doit pouvoir faire des requetes pour :
  - Obtenir toutes les recettes (GET)
  - Chercher une recette par son id. (GET)
  - Chercher une recette par son nom. (GET)
  - Chercher des recette par leurs ingredients. (GET)
  - Créer une nouvelle recette. (POST)
  - Editer une recette. (PUT)
  - Supprimer une recette. (DELETE)
  - [BONUS] Recevoir une recette aléatoire.

  Il n'est pas nécessaire de coder une interface visuel. La visualisation des données dans un outils comme [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) est suffisante.

  ## Documention
  Documentez ici les requetes http pour acceder à votre API

  ### getAll
  
   ```
   GET http://localhost:3000/cocktails
   ```
