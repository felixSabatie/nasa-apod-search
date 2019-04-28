# NasaApodSearch

L'application est hébergée à l'adresse suivante : [https://felixsabatie.github.io/nasa-apod-search](https://felixsabatie.github.io/nasa-apod-search)

## Fonctionnalités

* Recherche d'images par dates
* Affichage d'images aléatoires
* Chargement des images 10 par 10 si plus de 10 dates sont demandées
* Affichage des détails à l'aide d'une pop-in
* Stockage de la recherche dans l'url
* Gestion des vidéos

## Technologies

Ce projet a été réalisé avec Angular 7

### Dépendences

Seule la dépendence "ng-pick-datetime" a été ajoutée pour le sélectionneur de date, le reste de l'application a été créé avec les outils proposés par Angular.

### Déploiement

J'ai ajouté un script de "déploiement" au fichier "package.json" qui permet de build l'application et de la copier dans le dossier "docs" utilisé par github pour héberger l'application sur github pages. Pour déployer l'application, entrer la commande `npm run deploy` et faire un commit sur la branche `master`