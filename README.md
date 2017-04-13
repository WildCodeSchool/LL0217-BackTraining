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
  - ~~Obtenir toutes les recettes (GET)~~
  - ~~Chercher une recette par son id. (GET)~~
  - ~~Chercher une recette par son nom. (GET)~~
  - ~~Chercher des recette par leurs ingredients. (GET)~~
  - ~~Créer une nouvelle recette. (POST)~~
  - ~~Editer une recette. (PUT) -> with date updated~~
  - ~~Supprimer une recette. (DELETE)~~
  - [BONUS] Refactor the api so that it uses query parameters
  - [BONUS] Recevoir une recette aléatoire.
  - [BONUS] Add seperate ingredients
  - [BONUS] Add better search by name, and by ingredients (quty and name)(not necessarily the exact name but something close to it, and return a level of relevence)
  - [BONUS] Add a stricy mode for search by ingredient
  - [BONUS] Make it so that the user can modify the dates
  - [BONUS] Make it possible to specify if you ae suppoed to add an ingredient or simply replace them (in "Editer une recette")~~

  Il n'est pas nécessaire de coder une interface visuel. La visualisation des données dans un outils comme [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomo) est suffisante.

  ## Documention
  Documentez ici les requetes http pour acceder à votre API

  ### getAll
  To get all the cocktails recipes, use
  ```
  GET /cocktails/
  ```

  ### getById
  To get a cocktail by its id, use
  ```
  GET /cocktails/id/<cocktail-id>
  ```
  e.g
  ```
  GET /cocktails/id/58ef2b8c6ad91959ee1bf7c3
  ```
  This assumes _58ef2b8c6ad91959ee1bf7c3_ is a valid id, otherwise a _404_ error is returned.  

  ### getByName
  To get cocktails by their names, use
  ```
  GET /cocktails/name/<cocktail-id>
  ```
  e.g
  ```
  GET /cocktails/name/Pi%C3%B1a%20Colada
  ```  
  Returns an array of all the cocktails with the given name (names are not unique).
  Returns an empty array if no cocktail is found.

  ### getByIngredients
  To get cocktails by a list of ingredients, use
  ```
  GET /cocktails/ingredients/<ingredient1>,<ingredient2>,<...>
  ```
  e.g
  ```
  GET /cocktails/ingredients/white%20rum,pineapple
  ```  
  Returns an array of all the cocktails that use all the ingredients given (those cocktails might use more ingredients).
  Returns an empty array if no cocktail is found.

  ### create
  To create a recipe, use
  ```
  POST /cocktails/
  ```
  with the recipe in the body.
  E.g
  ```json
  POST /cocktails/
  body : {
      "name": "Piña Colada 3",
      "ingredients": [{
      	"name":"white rum",
      	"quantity": "1L"
      }],
      "method": ["Drink straight from the bottle"]
    }
```

### update
To update a recipe, use
```
PUT /cocktails/id/<cocktail-id>
```
with the modifications in the body.
E.g
```json
POST /cocktails/id/58ef384eefe423389353c912
body : {
    "name": "Reasonable Piña Colada 3",
    "method": ["Drink straight from the bottle (don't die tough)"]
  }
```
Currenty, the `method` and `ingredients` fields are simply overwritten with the given values.

### delete
To delete a recipe, use
```
DELETE /cocktails/id/<cocktail-id>
```
e.g
```json
DELETE /cocktails/id/58ef384eefe423389353c912
```
