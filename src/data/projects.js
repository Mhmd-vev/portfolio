export const languages = ['Python', 'Java', 'C', 'JavaScript', 'SQL']

// Pour ajouter une image : dépose le fichier dans public/projects/
// puis renseigne son chemin, ex: image: '/projects/gestionnaire-taches.png'
export const projects = [
  {
    id: 1,
    title: 'Gestionnaire de tâches en ligne de commande',
    description:
      "Application CLI permettant de créer, organiser et suivre des tâches, avec sauvegarde persistante au format JSON.",
    details:
      "Ce projet est un gestionnaire de tâches utilisable entièrement depuis le terminal. Il permet d'ajouter, modifier, marquer comme terminées et supprimer des tâches, avec des catégories et des priorités. Les données sont sauvegardées localement au format JSON pour être conservées d'une session à l'autre. L'objectif était de m'entraîner à structurer un programme Python en plusieurs modules et à manipuler des fichiers.",
    languages: ['Python'],
    image: '',
    link: '',
    repo: '',
  },
  {
    id: 2,
    title: 'Jeu du morpion en réseau',
    description:
      'Jeu multijoueur client/serveur en sockets TCP, avec gestion des tours et détection de fin de partie.',
    details:
      "Un jeu de morpion jouable à deux, chacun depuis son propre ordinateur, grâce à une communication réseau en sockets TCP. Le serveur gère la logique de la partie (tour par tour, validation des coups, détection de victoire ou d'égalité) pendant que chaque client affiche la grille et envoie les coups du joueur. Ce projet m'a permis de découvrir la programmation réseau bas niveau en C.",
    languages: ['C'],
    image: '',
    link: '',
    repo: 'https://github.com/ton-pseudo/morpion-reseau',
  },
  {
    id: 3,
    title: 'Application de gestion de bibliothèque',
    description:
      "Application Java (Swing) pour gérer emprunts et retours d'ouvrages, connectée à une base de données SQL.",
    details:
      "Une application de bureau développée en Java avec une interface graphique Swing, destinée à la gestion d'une petite bibliothèque. Elle permet d'enregistrer des ouvrages, des adhérents, et de suivre les emprunts et retours en cours. Toutes les données sont stockées dans une base de données SQL, avec des requêtes pour retrouver rapidement la disponibilité d'un livre ou l'historique d'un adhérent.",
    languages: ['Java', 'SQL'],
    image: '',
    link: '',
    repo: '',
  },
  {
    id: 4,
    title: 'Site vitrine associatif',
    description:
      "Site web statique responsive développé avec HTML, CSS et JavaScript pour une association étudiante.",
    details:
      "Un site vitrine pour une association étudiante, présentant ses activités, son équipe et un formulaire de contact. Le site est entièrement responsive et a été construit en HTML, CSS et JavaScript, sans framework, pour bien maîtriser les bases du développement web avant de passer à des outils plus avancés.",
    languages: ['JavaScript'],
    image: '',
    link: '',
    repo: '',
  },
]
