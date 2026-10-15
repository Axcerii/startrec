# Liste des Fonctionnalités - Startrec

## 1. Authentification & Sécurité
* Inscription et connexion classiques par email et mot de passe (hashé avec BCrypt)[cite: 2].
* Authentification via fournisseurs OAuth (Google et Instagram)[cite: 2].

## 2. Gestion des Profils Utilisateurs
* Création et édition de profils détaillés incluant : nom, description, réseaux, photo de profil, matériel, talents, métier principal et localisation[cite: 1, 2].
* Tableau de bord personnel affichant les notifications, les projets rejoints, et les projets portés[cite: 2].
* Consultation publique des profils tiers avec accès à leurs talents, matériel, réseaux et un appel à l'action (CTA) pour proposer un projet[cite: 2].
* Moteur de recherche d'utilisateurs incluant des filtres par talents et une mise en avant algorithmique (basée sur l'activité, le Karma et le statut premium)[cite: 2].

## 3. Gestion et Création de Projets
* Formulaire de publication de projets demandant des informations spécifiques : nom, description, date de tournage, localisation, ainsi que les métiers et matériels recherchés[cite: 1, 2].
* Affichage de fiches de projet incluant une barre de progression visuelle des talents trouvés/manquants et des boutons de partage sur les réseaux[cite: 2].
* Algorithme de recommandation qui filtre et propose des projets sur la page d'accueil en fonction du métier de l'utilisateur, de l'urgence et du statut de l'abonnement du porteur[cite: 2].
* Dashboard de gestion de projet permettant au créateur de modifier son annonce et d'examiner les candidatures reçues[cite: 2].

## 4. Système de Candidature
* Formulaire de candidature pré-rempli avec le métier de l'utilisateur[cite: 2].
* Possibilité pour le candidat de renseigner le matériel qu'il peut apporter et d'ajouter une description personnalisée[cite: 2].

## 5. Système de Karma (Fiabilité)
* Évaluation de la fiabilité (Karma) par la validation de la présence d'un utilisateur à la suite d'un tournage expiré[cite: 1, 2].

## 6. Fonctionnalités Premium (Monétisation via Stripe)
* Souscription à un abonnement mensuel via la plateforme Stripe[cite: 2].
* Visibilité débloquée du Karma des autres utilisateurs et des porteurs de projets[cite: 1, 2].
* Intégration de portfolios détaillés (via des iFrames Vimeo/YouTube) et de liens personnalisés sur le profil[cite: 1, 2].
* Suppression des publicités et accès à des thèmes personnalisés[cite: 1].
* Mise en avant prioritaire des projets portés par l'utilisateur premium dans les recommandations[cite: 2].
* Pré-remplissage intelligent de la description lors des candidatures via l'IA[cite: 2].

## 7. Administration (Back-Office)
* Interface dédiée aux non-développeurs pour la modération des profils et des projets[cite: 2].
* Gestion des abonnements utilisateurs et accès aux informations de Stripe[cite: 2].
* Visualisation des logs d'erreurs (Axiom) pour faciliter la maintenance[cite: 2].