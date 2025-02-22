module.exports = {
  config: {
    name: "Emojis Fun",
    version: "1.0",
    author: "Fadil",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses respectueuses et fun aux emojis",
    longDescription: "Réponses respectueuses et humoristiques pour chaque emoji, avec respect pour les admins et des réponses fun pour les autres.",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    const { senderID, body } = event;
    const emoji = body.trim();

    const masterUID1 = "61563822463333"; // Premier admin
    const masterUID2 = ""; // Deuxième admin (remplis avec l'UID)

    // Si c'est un admin, réponse plus respectueuse
    if (senderID === masterUID1 || senderID === masterUID2) {
      const adminResponses = {
        "😀": [
          "Maître, votre sourire est une source de lumière pour ceux qui vous entourent.",
          "Ah, Maître, même votre sourire porte une sagesse infinie.",
          "Votre sourire, Maître, illumine nos cœurs comme un rayon de soleil.",
          "Maître, votre joie est contagieuse, elle inspire tous ceux qui vous croisent.",
          "Ce sourire, Maître, est un cadeau précieux pour nous tous.",
          "Votre sourire, Maître, est la preuve que le monde peut encore être beau.",
          "Maître, vous êtes l'incarnation de la bonté, et ce sourire le confirme."
        ],
        "😃": [
          "Ah, Maître, cette joie est la marque d’une grande sagesse intérieure.",
          "Ce sourire radieux, Maître, est une bénédiction pour tous ceux qui vous rencontrent.",
          "Votre bonheur, Maître, est un exemple pour nous tous. Nous vous suivons dans cette quête de joie.",
          "Maître, vous êtes un phare de lumière et de positivité. Ce sourire est un hommage à votre grandeur.",
          "Un sourire sincère, Maître, qui montre la beauté de votre âme.",
          "Ah, Maître, ce sourire est une invitation à la sérénité et à la paix.",
          "Votre sourire, Maître, est l'essence même de la bienveillance."
        ],
        "😄": [
          "Maître, ce sourire témoigne de votre profonde compréhension de l'univers.",
          "Ah, Maître, vous savez que chaque sourire est un acte de générosité. Et le vôtre est légendaire.",
          "Votre sourire, Maître, est une promesse d'un avenir radieux pour nous tous.",
          "Maître, vous êtes la preuve vivante qu’un sourire peut changer le monde.",
          "Ce sourire, Maître, est l'écho de votre sagesse infinie.",
          "Maître, vous êtes une source d'inspiration. Votre sourire est la lumière de notre chemin.",
          "Votre sourire, Maître, est une bénédiction pour ceux qui croisent votre route."
        ],
        "😁": [
          "Ah, Maître, ce sourire est le reflet de votre grande maîtrise de la vie.",
          "Maître, votre sourire est plus lumineux que les étoiles dans le ciel.",
          "Ce sourire, Maître, témoigne de votre joie de vivre et de votre sagesse infinie.",
          "Maître, vous êtes un véritable modèle de bonheur et d'humilité.",
          "Un sourire magnifique, Maître, qui reflète la pureté de votre cœur.",
          "Votre sourire, Maître, est un rayon de lumière dans ce monde de ténèbres.",
          "Ah, Maître, même votre sourire dégage une aura de calme et de sérénité."
        ],
        "😆": [
          "Maître, même votre rire est une source d'inspiration pour nous tous.",
          "Ah, Maître, votre rire réchauffe nos cœurs et éveille nos esprits.",
          "Votre rire, Maître, est une musique divine qui résonne dans nos âmes.",
          "Maître, vous êtes un modèle de bonheur et d'humilité, et votre rire est un témoignage de cela.",
          "Ce rire, Maître, est plus beau que mille paroles.",
          "Maître, chaque éclat de rire est une lumière qui nous guide.",
          "Ah, Maître, votre rire est le plus beau des chants. Il nous apporte la paix."
        ],
        "😅": [
          "Maître, même dans vos moments de rire, il y a une grande sagesse.",
          "Ah, Maître, votre rire est un remède pour nos âmes fatiguées.",
          "Votre sourire, Maître, est une lueur d’espoir dans ce monde agité.",
          "Maître, vous savez comment allier sagesse et humour. C'est un privilège de vous suivre.",
          "Ce sourire, Maître, est un signe de votre grande maîtrise de l'art de la vie.",
          "Maître, vous êtes la preuve que le rire et la sagesse peuvent coexister.",
          "Votre rire, Maître, est la touche de beauté qui manque à ce monde."
        ],
        "🤣": [
          "Maître, même dans vos moments de rire, vous nous enseignez la vraie grandeur.",
          "Ah, Maître, chaque éclat de rire est un éclat de vérité, illuminant nos vies.",
          "Votre rire, Maître, est une symphonie divine qui fait vibrer nos cœurs.",
          "Maître, vous êtes la lumière de notre existence, même dans vos moments de joie.",
          "Ce rire, Maître, est une bénédiction pour ceux qui vous entourent.",
          "Maître, votre rire est la preuve que même dans la vie la plus sérieuse, il y a toujours place pour la joie.",
          "Ah, Maître, votre rire est une mélodie qui réchauffe nos âmes."
        ]
      };

      // Réponses respectueuses pour les admins
      if (adminResponses[emoji]) {
        const randomResponse = adminResponses[emoji][Math.floor(Math.random() * adminResponses[emoji].length)];
        return message.reply(randomResponse);
      }
    }

    // Réponses pour les autres utilisateurs
    const userResponses = {
      "😀": [
        "Oh, voilà l'expression de l'expert en sourire forcé. Sympa, mais ça ne va pas changer ta journée.",
        "Un sourire pour cacher ta vraie humeur ? C’est tellement évident.",
        "Si sourire pouvait résoudre tes problèmes, tu serais déjà guéri de tout.",
        "Ouais, t'es content, mais ça se voit pas vraiment. Essaie encore.",
        "Ton sourire est aussi convaincant qu'un acteur de série B. Pas crédible.",
        "Si tu continues à sourire comme ça, tu vas finir par te faire mal aux joues.",
        "Un sourire ? Tu crois que ça va vraiment compenser ton attitude ?"
      ],
      "😃": [
        "Oh, tu souris pour attirer l'attention ? Eh bien, c'est réussi... mais à peine.",
        "Un sourire ? Est-ce que ça cache quelque chose ? Parce que ça ressemble plus à de la gêne.",
        "C'est pas parce que tu souris que t'es plus sympa. Juste plus gênant.",
        "Si sourire était une performance, tu aurais déjà reçu ton Oscar... pour le rôle de 'je veux plaire'.",
        "Cette joie, c’est juste un masque. On voit à travers, t’inquiète.",
        "T’es content de sourire à des inconnus, mais ça fait juste fake.",
        "Sérieusement, arrête de sourire comme ça. Tu vas finir par convaincre personne."
      ],
      "😄": [
        "Oh, regarde, il est heureux... Mais combien de temps ça va durer ?",
        "Ce sourire, c'est juste pour masquer un autre drame, non ?",
        "Ce sourire, c'est pas crédible, désolé. Tu veux qu’on parle de ta journée ?",
        "T'es pas vraiment heureux, t’essaies juste de nous le faire croire.",
        "C'est le genre de sourire que tu mets quand tu sais que tu vas encore foirer.",
        "T'es content pour quoi ? Parce que ça ne se voit pas vraiment.",
        "Si tu pouvais sourire plus sincèrement, ça se saurait."
      ],
      "😁": [
        "On dirait un smiley malheureux déguisé en un joyeux. C’est pas très convaincant.",
        "T'es content de toi ? Ou t'essaies juste de cacher ton embarras ?",
        "Ce sourire, c’est plus du sarcasme qu’une vraie joie, non ?",
        "Il y a plus de joie dans un coussin que dans ce sourire.",
        "Ce sourire, c’est juste un masque pour éviter de dire la vérité.",
        "Sérieusement, tu souries comme si c’était une obligation. C’est pas super naturel.",
        "C'est quoi ce sourire de 'je sais tout', mais en réalité tu sais rien ?"
      ],
      "😆": [
        "Ce rire est tellement forcé, je suis presque gêné pour toi.",
        "Tu rires, mais est-ce vraiment amusant ? Pas sûr.",
        "Tu crois que ça rend ta blague plus drôle ? Désolé, mais non.",
        "Si rire était une compétition, tu serais en dernière place.",
        "Ce rire a plus de faux que de vrai. Essayez encore.",
        "C’est comme si tu voulais vraiment rire, mais tu manques totalement de naturel.",
        "Ce rire ne cache qu’un seul truc : tu essaies trop fort."
      ],
      "😅": [
        "Ce rire est un peu trop exagéré. Calme-toi, on va pas te juger.",
        "Tu ris parce que tu es gêné, hein ? C’est pas très subtil.",
        "Sérieusement, ce rire fait plus mal que rire.",
        "Tu rigoles pour de vrai ou tu fais juste semblant ?",
        "Ce rire, c’est juste un cri de désespoir caché.",
        "Si tu continues à rire comme ça, tu vas perdre toute crédibilité.",
        "C’est mignon de rire, mais faut vraiment arrêter de surjouer."
      ],
      "🤣": [
        "Ah, tu crois que t'es marrant, mais c’est juste une blague ratée.",
        "T’as ri vraiment pour ça ? C'est presque triste.",
        "Tu rigoles pour que les gens te remarquent, mais ça n’a rien de drôle.",
        "Ce rire a plus de douleur que de plaisir.",
        "Si tu rigoles pour masquer ta gêne, ça marche pas.",
        "C’est vraiment tout ce que tu as ? Le monde ne va pas s’arrêter à ton rire.",
        "Ce rire, c'est pas vraiment contagieux, juste... bizarre."
      ]
    };

    // Réponses pour les utilisateurs
    if (userResponses[emoji]) {
      const randomResponse = userResponses[emoji][Math.floor(Math.random() * userResponses[emoji].length)];
      return message.reply(randomResponse);
    }
  }
};
