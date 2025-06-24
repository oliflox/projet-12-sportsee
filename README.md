# SportSee - Tableau de bord de suivi sportif

## 📋 Description

SportSee est une application web de tableau de bord pour le suivi d'activités sportives. Elle permet de visualiser les performances d'un utilisateur à travers différents graphiques et métriques, incluant l'activité quotidienne, les sessions moyennes, les performances par catégorie et le score global.

## 🚀 Fonctionnalités

### 📊 Tableau de bord principal
- **Accueil personnalisé** : Salutation avec le prénom de l'utilisateur
- **Score global** : Affichage du score de performance du jour
- **Données nutritionnelles** : Calories, protéines, glucides et lipides

### 📈 Graphiques et visualisations
- **Graphique d'activité quotidienne** : Poids et calories brûlées par jour
- **Graphique de sessions moyennes** : Durée moyenne des sessions par jour de la semaine
- **Graphique de performance** : Performance par catégorie (cardio, énergie, endurance, etc.)
- **Graphique de score** : Score global avec indicateur visuel

### 🔧 Fonctionnalités techniques
- **Mode mock/API** : Basculement entre données simulées et API réelle
- **Gestion d'erreurs** : Gestion complète des erreurs avec pages dédiées
- **Responsive design** : Interface adaptée à différents écrans
- **Routing dynamique** : Navigation par ID utilisateur

## 🛠️ Technologies utilisées

### Frontend
- **React 18** : Framework principal
- **React Router DOM** : Gestion des routes
- **Recharts** : Bibliothèque de graphiques
- **Vite** : Outil de build et développement

### Mode Mock vs API

L'application peut fonctionner en deux modes :

1. **Mode Mock** (`VITE_USE_MOCK_DATA=true`)
   - Utilise les données simulées dans le dossier `src/mock/`
   - Aucune connexion API requise
   - Idéal pour le développement et les tests

2. **Mode API** (`VITE_USE_MOCK_DATA=false`)
   - Se connecte à l'API backend
   - Nécessite que le serveur backend soit en cours d'exécution
   - Utilise l'URL définie dans `VITE_API_URL`

## 🎨 Interface utilisateur

### Graphiques disponibles
1. **Activité quotidienne** : Graphique en barres avec poids et calories
2. **Sessions moyennes** : Graphique linéaire avec durée des sessions
3. **Performance** : Graphique radar avec différentes catégories
4. **Score** : Graphique circulaire avec pourcentage de score

## 🐛 Gestion des erreurs

L'application gère plusieurs types d'erreurs :
- **Utilisateur non trouvé** : ID utilisateur invalide
- **Erreur API** : Problème de communication avec le backend
- **Erreur réseau** : Problème de connexion
- **Page non trouvée** : Route inexistante

Chaque erreur affiche une page dédiée avec un message explicatif et un bouton de retour à l'accueil.

## 📊 Données utilisateur

L'application affiche les données suivantes pour chaque utilisateur :
- **Informations personnelles** : Prénom, nom, âge
- **Score du jour** : Performance globale (0-100%)
- **Données nutritionnelles** : Calories, protéines, glucides, lipides
- **Activité physique** : Poids et calories par jour
- **Sessions d'entraînement** : Durée moyenne par jour
- **Performance** : Scores par catégorie d'activité

**Développé avec ❤️ pour OpenClassroom**

