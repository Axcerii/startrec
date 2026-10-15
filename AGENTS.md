<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

#Principes à respecter

Principe,Description Appliquée,Exemple Concret (Contexte Startrec)
S (Single Responsibility Principle - SRP),"Chaque module, classe ou fonction doit n'avoir qu'une seule raison de changer.",Un composant React ne doit être responsable que de l'affichage ; la logique de récupération des données Firebase doit résider dans un hook ou une fonction de service séparée.
DRY (Don't Repeat Yourself),Éliminer la duplication du code pour rendre les modifications plus sûres et rapides.,"Les modèles de données (interfaces TypeScript) pour les Projets ou les utilisateurs doivent être définis une seule fois et réutilisés dans les API routes, les services Firebase et les composants front-end."
"KISS (Keep It Simple, Stupid)",Favoriser les solutions les plus simples et directes pour éviter la complexité inutile.,"Les fonctions de calcul du Karma doivent rester simples et clairement nommées, évitant les algorithmes trop complexes s'ils peuvent être simplifiés sans perte de fonctionnalité métier."
