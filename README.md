# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_

Modification du composant ProductSearch pour utiliser la recherche :
j'ai créé un composant ProductSearch qui permet aux utilisateurs de saisir un terme de recherche. Ce composant utilise un état local pour gérer le terme de recherche saisi par l'utilisateur.
![Capture d'écran 1](captures/react1.1.png)
Implémentation du debounce sur la recherche :
j'ai introduit un hook personnalisé useDebounce, qui retarde la mise à jour du terme de recherche jusqu'à ce que l'utilisateur ait cessé de taper pendant un certain délai (300 ms). Cela réduit le nombre d'appels de recherche effectués pendant la saisie, améliorant ainsi les performances de l'application.
![Capture d'écran 2](captures/react1.2.png)

![Capture d'écran 3](captures/react1.3.png)
```

### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_
`Création du LanguageContext :
j'ai créé un LanguageContext pour gérer les préférences de langue au sein de votre application. Cela permet de centraliser la gestion de la langue et de faciliter l'internationalisation.
![Capture d'écran 4](captures/react2.1.png)
Ajout du sélecteur de langue :
Un sélecteur de langue a été ajouté dans le composant App, permettant aux utilisateurs de choisir entre le français et l'anglais. Lorsque l'utilisateur change la langue, l'état est mis à jour en conséquence.
![Capture d'écran 5](captures/react2.2.png)
```

### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
Création du hook useDebounce :
j'ai créé le hook useDebounce, qui permet de gérer le délai avant de mettre à jour une valeur. Ce hook est utilisé dans le composant ProductSearch pour améliorer la recherche en temps réel.
Création du hook useLocalStorage :
j'ai également créé le hook useLocalStorage, qui permet de stocker et de récupérer des valeurs dans le stockage local du navigateur. Cela a été utilisé pour conserver la langue sélectionnée par l'utilisateur, même après le rechargement de la page.
![Capture d'écran 6](captures/react3.1.png)

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
4.1 Ajouter le bouton de rechargement : Vous avez ajouté un bouton de rechargement pour permettre aux utilisateurs de recharger les produits.
![Capture d'écran 7](captures/react4.1.png)
``4.2 j'ai mis en place un mécanisme de pagination pour afficher un nombre limité de produits par page. Cela améliore la navigation dans la liste des produits, surtout si vous avez un grand nombre d'articles à afficher.
![Capture d'écran 8](captures/react4.2.png)

## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.