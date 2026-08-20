export const languages = ['Python', 'Java', 'C', 'JavaScript', 'SQL']

// Ajoute tes projets ici. Exemple :
// {
//   id: 1,
//   title: 'Nom du projet',
//   description: 'Résumé court affiché sur la carte.',
//   details: 'Description plus complète affichée sur la page du projet.',
//   languages: ['Python'],
//   image: '',   // ex: '/projects/mon-image.png' (fichier déposé dans public/projects/)
//   link: '',    // URL de la démo en ligne, si disponible
//   repo: '',    // URL du dépôt GitHub
// }
export const projects = [
  {
    id: 1,
    title: 'Devine le nombre',
    description:
      "Jeu type Mastermind en ligne de commande : devine un nombre mystère de 5 chiffres uniques en un minimum d'essais.",
    details:
      "Un jeu en Python jouable dans le terminal, inspiré du Mastermind. Le programme tire au hasard un nombre mystère de 5 chiffres tous différents, et le joueur doit le deviner en proposant des nombres de 5 chiffres. Après chaque essai, le jeu indique combien de chiffres proposés sont corrects et combien sont en plus bien placés, jusqu'à ce que le nombre soit trouvé. Le code vérifie aussi que chaque proposition est valide (bonne longueur, pas de chiffres répétés), et affiche à la fin le nombre d'essais qu'il a fallu pour trouver le nombre mystère.",
    languages: ['Python'],
    image: '',
    link: '',
    repo: 'https://github.com/Mhmd-vev/devineNombre',
  },
]
