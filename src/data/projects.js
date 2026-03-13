// Source de données temporaire du portfolio.
// Ce fichier centralise les informations projets pour éviter
// de dupliquer le contenu dans plusieurs composants.
//
// Plus tard, si besoin, ce tableau pourra être remplacé
// par une API ou un fichier JSON externe.

const projects = [
  {
    id: 'booki',
    title: 'Booki',
    shortDescription:
      'Intégration d’une page d’accueil responsive à partir d’une maquette en HTML et CSS.',
    fullDescription:
      'Projet de transformation de maquette en interface web responsive avec une attention portée à la structure HTML, à la mise en page CSS et à l’adaptation desktop/mobile.',
    recruiterHighlight:
      'Ce projet montre ma capacité à intégrer une maquette proprement, à structurer une page web et à produire un rendu responsive fidèle.',
    duration: '90h',
    context: 'Projet 2 OpenClassrooms',
    skills: [
      'Intégration HTML/CSS',
      'Responsive design',
      'Respect d’une maquette',
      'Structure sémantique',
    ],
    stack: ['HTML', 'CSS', 'Responsive'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet02_Booki.git',
    demo: '',
  },
  {
    id: 'fisheye',
    title: 'Fisheye',
    shortDescription:
      'Création d’un site accessible pour une plateforme de photographes.',
    fullDescription:
      'Projet centré sur l’accessibilité front-end avec navigation clavier, gestion des interactions et amélioration de l’expérience utilisateur sur une plateforme de photographes.',
    recruiterHighlight:
      'Ce projet met en avant ma sensibilité à l’accessibilité, à l’UX et à la qualité d’interaction sur une interface web.',
    duration: '70h',
    context: 'Projet 6 OpenClassrooms',
    skills: [
      'Accessibilité',
      'JavaScript',
      'Navigation clavier',
      'Structure UI',
    ],
    stack: ['JavaScript', 'Accessibilité', 'UI'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet06_Front-End-Fisheye.git',
    demo: '',
  },
  {
    id: 'sportsee',
    title: 'SportSee',
    shortDescription:
      'Développement d’un tableau de bord analytics avec React et visualisation de données.',
    fullDescription:
      'Application front-end développée avec React pour afficher des données utilisateurs sous forme de graphiques. Ce projet met en avant la consommation de données, la structuration de composants et la visualisation.',
    recruiterHighlight:
      'Ce projet montre ma capacité à construire une interface React modulaire, à exploiter des données et à les restituer de manière lisible.',
    duration: '60h',
    context: 'Projet 12 OpenClassrooms',
    skills: [
      'React',
      'Visualisation de données',
      'Architecture de composants',
      'Consommation de données',
    ],
    stack: ['React', 'API', 'Recharts'],
    github: 'https://github.com/Ma-Eum/SportSee.git',
    demo: '',
  },
  {
    id: 'argentbank',
    title: 'Argent Bank',
    shortDescription:
      'Application bancaire React avec authentification et gestion de compte utilisateur.',
    fullDescription:
      'Projet React basé sur l’utilisation d’une API pour gérer l’authentification d’un utilisateur et l’affichage de ses informations bancaires, avec une logique de navigation et de gestion d’état.',
    recruiterHighlight:
      'Ce projet illustre ma capacité à travailler avec une API, gérer l’authentification et structurer une application React orientée utilisateur.',
    duration: '100h',
    context: 'Projet 13 OpenClassrooms',
    skills: ['React', 'API', 'Authentification', 'Gestion d’état'],
    stack: ['React', 'API', 'Authentification'],
    github: 'https://github.com/Ma-Eum/Openclassroom-Project13-BankAPI.git',
    demo: '',
  },
  {
    id: 'hrnet',
    title: 'HRnet',
    shortDescription:
      'Migration d’une application jQuery vers React avec création d’un composant réutilisable.',
    fullDescription:
      'Projet de refonte front-end consistant à migrer une application existante de jQuery vers React tout en améliorant l’organisation du code et en publiant un composant réutilisable.',
    recruiterHighlight:
      'Ce projet montre ma capacité à refactoriser, moderniser une base existante et produire un code plus modulaire et maintenable.',
    duration: '110h',
    context: 'Projet 14 OpenClassrooms',
    skills: [
      'Migration jQuery vers React',
      'Refactor',
      'Composant réutilisable',
      'Performance',
    ],
    stack: ['React', 'Refactor', 'Performance'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet14_HRnet.git',
    demo: '',
  },
]

export default projects