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

  <!-- - Obtenir toutes les recettes (GET)
  Pour obtenir toutes les recettes enregistrées dans la base de données de l'API Cocktail, utilisez GET sur l'url http://localhost:3000/cocktails/

  - Chercher une recette par son id. (GET)
  Pour obtenir une recette par son id dans la base de données de l'API Cocktail, utilisez GET sur l'url http://localhost:3000/cocktails/:id
  Exemple : http://localhost:3000/cocktails/58ef5dba6d72a0152dbe6c0c

  - Chercher une recette par son nom. (GET)
  Pour obtenir une recette par son nom dans la base de données de l'API Cocktail, utilisez GET sur l'url http://localhost:3000/cocktails/name/:name
  Exemple : http://localhost:3000/cocktails/name/Mojito

  - Chercher des recette par leurs ingredients. (GET)
  Pour obtenir une recette à partir d'un ingrédient dans la base de données de l'API Cocktail, utilisez GET sur l'url http://localhost:3000/cocktails/ingredients/:ingredients
  Exemple : http://localhost:3000/cocktails/ingredients/salt

  - Créer une nouvelle recette. (POST)
  Pour créer une nouvelle recette dans la base de données de l'API Cocktail, utilisez POST sur l'url http://localhost:3000/cocktails/
  Entrez chacune de vos données de la manière suivante :
  ```
  {
  "name": "Piña Colada",
  "ingredients": ["white rum", "pineapple juice", "coconut cream", "pineapple"],
  "method": ["Pulse all the ingredients along with a handful of ice in a blender until smooth", "Pour into a tall glass and garnish as you like."]
  }
  ```

  - Editer une recette. (PUT)
  Pour éditer une recette existante dans la base de données de l'API Cocktail, utilisez PUT sur l'url http://localhost:3000/cocktails/:id
  Exemple : http://localhost:3000/cocktails/58ef5dba6d72a0152dbe6c0c
  Entrez chacune de vos données à modifier de la manière suivante :
  ```
  {
  "name": "Mojitooooooo !"
  }
  ```

  - Supprimer une recette. (DELETE)
  Pour supprimer une recette existante dans la base de données de l'API Cocktail, utilisez DELETE sur l'url http://localhost:3000/cocktails/:id
  Exemple : http://localhost:3000/cocktails/58ef5dba6d72a0152dbe6c0c -->

  ### getAll
  
   ```
   GET http://localhost:3000/cocktails
   ```
