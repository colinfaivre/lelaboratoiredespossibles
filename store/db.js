const vue = {
    name: "vue",
    url: "https://vuejs.org/",
}
const nuxt = {
    name: "nuxt",
    url: "https://fr.nuxtjs.org/",
}
const sass = {
    name: "sass",
    url: "https://sass-lang.com/",
}
const firebase = {
    name: "firebase",
    url: "https://firebase.google.com/",
}
const javascript = {
    name: "javascript",
    url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
}
const material = {
    name: "material",
    url: "https://material.io/design/",
}
const pwa = {
    name: "pwa",
    url: "https://developers.google.com/web/progressive-web-apps",
}
const vuetify = {
    name: "vuetify",
    url: "https://vuetifyjs.com/en/",
}
const typescript = {
    name: "typescript",
    url: "https://www.typescriptlang.org/",
}
const buefy = {
    name: "buefy",
    url: "https://buefy.org/documentation/dropdown/",
}
const node = {
    name: "node",
    url: "https://nodejs.org/en/",
}
const laravel = {
    name: "laravel",
    url: "https://laravel.com/",
}
const htmlCss = {
    name: "htmlCss",
    url: "https://developer.mozilla.org/fr/docs/Web/HTML"
}
const webAssembly = {
    name: "webAssembly",
    url: "https://webassembly.org/",
}

const technos = {
    vue: {
        name: "vue",
        url: "https://vuejs.org/",
        description: "",
    },
    nuxt: {
        name: "nuxt",
        url: "https://fr.nuxtjs.org/",
        description: "",
    },
    sass: {
        name: "sass",
        url: "https://sass-lang.com/",
        description: "",
    },
    firebase: {
        name: "firebase",
        url: "https://firebase.google.com/",
        description: "",
    },
    javascript: {
        name: "javascript",
        url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        description: "",
    },
    material: {
        name: "material",
        url: "https://material.io/design/",
        description: "",
    },
    pwa: {
        name: "pwa",
        url: "https://developers.google.com/web/progressive-web-apps",
        description: "",
    },
    vuetify: {
        name: "vuetify",
        url: "https://vuetifyjs.com/en/",
        description: "",
    },
    typescript: {
        name: "typescript",
        url: "https://www.typescriptlang.org/",
        description: "",
    },
    buefy: {
        name: "buefy",
        url: "https://buefy.org/documentation/dropdown/",
        description: "",
    },
}

const categories = [
    {
        id: "pro",
        name: "Projets professionnels",
        description: `
            Je travaille au développement d'applications web, back-offices et sites vitrines pour le compte d'agences web, startups et particuliers. Les principales technologies utilisées sont vue.js, nuxt et vuetify pour créer des applications web progressives respectant les normes du material design.
        `
    },
    {
        id: "perso",
        name: "Projets personnels",
        description: `
            J'ai appris en autodidacte à développer des sites web avec l'envie de donner vie à mes projets artistiques Colin Faivre et Sourire Panique autant qu'à l'association Sémaphore qui m'a offert un soutien inconditionnel.
        `
    },
    {
        id: "game",
        name: "Jeux",
        description: `
            Développer pour le plaisir de créer, donner vie aux jeux qui ont accompagné mon enfance.
            Un moyen sans pareil pour continuer d'apprendre le métier.
        `,
    },
    {
        id: "clone",
        name: "Clones",
        description: `
            J'ai une passion secrète pour la reproduction d'applications bien connues.
            Pour continuer d'apprendre et me lancer des défis techniques.
        `,
    },
    {
        id: "ar",
        name: "Réalité augmentée",
        // description: `
        //     Expérimenter, tester, essayer, reproduire, recommencer. Quand la technologie s'invite au
        //     frontières du réel :)
        // `
    },
    {
        id: "wot",
        name: "Objects connectés",
        // description: `
        //     Expérimenter, tester, essayer, reproduire, recommencer. Quand la technologie s'invite au
        //     frontières du réel :)
        // `
    },
]

const projects = [
    // Projets pros
    {
        screenshot: "vetolib.png",
        title: "vetolib.fr",
        subtitle: "Application web - Prise de rdv",
        text: `
            Participation au développement du front de https://vetolib.fr et de son back-office.
            Une application web de prise de rendez-vous coté client et de gestion d'agenda côté vétérinaire.
        `,
        technos: [vue, vuetify, sass, typescript],
        category: "pro",
        year: 2020,
        githubLink: null,
        webLink: "http://vetolib.fr",
        customer: {
            type: "Vetolib",
            location: "Paris",
            duration: 4,
            logo: "vetolib.png",
            color: "#12204B",
            colorLight: "#24366C",
        }
    },
    {
        screenshot: "psycho.jpg",
        title: "jeanyvesgauthier.com",
        subtitle: "Site vitrine - Psychanalyste",
        text: `
            Développement d'une progressive web app pour le site vitrine d'un psychanalyste.
            L'app propose à l'utilisateur de l'installer sur l'écran d'accueil de son smartphone et elle est ensuite utilisable sans réseau.
        `,
        technos: [vue, nuxt, sass, firebase, pwa],
        category: "pro",
        year: 2020,
        githubLink: null,
        webLink: "http://jeanyves-gauthier-psychanalyste.com",
        customer: {
            type: "Jean-Yves Gauthier",
            location: "Limoges",
            duration: 1,
            logo: "jeanyves.png",
            color: "#303131",
            colorLight: "#494b4b",
        }
    },
    {
        screenshot: "sapiendo.png",
        title: "Sapiendo",
        subtitle: "Back Office - Site conseil retraite",
        text: `
            Participation au développement du front de l'espace admin  d'un site spécialisé dans le calcul de retraite réalisé sous Laravel.
            Intégration du front du site client.
        `,
        technos: [vue, vuetify, sass, material],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://www.web-id.fr/",
        customer: {
            name: "WebId",
            type: "Agence web",
            location: "Lyon",
            duration: 4,
            logo: "webId.png",
            color: "#301a44",
            colorLight: "#482768",
        }
    },
    {
        screenshot: "barnaby.jpg",
        title: "Barnaby",
        subtitle: "Barnaby - Commande de boissons",
        text: `
            Création d'un application web pour permettre à l'utilisateur de commander ses boissons depuis sa table en scannant un QR code avec son smartphone.
        `,
        technos: [vue, nuxt, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://barnaby.club/",
        customer: {
            name: "Barnaby",
            type: "Startup",
            location: "Bruxelles",
            duration: 1,
            logo: "barnaby.png",
            color: "#6273f6",
            colorLight: "#909cf9",
        }
    },
    {
        screenshot: "novaccess.png",
        title: "Novaccess",
        subtitle: "Novaccess - Ouverture de portails",
        text: `
            Développement du back-office d'une application permettant d'ouvrir les portes de parkings privés. Gestion des utilisateurs, de leurs droits et abonnements.
        `,
        technos: [vue, typescript, buefy, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://www.myjungly.com",
        customer: {
            name: "MyJungly",
            type: "Agence web",
            location: "Paris",
            duration: 4,
            logo: "myJungly.png",
            color: "#171717",
            colorLight: "#303030",
        }
    },
    {
        screenshot: "glifter.png",
        title: "Glifter",
        subtitle: "Glifter - Gestion d'articles",
        text: `
            Participation au développement du back-office de Glifter. Agrégateur de sources d’informations pour produire et partager des articles. Outil d'édition d'articles se rapprochant de celui de l'application Medium.
        `,
        technos: [javascript, vue, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://www.myjungly.com",
        customer: {
            name: "MyJungly",
            type: "Agence web",
            location: "Paris",
            duration: 3,
            logo: "myJungly.png",
            color: "#171717",
            colorLight: "#303030",
        }
    },
    {
        screenshot: "axiom.png",
        title: "Axiom",
        subtitle: "Axiom - Outil de communication",
        text: `
            Participation au développement du back-office d'AXIOM.
            Une application desktop construite avec NW.js permettant de gérer son réseau,
            sécuriser ses échanges et certifier ses documents.
        `,
        technos: [javascript, vue, sass],
        category: "pro",
        year: 2018,
        githubLink: null,
        webLink: "https://antiopea.com/",
        customer: {
            name: "Antiopea",
            type: "Startup",
            location: "Paris",
            duration: 1,
            logo: "antiopea.png",
            color: "#7c40a3",
            colorLight: "#965abf",
        }
    },
    {
        screenshot: "optiquebeaubreuil.png",
        title: "Optique Beaubreuil",
        subtitle: "Site vitrine - Opticien",
        text: `
            Réalisation d'une application web vitrine en vue.js pour présenter les boutiques d'un opticien.
            Espace d'administration de contenus réalisé avec express.js.
        `,
        technos: [javascript, vue, node],
        category: "pro",
        year: 2018,
        githubLink: null,
        customer: {
            type: "Optique Beaubreuil",
            location: "Limoges",
            duration: 1,
            logo: "optique-beaubreuil.png",
            color: "#12232e",
            colorLight: "#214054",
        }
    },
    {
        screenshot: "optiqueduhameau.png",
        title: "Optique du Hameau",
        subtitle: "Site vitrine - Opticien",
        text: `
            Réalisation d'une application web vitrine en vue.js pour présenter les boutiques d'un opticien.
            Espace d'administration de contenus réalisé avec express.js.
        `,
        technos: [javascript, vue, node],
        category: "pro",
        year: 2018,
        githubLink: null,
        customer: {
            type: "Optique du hameau",
            location: "Limoges",
            duration: 1,
            logo: "optique-du-hameau.png",
            color: "#221b17",
            colorLight: "#40332b",
        }
    },
    {
        screenshot: "marialagoutte.png",
        title: "Maria la goutte",
        subtitle: "Site vitrine - Artiste",
        text: `
            Développement d'un site web pour présenter l'activité artistique de Maria la goutte. Développement d'un espace d'administration sur mesure avec Laravel.
        `,
        technos: [javascript, htmlCss, laravel],
        category: "pro",
        year: 2017,
        githubLink: null,
        webLink: null,
        customer: {
            type: "Maria la goutte",
            location: "Limoges",
            duration: 1,
            logo: "marialagoutte.png",
            color: "#404040",
            colorLight: "#464646",
        }
    },

    // Projets persos
    {
        screenshot: "labo.jpg",
        title: "Le laboratoire des possibles",
        subtitle: "Site vitrine - Developpeur",
        text: `
            Réalisation d'un application web vitrine pour présenter les projets de développement du Laboratoire des possibles.
            Progressive web app développée en vue.js avec nuxt et respectant les normes du Material design.
        `,
        technos: [vue, nuxt, vuetify, sass, firebase, pwa],
        category: "perso",
        year: 2020,
        githubLink: "https://github.com/colinfaivre/LeLaboratoireDesPossibles",
        webLink: "https://lelaboratoiredespossibles.com",
        customer: {
            type: "Le laboratoire des possibles",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "colinfaivre.jpeg",
        title: "colinfaivre.com",
        subtitle: "Site vitrine - Artiste",
        text: `
            Réalisation d'un site vitrine pour présenter l'activité de Colin Faivre, un artiste expérimental.
        `,
        technos: [javascript, htmlCss],
        category: "perso",
        year: 2017,
        githubLink: null,
        webLink: "https://colinfaivre.com",
        customer: {
            type: "colinfaivre.com",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "sourirepanique.jpeg",
        title: "sourirepanique.com",
        subtitle: "Site vitrine - Groupe",
        text: `
            Réalisation d'un site vitrine pour présenter le groupe Sourire Panique, un duo banjo / batterie hors du commun.
            Collaboration avec Gaëlle Maas, illustratrice.
        `,
        technos: [javascript, htmlCss],
        category: "perso",
        year: 2017,
        githubLink: null,
        webLink: "https://sourirepanique.com",
        customer: {
            type: "sourirepanique.com",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "semaphore.jpeg",
        title: "Sémaphore",
        subtitle: "Plateforme - Artistes",
        text: `
            Réalisation d'un site pour l'association Sémaphore. Mise en relation d'artistes avec les services de l'association.
        `,
        technos: [javascript, htmlCss],
        category: "perso",
        year: 2017,
        githubLink: null,
        webLink: null,
        customer: {
            type: "semaphore.com",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },

    // Games
    {
        screenshot: "vue-chess.png",
        title: "Vue chess",
        subtitle: "Jeu d'échec",
        text: `
            Réalisation d'une application de jeu d'échec utilisant la librairie stockfish.js en webassembly.
        `,
        technos: [vue, webAssembly, vuetify, typescript],
        category: "game",
        year: 2020,
        githubLink: "https://github.com/colinfaivre/vue-chess",
        webLink: null,
        customer: {
            type: "Vue chess",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "asteroid.png",
        title: "Vanilla JS Asteroid",
        subtitle: "Arcade game",
        text: `
            "Space War" est l'un des premiers jeux vidéo créés au MIT en 1961. Accompagné du livre "Introducing avascript game development", j'en ai développé une version personnelle.
        `,
        technos: [javascript, htmlCss],
        category: "game",
        year: 2019,
        githubLink: null,
        webLink: null,
        bookLink: "https://www.apress.com/gp/book/9781484232514",
        customer: {
            type: "Vanilla JS Asteroid",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "tetris.png",
        title: "Vue.js Tetris",
        subtitle: "Tetris game",
        text: `
            Au cours d'une formation JS, il était demandé de contribuer à un projet sur github.
            J'ai forké un projet de Tetris créé en vue.js et j'ai proposé des améliorations au niveau de l'interface utilisateur.
        `,
        technos: [vue, javascript],
        category: "game",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/vue-tetris",
        webLink: null,
        customer: {
            type: "Tetris en vue.js",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "elevator.png",
        title: "Vanilla JS - Elevators",
        subtitle: "Simulation d'ascenseurs",
        text: `
            Une simulation reproduisant la logique d'un immeuble avec des boutons d'appel d'ascenseur à chaque étage
            et deux ascenseurs.
        `,
        technos: [javascript, htmlCss],
        category: "game",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/VanillaJs-Elevators",
        webLink: null,
        customer: {
            type: "Simulation d'ascenceurs",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },

    // Clones
    {
        screenshot: "trelloclone.png",
        title: "Un clone de Trello",
        subtitle: "Un clone de Trello",
        text: "Réalisation d'un clone de l'application Trello. Création de tableaux, listes et cartes. Utilisation de l'API Drag and Drop. FireStore est utilisé pour stocker les données.",
        technos: [vue, javascript, firebase],
        category: "clone",
        year: 2020,
        githubLink: null,
        webLink: null,
        customer: {
            type: "Tableaux",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "gmailclone.png",
        title: "Le Gmail de Chuck Norris",
        subtitle: "Un clone de Gmail",
        text: "Réalisation d'un clone de l'application Gmail. La boite mail se remplit de citations de Chuck Norris. Il est possible de placer des emails dans la corbeille ou dans les favoris.",
        technos: [vue, javascript, material],
        category: "clone",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/ChuckNorris-gmail",
        webLink: null,
        customer: {
            type: "Clone de Gmail",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "slackclone.png",
        title: "Un clone de Slack",
        subtitle: "Un clone de Slack",
        text: "Réalisation d'un clone de l'application Slack. On peut créer des channels et ajouter des interlocuteurs, personne ne viendra vous déranger ...",
        technos: [vue, javascript],
        category: "clone",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/slack-clone",
        webLink: "https://slack-clone-db2d2.web.app/create-channel",
        customer: {
            type: "Clone de Slack",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },

    // Augmented reality
    {
        screenshot: "aframe.png",
        title: "GIF augmenté",
        subtitle: "Un projet pour tester ar.js et le framemork 3D A-frame",
        text: "Une application pour placer un GIF en réalité augmenté sur un marqueur préalablement imprimé sur une feuille de papier. Simple et efficace pour refaire la déco du bureau !",
        technos: [javascript, htmlCss],
        category: "ar",
        year: 2020,
        githubLink: null,
        webLink: null,
        customer: {
            type: "Le laboratoire des possibles",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },
    {
        screenshot: "aframe.png",
        title: "Montgolfière augmentée",
        subtitle: "Un projet pour tester A-frame",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, htmlCss],
        category: "ar",
        year: 2020,
        githubLink: null,
        webLink: null,
        customer: {
            type: "Le laboratoire des possibles",
            logo: "labo.png",
            color: "#1E1E1E",
            colorLight: "#383838",
        }
    },

    // Web of things
    // {
    //     screenshot: "wot.png",
    //     title: "Web of things",
    //     subtitle: "Un projet d'objet connecté",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     technos: [javascript],
    //     category: "wot",
    //     year: 2019,
    //     githubLink: null,
    //     webLink: null,
    // customer: {
    //     type: "Le laboratoire des possibles",
    //     logo: "labo.png",
    //     color: "#1E1E1E",
    //     colorLight: "#383838",
    // }
    // },
    // {
    //     screenshot: "wot.png",
    //     title: "Web of things",
    //     subtitle: "Un projet d'objet connecté",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     technos: [javascript],
    //     category: "wot",
    //     year: 2019,
    //     githubLink: null,
    //     webLink: null,
    // customer: {
    //     type: "Le laboratoire des possibles",
    //     logo: "labo.png",
    //     color: "#1E1E1E",
    //     colorLight: "#383838",
    // }
    // },
]

export const db = {
    projects,
    categories,
    technos,
}
