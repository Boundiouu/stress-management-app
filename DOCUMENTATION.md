# Documentation technique - Application de gestion du stress

## Présentation du projet

Ce projet est une application de gestion du stress réalisée dans le cadre d'un projet ECE Bachelor.

L'objectif de l'application est de permettre à un utilisateur de :
- suivre son niveau de stress
- indiquer son humeur
- ajouter une note sur sa journée
- consulter son historique
- voir des statistiques simples
- consulter des exercices anti-stress
- recevoir une recommandation adaptée à son niveau de stress

## Technologies utilisées

### Frontend

Le frontend est développé avec React.

Il permet d'afficher :
- une page de connexion
- un dashboard
- un formulaire de suivi du stress
- une page historique
- une page exercices

Le frontend communique avec le backend grâce à des appels API.

### Backend

Le backend est développé avec :
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- cors
- nodemon

Le backend permet de :
- recevoir les données envoyées par le frontend
- enregistrer les données dans MongoDB
- récupérer l'historique
- calculer des statistiques
- gérer les exercices
- retourner une recommandation simple

## Structure du projet

```txt
stress-management-app/
  backend/
    config/
      db.js
    controllers/
      stressController.js
      exerciseController.js
      recommendationController.js
    models/
      StressEntry.js
      Exercise.js
    routes/
      stressRoutes.js
      exerciseRoutes.js
      recommendationRoutes.js
    server.js

  src/
    components/
      Navbar.js
      StressForm.js
      ExerciseCard.js
    pages/
      Dashboard.js
      History.js
      Exercises.js
      Login.js
      Register.js
    services/
      api.js
    styles/
      App.css
      Dashboard.css
      History.css
      Exercises.css
      Login.css
      Register.css
Fonctionnement du backend
Le fichier principal du backend est :
backend/server.js
Il permet de :
créer le serveur Express
activer cors
lire les données JSON
connecter MongoDB
brancher les routes API
Les routes sont branchées avec :
app.use("/api/stress", stressRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/recommendations", recommendationRoutes);
Connexion à MongoDB
La connexion à MongoDB est faite dans :
backend/config/db.js
Le backend utilise :
process.env.MONGO_URI
La variable MONGO_URI est stockée dans le fichier .env.
Le fichier .env ne doit jamais être envoyé sur GitHub.
Modèles MongoDB
StressEntry
Le modèle StressEntry représente une entrée de stress.
Champs :
mood : humeur de l'utilisateur
stressLevel : niveau de stress entre 1 et 10
note : note optionnelle
date : date de création
Exercise
Le modèle Exercise représente un exercice anti-stress.
Champs :
title : nom de l'exercice
category : catégorie
duration : durée en minutes
description : description
minStress : niveau minimum de stress conseillé
maxStress : niveau maximum de stress conseillé
Routes API
Stress
POST /api/stress
Ajoute une entrée de stress.
GET /api/stress
Récupère toutes les entrées de stress.
GET /api/stress/stats
Calcule les statistiques :
nombre total d'entrées
moyenne du stress
niveau minimum
niveau maximum
DELETE /api/stress/:id
Supprime une entrée de stress.
Exercices
POST /api/exercises
Ajoute un exercice anti-stress.
GET /api/exercises
Récupère tous les exercices.
Recommandations
GET /api/recommendations/:stressLevel
Retourne une recommandation selon le niveau de stress.
Logique utilisée :
1 à 3 : exercice léger / gratitude / musique douce
4 à 6 : respiration simple
7 à 8 : méditation guidée
9 à 10 : respiration profonde + pause immédiate
Fonctionnement du frontend
Le frontend utilise React.
Le fichier :
src/services/api.js
contient l'adresse du backend :
baseURL: "http://localhost:5000"
Le formulaire de stress envoie les données au backend avec :
POST /api/stress
La page historique récupère les données avec :
GET /api/stress
GET /api/stress/stats
La page exercices récupère les exercices avec :
GET /api/exercises
Le dashboard récupère une recommandation avec :
GET /api/recommendations/:stressLevel
Commandes pour lancer le projet
Backend
Depuis le dossier backend :
npm run dev
Le backend fonctionne sur :
http://localhost:5000
Frontend
Depuis la racine du projet :
npm start
Le frontend fonctionne sur :
http://localhost:3000
Sécurité
Le fichier .env contient les informations sensibles de connexion MongoDB.
Il ne doit jamais être :
affiché
envoyé sur GitHub
partagé publiquement
Le fichier .gitignore doit ignorer :
.env
node_modules/
backend/.env
backend/node_modules/
Tests réalisés
Les tests ont été réalisés avec :
Thunder Client / Postman pour les routes API
le navigateur pour le frontend
Les tests validés :
ajout d'une entrée de stress
affichage de l'historique
affichage des statistiques
ajout d'un exercice
affichage des exercices
affichage d'une recommandation
communication frontend-backend
connexion à MongoDB
Répartition du travail
Membre 1 - Frontend
Le membre 1 a travaillé sur :
l'interface utilisateur
les pages React
le formulaire
l'affichage de l'historique
l'affichage des exercices
Membre 2 - Backend
Le membre 2 a travaillé sur :
le serveur Express
la connexion MongoDB
les modèles Mongoose
les controllers
les routes API
la logique de recommandation simple
Membre 3 - Tests / documentation / finalisation
Le membre 3 a travaillé sur :
les tests API
les tests frontend
la documentation
la vérification de la cohérence des données
la préparation de la soutenance
Conclusion
L'application permet de suivre le stress d'un utilisateur, d'enregistrer ses données dans MongoDB, d'afficher son historique, de consulter des statistiques, d'afficher des exercices anti-stress et de proposer une recommandation adaptée.
Le projet est fonctionnel pour une première version de soutenance Bachelor.