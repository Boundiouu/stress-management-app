# Tests - Application de gestion du stress

## Objectif

Ces tests permettent de vérifier que le backend, le frontend et la base de données MongoDB fonctionnent correctement ensemble.

## Lancement du projet

### Backend

Depuis le dossier `backend` :

```bash
npm run dev 
## Résultat des tests API

Tous les tests API ont été validés :

- GET `/` : OK
- POST `/api/stress` : OK
- GET `/api/stress` : OK
- GET `/api/stress/stats` : OK
- POST `/api/exercises` : OK
- GET `/api/exercises` : OK
- GET `/api/recommendations/7` : OK

## Résultat final des tests

### Tests API

- GET `/` : OK
- POST `/api/stress` : OK
- GET `/api/stress` : OK
- GET `/api/stress/stats` : OK
- POST `/api/exercises` : OK
- GET `/api/exercises` : OK
- GET `/api/recommendations/7` : OK

### Tests frontend

- Connexion vers le dashboard : OK
- Ajout d'une entrée de stress depuis l'interface : OK
- Affichage de la recommandation : OK
- Affichage de l'historique : OK
- Affichage des statistiques : OK
- Affichage des exercices : OK

### Conclusion

Le backend, le frontend et MongoDB fonctionnent correctement ensemble.
L'application est prête pour une première présentation.