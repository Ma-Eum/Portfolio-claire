// Source de données centralisée du portfolio.
// Chaque projet regroupe les informations nécessaires
// pour l’affichage des cartes et des pages de détail.
//
// Cette structure permet :
// - d’éviter la duplication de contenu dans les composants
// - de garder une base cohérente et facile à maintenir
// - d’ajouter de nouveaux projets sans modifier la logique d’affichage

const projects = [
  {
    id: 'booki',
    title: 'Booki',
    image: '/projects/booki.webp',
    imageAlt:
      "Page d’accueil du projet Booki avec moteur de recherche d’hébergements et sections de présentation responsive.",
    shortDescription:
      'Intégration d’une page d’accueil responsive à partir d’une maquette en HTML et CSS.',
    fullDescription:
      'Projet d’intégration front-end consistant à transformer une maquette en interface web responsive. L’enjeu était de construire une base propre, structurée et fidèle visuellement, tout en assurant une bonne adaptation entre desktop, tablette et mobile.',
    recruiterHighlight:
      'Ce projet montre ma capacité à intégrer une maquette avec rigueur, à structurer une page de manière sémantique et à poser des bases solides en responsive design.',
    work: [
      'Intégration complète de la maquette en HTML et CSS',
      'Mise en place d’une structure de page claire et sémantique',
      'Adaptation responsive pour différents formats d’écran',
      'Respect visuel du design fourni avec une attention portée à la lisibilité',
    ],
    duration: '90 h',
    context: 'Projet 2 OpenClassrooms',
    skills: [
      'Intégration HTML/CSS',
      'Responsive design',
      'Respect d’une maquette',
      'Structure sémantique',
    ],
    stack: ['HTML', 'CSS', 'Responsive'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet02_Booki.git',
    demo: null,
  },

  {
    id: 'fisheye',
    title: 'Fisheye',
    image: '/projects/fisheye.webp',
    imageAlt:
      'Interface du projet Fisheye présentant une plateforme de photographes avec navigation accessible et galerie interactive.',
    shortDescription:
      'Création d’un site accessible pour une plateforme de photographes.',
    fullDescription:
      'Projet centré sur l’accessibilité front-end et l’expérience utilisateur. L’objectif était d’améliorer les interactions, la navigation clavier et la structure globale de l’interface afin de proposer un parcours plus inclusif sur une plateforme de photographes.',
    recruiterHighlight:
      'Ce projet met en avant ma sensibilité à l’accessibilité, à l’UX et à la qualité des interactions sur une interface web dynamique.',
    work: [
      'Amélioration de l’accessibilité globale de l’interface',
      'Gestion de la navigation clavier et des interactions associées',
      'Développement des comportements JavaScript de la galerie et du formulaire',
      'Travail sur la structure sémantique et la cohérence du parcours utilisateur',
    ],
    duration: '70 h',
    context: 'Projet 6 OpenClassrooms',
    skills: ['Accessibilité', 'JavaScript', 'Navigation clavier', 'Structure UI'],
    stack: ['JavaScript', 'Accessibilité', 'UI'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet06_Front-End-Fisheye.git',
    demo: null,
  },

  {
    id: 'sportsee',
    title: 'SportSee',
    image: '/projects/sportsee.webp',
    imageAlt:
      'Tableau de bord SportSee affichant plusieurs graphiques de suivi d’activité utilisateur développés avec React.',
    shortDescription:
      'Développement d’un tableau de bord analytics avec React et visualisation de données.',
    fullDescription:
      'Application front-end développée avec React pour afficher des données utilisateurs sous forme de graphiques. Ce projet met en avant la structuration de composants, l’exploitation de données et la restitution visuelle d’informations de manière lisible.',
    recruiterHighlight:
      'Ce projet montre ma capacité à construire une interface React modulaire, à exploiter des données et à les restituer de façon claire pour l’utilisateur.',
    work: [
      'Développement d’une interface React orientée composants réutilisables',
      'Affichage dynamique de données utilisateurs',
      'Mise en place de graphiques lisibles et compréhensibles',
      'Organisation du code pour faciliter la maintenance et l’évolution du projet',
    ],
    duration: '60 h',
    context: 'Projet 12 OpenClassrooms',
    skills: [
      'React',
      'Visualisation de données',
      'Architecture de composants',
      'Consommation de données',
    ],
    stack: ['React', 'API', 'Recharts'],
    github: 'https://github.com/Ma-Eum/SportSee.git',
    demo: null,
  },

  {
    id: 'argentbank',
    title: 'Argent Bank',
    image: '/projects/argentbank.webp',
    imageAlt:
      'Interface utilisateur du projet Argent Bank avec authentification et espace personnel bancaire.',
    shortDescription:
      'Application bancaire React avec authentification et gestion de compte utilisateur.',
    fullDescription:
      'Projet React basé sur l’utilisation d’une API pour gérer l’authentification d’un utilisateur et l’affichage de ses informations bancaires. L’application s’appuie sur une logique de navigation, de composants et de gestion d’état orientée utilisateur.',
    recruiterHighlight:
      'Ce projet illustre ma capacité à travailler avec une API, à gérer une logique d’authentification et à structurer une application React centrée sur l’utilisateur.',
    work: [
      'Intégration du front-end en React',
      'Connexion à une API pour l’authentification utilisateur',
      'Gestion et affichage des données du profil',
      'Organisation de l’application autour des routes, composants et états utiles',
    ],
    duration: '100 h',
    context: 'Projet 13 OpenClassrooms',
    skills: ['React', 'API', 'Authentification', 'Gestion d’état'],
    stack: ['React', 'API', 'Authentification'],
    github: 'https://github.com/Ma-Eum/Openclassroom-Project13-BankAPI.git',
    demo: null,
  },

  {
    id: 'hrnet',
    title: 'HRnet',
    image: '/projects/hrnet.webp',
    imageAlt:
      'Interface RH du projet HRnet migré de jQuery vers React avec formulaire et composants réutilisables.',
    shortDescription:
      'Migration d’une application jQuery vers React avec création d’un composant réutilisable.',
    fullDescription:
      'Projet de refonte front-end consistant à migrer une application existante de jQuery vers React tout en améliorant l’organisation du code. L’objectif était de moderniser la base, clarifier la structure et produire un composant réutilisable publiable.',
    recruiterHighlight:
      'Ce projet montre ma capacité à refactoriser, moderniser une base existante et produire un code plus modulaire, réutilisable et maintenable.',
    work: [
      'Migration d’une application existante de jQuery vers React',
      'Refactor du code pour améliorer la lisibilité et la maintenabilité',
      'Création d’un composant réutilisable publié séparément',
      'Amélioration globale de la structure et de l’organisation du projet',
    ],
    duration: '110 h',
    context: 'Projet 14 OpenClassrooms',
    skills: [
      'Migration jQuery vers React',
      'Refactor',
      'Composant réutilisable',
      'Performance',
    ],
    stack: ['React', 'Refactor', 'Performance'],
    github: 'https://github.com/Ma-Eum/OpenClassroom_Projet14_HRnet.git',
    demo: null,
  },

  {
    id: 'handifun',
    title: 'HandiFun',
    image: '/projects/handifun.webp',
    imageAlt:
      'Page d’accueil du projet HandiFun présentant une association inclusive avec contenus structurés et interface WordPress accessible.',
    shortDescription:
      'Création en équipe d’un site vitrine WordPress accessible pour une association proposant des activités de loisir à des personnes en situation de handicap.',
    fullDescription:
      'Projet collectif réalisé autour de WordPress pour concevoir un site associatif accessible, clair et évolutif. L’objectif était de donner de la visibilité à l’association, de faciliter la diffusion d’informations, d’encourager les adhésions, d’attirer des bénévoles et de préparer une future évolution vers des dons en ligne. Le projet a combiné personnalisation du thème, intégration front-end, adaptation de pages clés et mise en place d’extensions utiles à l’accessibilité et au parcours utilisateur.',
    recruiterHighlight:
      'Ce projet met en avant ma capacité à travailler en équipe sur un CMS, à personnaliser un site WordPress, à améliorer l’accessibilité et à répondre à un besoin concret avec une logique orientée utilisateur.',
    work: [
      'Participation à la conception et à la réalisation d’un site vitrine WordPress en équipe',
      'Ajout d’un moteur de recherche personnalisé via header.php, searchform.php et search.php',
      'Création et intégration de pages utiles au parcours utilisateur : Contact, Don, plan du site et page 404',
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
    demo: null,
  },
]

export default projects