// Source de données centralisée du portfolio.
// Chaque projet contient les informations nécessaires
// pour l'affichage des cartes et des pages détail.
//
// Ainsi on évite de dupliquer le contenu dans plusieurs
// composants.
//
// Plus tard, si besoin, ce tableau pourra être remplacé
// par une API ou un fichier JSON externe.

const projects = [
  {
    id: 'booki',
    title: 'Booki',
    image: '/projects/booki.webp',
    shortDescription:
      'Intégration d’une page d’accueil responsive à partir d’une maquette en HTML et CSS.',
    fullDescription:
      'Projet de transformation de maquette en interface web responsive avec une attention portée à la structure HTML, à la mise en page CSS et à l’adaptation desktop/mobile.',
    recruiterHighlight:
      'Ce projet montre ma capacité à intégrer une maquette proprement, à structurer une page web et à produire un rendu responsive fidèle.',
    work: [
      'Intégration de la maquette en HTML et CSS',
      'Mise en place d’une structure de page claire et sémantique',
      'Adaptation responsive pour différents formats d’écran',
      'Respect visuel de la maquette fournie',
    ],
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
    image: '/projects/fisheye.webp',
    shortDescription:
      'Création d’un site accessible pour une plateforme de photographes.',
    fullDescription:
      'Projet centré sur l’accessibilité front-end avec navigation clavier, gestion des interactions et amélioration de l’expérience utilisateur sur une plateforme de photographes.',
    recruiterHighlight:
      'Ce projet met en avant ma sensibilité à l’accessibilité, à l’UX et à la qualité d’interaction sur une interface web.',
    work: [
      'Amélioration de l’accessibilité globale de l’interface',
      'Gestion de la navigation clavier',
      'Développement des interactions JavaScript',
      'Travail sur la structure sémantique et l’expérience utilisateur',
    ],
    duration: '70h',
    context: 'Projet 6 OpenClassrooms',
    skills: ['Accessibilité', 'JavaScript', 'Navigation clavier', 'Structure UI'],
    stack: ['JavaScript', 'Accessibilité', 'UI'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet06_Front-End-Fisheye.git',
    demo: '',
  },
  {
    id: 'sportsee',
    title: 'SportSee',
    image: '/projects/sportsee.webp',
    shortDescription:
      'Développement d’un tableau de bord analytics avec React et visualisation de données.',
    fullDescription:
      'Application front-end développée avec React pour afficher des données utilisateurs sous forme de graphiques. Ce projet met en avant la consommation de données, la structuration de composants et la visualisation.',
    recruiterHighlight:
      'Ce projet montre ma capacité à construire une interface React modulaire, à exploiter des données et à les restituer de manière lisible.',
    work: [
      'Développement d’une interface React orientée composants',
      'Affichage dynamique de données utilisateurs',
      'Mise en place de graphiques lisibles',
      'Organisation du code pour faciliter la maintenance',
    ],
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
    image: '/projects/argentbank.webp',
    shortDescription:
      'Application bancaire React avec authentification et gestion de compte utilisateur.',
    fullDescription:
      'Projet React basé sur l’utilisation d’une API pour gérer l’authentification d’un utilisateur et l’affichage de ses informations bancaires, avec une logique de navigation et de gestion d’état.',
    recruiterHighlight:
      'Ce projet illustre ma capacité à travailler avec une API, gérer l’authentification et structurer une application React orientée utilisateur.',
    work: [
      'Intégration du front-end en React',
      'Connexion à une API pour l’authentification',
      'Gestion des données utilisateur',
      'Organisation de l’application autour des routes et composants',
    ],
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
    image: '/projects/hrnet.webp',
    shortDescription:
      'Migration d’une application jQuery vers React avec création d’un composant réutilisable.',
    fullDescription:
      'Projet de refonte front-end consistant à migrer une application existante de jQuery vers React tout en améliorant l’organisation du code et en publiant un composant réutilisable.',
    recruiterHighlight:
      'Ce projet montre ma capacité à refactoriser, moderniser une base existante et produire un code plus modulaire et maintenable.',
    work: [
      'Migration d’une application existante vers React',
      'Refactor du code pour améliorer la maintenabilité',
      'Création d’un composant réutilisable',
      'Amélioration de la structure et de la lisibilité du projet',
    ],
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
  {
    id: 'handifun',
    title: 'HandiFun',
    image: '/projects/handifun.webp',
    shortDescription:
      'Création en équipe d’un site vitrine WordPress accessible pour une association proposant des activités de loisir à des personnes en situation de handicap.',
    fullDescription:
      'Projet collectif réalisé autour de WordPress pour concevoir un site associatif accessible, clair et évolutif. L’objectif était de donner de la visibilité à l’association, faciliter la diffusion d’informations, encourager les adhésions, attirer des bénévoles et préparer une future évolution vers des dons en ligne. Le projet a combiné personnalisation du thème, intégration front-end, adaptation de pages clés et mise en place d’extensions utiles à l’accessibilité et au parcours utilisateur.',
    recruiterHighlight:
      'Ce projet met en avant ma capacité à travailler en équipe sur un CMS, à personnaliser un site WordPress, à améliorer l’accessibilité et à répondre à un besoin concret d’association avec une logique orientée utilisateur.',
    work: [
      'Participation à la conception et à la réalisation d’un site vitrine WordPress en équipe',
      'Ajout d’un moteur de recherche personnalisé via header.php, searchform.php et search.php',
      'Création et intégration de pages utiles au parcours utilisateur : Contact, Don, Plan du site et page 404',
      'Utilisation et paramétrage d’extensions WordPress comme Ninja Forms, WP Sitemap Page et des outils d’accessibilité',
      'Adaptation du style avec Sass/CSS pour harmoniser le rendu avec la charte du site',
      'Contribution à la mise en ligne et à l’amélioration globale de l’expérience utilisateur',
    ],
    duration: '2 mois',
    context: 'Projet collectif Integra11y',
    skills: [
      'WordPress',
      'Travail en équipe',
      'Accessibilité web',
      'Personnalisation de thème',
      'Structure de contenu',
      'Intégration front-end',
    ],
    stack: ['WordPress', 'PHP', 'SCSS', 'jQuery', 'Accessibilité'],
    github: 'https://github.com/Integra11y-Session-2/projet-handisport.git',
    demo: '',
  },
]

export default projects