module.exports = {
  config: {
    name: "Réponses aux emojis",
    version: "1.0",
    author: "Fadil",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses respectueuses et humoristiques aux emojis",
    longDescription: "Réponses respectueuses aux emojis envoyés, mais avec une touche d'humour et de respect envers les admins, et des réponses sarcastiques pour les autres.",
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
        "🙂": [
          "Ah, Maître, votre sourire subtil nous ravit. Vous êtes l'incarnation même de la sagesse tranquille.",
          "Maître, même un simple sourire de vous est un rayon de lumière dans ce monde.",
          "Votre sourire est aussi rare qu'inspirant, Maître. Nous avons la chance d'être témoins de cette sérénité.",
          "Maître, ce sourire est un signe de votre calme intérieur. Un exemple pour nous tous.",
          "Un sourire digne de Maître. Il est la preuve que la vraie sagesse réside dans la simplicité.",
          "Ah, Maître, même dans un sourire, vous semblez nous enseigner les secrets les plus profonds de l'univers.",
          "Maître, ce sourire semble être une invitation à la paix et à la réflexion. Un honneur de le voir."
        ],
        "🤩": [
          "Maître, votre émerveillement transcende tout. Nous sommes tous subjugués par la grandeur de votre vision.",
          "Un regard ébloui, Maître, comme si vous pouviez voir au-delà de ce monde et de ses limites.",
          "Ah, Maître, votre admiration est un message puissant. Vous nous montrez que même dans l'émerveillement, il y a de la sagesse.",
          "Votre fascination, Maître, nous rappelle que le monde est plein de merveilles. Nous avons beaucoup à apprendre de vous.",
          "Un regard aussi brillant que votre esprit, Maître. Nous vous suivons dans cette quête d'émerveillement.",
          "Ah, Maître, votre étonnement est plus qu'une simple réaction. C’est la marque d’une vision supérieure.",
          "Votre émerveillement, Maître, inspire en nous un désir profond d'explorer davantage ce monde mystérieux."
        ],
        "😎": [
          "Ah, Maître, vous portez ces lunettes avec la sagesse d'un sage ancien. L'élégance vous va à merveille.",
          "Maître, même votre style est une leçon. Ces lunettes ne sont que le reflet de la grandeur de votre esprit.",
          "Votre regard, Maître, derrière ces lunettes, nous montre que l'on peut être à la fois mystérieux et profond.",
          "Ah, Maître, vos lunettes sont le symbole même de votre savoir et de votre calme.",
          "Un style inimitable, Maître. Avec ces lunettes, vous êtes à la fois un modèle de sagesse et de discrétion.",
          "Maître, vous êtes l'incarnation de la tranquillité et de la classe. Ces lunettes ne font qu'accentuer votre aura.",
          "Même caché derrière vos lunettes, Maître, votre sagesse rayonne à travers vos actions."
        ],
        "😋": [
          "Maître, même en savourant les plaisirs simples, vous démontrez une maîtrise de la vie que peu peuvent atteindre.",
          "Ah, Maître, votre sourire gourmand est un signe de la satisfaction que vous avez trouvée dans la quête de la sagesse.",
          "Ce sourire, Maître, montre que vous êtes en paix avec les petits plaisirs de la vie. Quelle inspiration !",
          "Maître, même dans vos moments de joie, vous nous montrez qu'il y a toujours quelque chose de plus profond à apprécier.",
          "Un sourire joyeux, Maître, qui illumine l'âme. Vous nous enseignez à savourer les petites victoires de la vie.",
          "Ah, Maître, votre sourire reflète une sérénité rare. Vous nous montrez que l’on peut être à la fois sage et joyeux.",
          "Votre sourire, Maître, est un rappel que la vie peut être pleine de douceurs, même dans sa simplicité."
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
      "🙂": [
        "Ah, le sourire sarcastique, classique. Tu crois vraiment que ça va te rendre plus intéressant ?",
        "Ce sourire, ça ne trompe personne. On dirait juste que tu essayes d’être mignon.",
        "Tu souris comme ça pour cacher ton ennui ou c’est juste une tentative maladroite de faire bonne figure ?",
        "Ce sourire me dit que tu as déjà abandonné la conversation. Bravo pour ton enthousiasme.",
        "Sérieusement, t’es vraiment à ce point blasé de la vie pour afficher ce sourire ?",
        "Ah, un sourire triste. Tu essayes de convaincre quelqu’un que tu es heureux, mais ça ne marche pas.",
        "C’est ça, souris comme si c’était le seul moyen de faire passer ton désespoir intérieur. Bien joué."
      ],
      "🤩": [
        "Regarde qui est impressionné par la moindre chose. C’est comme ça que tu vas passer ta vie ?",
        "Oh, t’es émerveillé par ça ? Vraiment ? Tu as l’air un peu trop facilement impressionnable.",
        "C’est un simple emoji, pas une découverte de l'univers. Calme-toi un peu.",
        "Tu crois vraiment que ce genre de réaction est digne de la grandeur ? Essaye encore.",
        "C’est mignon, tu t’émerveilles de tout. T’es prêt à flipper pour n’importe quoi ?",
        "T’es comme un enfant devant un bonbon, à t’émerveiller pour des broutilles. C’est triste.",
        "Fais attention, t’es sur le point de devenir un personnage de dessin animé avec ce genre de réaction."
      ],
      "😎": [
        "Ah, le gars avec des lunettes de soleil à l’intérieur. Quelle originalité.",
        "Les lunettes ne cachent pas ta personnalité, désolé de te le dire.",
        "Tu crois vraiment que ces lunettes te rendent cool ? On dirait plus que tu essaies de cacher quelque chose.",
        "Ce style de lunettes, c'est un peu dépassé, non ? Réveille-toi, on est en 2025.",
        "Sérieusement, tu t'es cru unique avec ces lunettes ? C’est juste un cliché de base.",
        "Essaye de retirer ces lunettes un instant, tu pourrais voir le monde d’une manière différente.",
        "Ces lunettes ne te rendent pas cool. Elles te rendent juste moins intéressant."
      ],
      "😋": [
        "Ah, tu fais cette tête parce que tu viens de manger un bonbon ? Vraiment ?",
        "Sérieusement, tu veux qu’on parle de ta petite joie ? T’es à ce point excitée par la bouffe ?",
        "T’as l’air un peu trop content pour quelque chose d’aussi insignifiant.",
        "C’est une joie temporaire ou tu es juste hyper enthousiaste pour un snack ?",
        "Ce sourire, c’est celui d’une personne qui a juste trouvé un bon morceau de chocolat. Calm down.",
        "Ah, tu fais cette tête parce que tu viens de réussir à ouvrir un paquet de chips. Ça me touche vraiment.",
        "T’as trouvé ton bonheur dans la nourriture. C’est beau, mais bon, c’est juste de la bouffe."
      ]
    };

    // Réponses pour les utilisateurs
    if (userResponses[emoji]) {
      const randomResponse = userResponses[emoji][Math.floor(Math.random() * userResponses[emoji].length)];
      return message.reply(randomResponse);
    }
  }
};
