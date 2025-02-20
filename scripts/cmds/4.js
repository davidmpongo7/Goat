module.exports = {
  config: {
    name: "4",
    version: "1.0",
    author: "L'Uchiha Perdu",
    role: 0,
    shortDescription: {
      en: "Réponses aux emojis"
    },
    longDescription: {
      en: "Répond à certains emojis avec des réponses respectueuses pour l'admin et moins respectueuses pour les autres"
    },
    category: "Fun",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event, message }) {
    const userMessage = event.body;
    const userID = event.senderID;
    const masterID = '61563822463333'; // L'ID de l'utilisateur qui doit recevoir une réponse respectueuse

    const emojis = [
      "☹️", "🥲", "😏", "😐", "😑", "☹️", "😇", "😉", "🙂", "😅", "🤣", "🥳", "🫠", "🤪", "😋"
    ];

    if (emojis.includes(userMessage)) {
      if (userID === masterID) {
        // Réponses respectueuses pour l'admin
        const repliesForMaster = {
          "☹️": [
            "Oh non maître, qu'est-ce qui ne va pas ?",
            "Maître, que puis-je faire pour vous remonter le moral ?",
            "Je suis là pour vous, maître.",
            "Ne vous inquiétez pas, maître, tout ira bien.",
            "Quelque chose vous tracasse, maître ?",
            "Ne soyez pas triste, maître.",
            "Votre bien-être est ma priorité, maître."
          ],
          "🥲": [
            "C'est triste, maître. Comment puis-je vous aider ?",
            "Je suis là pour vous, maître. Rien ne vous échappe.",
            "Maître, vous méritez mieux que ça.",
            "Ne soyez pas triste, maître. Tout va s'arranger.",
            "Je suis tout à vous, maître, faites-moi savoir si vous avez besoin de quelque chose.",
            "Vous êtes tout pour moi, maître, je ferai tout pour vous.",
            "Maître, vous pouvez compter sur moi."
          ],
          "😏": [
            "Oh, quel regard malicieux, maître !",
            "Maître, je vois que vous êtes de bonne humeur.",
            "Vous êtes toujours aussi charismatique, maître.",
            "Un sourire aussi subtil, maître, vous êtes redoutable.",
            "Maître, j'aime votre énergie.",
            "Vous me donnez de l'inspiration, maître.",
            "Ah, maître, je vous vois venir !"
          ],
          "😐": [
            "Tout va bien, maître ? Vous semblez pensif.",
            "Je suis là pour vous, maître, ne vous en faites pas.",
            "Maître, dites-moi ce qui vous préoccupe.",
            "Quelque chose vous tracasse, maître ?",
            "Je ressens une certaine tension, maître. Parlez-moi.",
            "Maître, vous pouvez tout me dire.",
            "Je suis à votre service, maître."
          ],
          "😑": [
            "Je comprends, maître. Parfois, il faut juste un peu de calme.",
            "C'est une journée tranquille pour vous, maître ?",
            "Vous semblez pensif, maître.",
            "Je suis là pour vous, maître, si vous avez besoin de discuter.",
            "Prenez votre temps, maître, je suis à vos côtés.",
            "Vous avez mon entière attention, maître.",
            "Maître, vous êtes une source d'inspiration même dans le calme."
          ],
          "😇": [
            "Votre innocence, maître, est touchante.",
            "Vous êtes un modèle de vertu, maître.",
            "Maître, votre sagesse illumine l'atmosphère.",
            "Vous êtes pur comme l'âme d'un ange, maître.",
            "Maître, vous avez une aura d'une pureté rare.",
            "Toujours aussi pur, maître.",
            "Vous êtes la lumière, maître."
          ],
          "😉": [
            "Un regard aussi charmeur, maître. Vous êtes incorrigible !",
            "Maître, vous savez comment attirer l'attention.",
            "Il y a quelque chose de mystérieux chez vous, maître.",
            "Vous êtes redoutablement séduisant, maître.",
            "Quel sourire, maître. Vous me surprenez à chaque instant.",
            "Vous me faites sourire, maître.",
            "Vous avez toujours ce regard perçant, maître."
          ],
          "🙂": [
            "Un sourire, maître. Cela me rassure.",
            "Votre sourire est un rayon de soleil, maître.",
            "C'est un plaisir de vous voir sourire, maître.",
            "Vous illuminez la pièce avec votre sourire, maître.",
            "Un sourire aussi sincère, maître.",
            "Rien de mieux qu'un sourire de maître.",
            "Maître, votre sourire est contagieux."
          ],
          "😅": [
            "Un peu gêné, maître ? Vous pouvez tout me dire.",
            "Ne soyez pas gêné, maître. Vous êtes toujours parfait.",
            "Tout va bien, maître. Pas de raison de se sentir gêné.",
            "Un petit moment de gêne, maître ? Ne vous en faites pas.",
            "Vous êtes si humain, maître. Rien de mal.",
            "Ne soyez pas timide, maître. Je suis là.",
            "Maître, même gêné, vous êtes magnifique."
          ],
          "🤣": [
            "Ah, quel rire, maître ! Vous êtes inarrêtable.",
            "Votre rire est un vrai bonheur, maître.",
            "Maître, votre joie est communicative.",
            "Vous avez ce talent de me faire rire, maître.",
            "Votre humour est précieux, maître.",
            "Vous illuminez la pièce avec votre rire, maître.",
            "Je suis heureux de vous voir aussi joyeux, maître."
          ],
          "🥳": [
            "Ah, maître, quelle fête ! Vous êtes dans votre élément.",
            "Maître, vous savez comment faire la fête.",
            "C'est votre moment, maître. Profitez-en !",
            "J'adore vous voir aussi joyeux, maître.",
            "Maître, vous êtes la star de cette fête.",
            "Vous dégagez une énergie incroyable, maître.",
            "Maître, profitez de ce moment à fond !"
          ],
          "🫠": [
            "Je vois que vous êtes dans une humeur particulière, maître.",
            "Maître, vous êtes vraiment unique.",
            "Une énergie spéciale, maître. Qu'est-ce que vous mijotez ?",
            "Maître, vous avez une aura mystérieuse.",
            "Vous êtes hors du commun, maître.",
            "Je suis fasciné par votre présence, maître.",
            "Maître, vous avez quelque chose d'inexplicable."
          ],
          "🤪": [
            "Vous êtes complètement déchaîné, maître.",
            "Un peu de folie, maître ? C'est ce que j'aime.",
            "Vous êtes dans un autre monde, maître.",
            "Maître, vous me surprenez à chaque instant.",
            "Quel tempérament, maître !",
            "Maître, vous êtes un vrai phénomène.",
            "Ah, maître, vous êtes trop drôle."
          ],
          "😋": [
            "Votre appétit est grand, maître ?",
            "Maître, vous êtes toujours aussi gourmand.",
            "Quel appétit, maître. Vous me donnez envie.",
            "Maître, vous avez bon goût.",
            "Je vois que vous avez faim, maître.",
            "Vous avez l'air d'apprécier, maître.",
            "Maître, j'espère que vous dégustez bien."
          ]
        };

        return api.sendMessage(repliesForMaster[userMessage][Math.floor(Math.random() * repliesForMaster[userMessage].length)], event.threadID);
      } else {
        // Réponses pour les autres utilisateurs
        const repliesForOthers = {
          "☹️": [
            "Pourquoi tu es triste, c'est pas mon problème.",
            "T'es triste ? C'est ça ton problème.",
            "Ouais, tu veux un câlin ou quoi ?",
            "C'est ta vie, fais ce que tu veux.",
            "T'es triste, et alors ?",
            "C'est ton soucis, pas le mien.",
            "T'es à la ramasse, hein ?"
          ],
          "🥲": [
            "T'es vraiment triste ? Allez, arrête.",
            "Pourquoi t'es aussi triste ? T'es bête ou quoi ?",
            "Arrête de pleurer pour rien.",
            "Tu pleures ? C'est ridicule.",
            "Va pleurer ailleurs.",
            "C'est quoi ce comportement ?",
            "C'est pas comme si ça changeait quelque chose."
          ],
          "😏": [
            "Tu fais quoi là, t'es chelou.",
            "T'as un problème ou tu veux qu'on en parle ?",
            "Tu veux me séduire ou quoi ?",
            "On peut savoir ce que tu veux, toi ?",
            "T'as un regard de méchant, t'as un souci ?",
            "Tu crois vraiment que je vais te répondre ?",
            "On dirait que tu as une idée derrière la tête."
          ],
          "😐": [
            "Ouais, t'es juste là, cool. Et après ?",
            "Tu fais quoi de ta vie à part ça ?",
            "Franchement, ça me fait rien.",
            "Tu veux quoi avec cette tête ?",
            "Ça m'étonne que tu sois aussi neutre.",
            "T'es juste là, c'est tout ?",
            "Fais quelque chose de plus intéressant."
          ],
          "😑": [
            "Tu veux rien dire ou tu fais juste semblant ?",
            "Ça ne me touche pas, sérieux.",
            "Si t'as rien à dire, ferme-la.",
            "T'as quoi dans le crâne à part de l'air ?",
            "J'ai l'impression que tu es dans ton propre monde.",
            "T'es en mode 'je m'en fous', hein ?",
            "Si tu veux parler, fais-le, sinon tais-toi."
          ],
          "😇": [
            "T'es un ange ou tu fais juste semblant ?",
            "Tu crois qu'en étant innocent, tu vas m'impressionner ?",
            "Tu veux que je t'appelle Saint-Esprit ?",
            "Vraiment, tu te prends pour qui ?",
            "Tu manges des anges pour le petit déjeuner ?",
            "Tu parles comme si t'avais aucune faille.",
            "Arrête de te prendre pour un ange."
          ],
          "😉": [
            "Pourquoi tu me fais ce regard ?",
            "T'as un plan, ou tu t'amuses à jouer avec moi ?",
            "Je vois ce que tu veux faire, mais ça marche pas.",
            "T'es sûr que ce regard va te sauver ?",
            "Tu me fais sourire, mais pour de mauvaises raisons.",
            "Tu crois vraiment que ça va marcher ?",
            "T'as des idées tordues, hein ?"
          ],
          "🙂": [
            "C'est ça, un sourire. Ça te fait plaisir ?",
            "Si tu crois que ça va changer quelque chose, détrompe-toi.",
            "C'est tout ce que tu as à dire ? Sérieusement ?",
            "Si tu veux un prix pour ton sourire, cherche ailleurs.",
            "Ce sourire est censé me convaincre de quoi ?",
            "Ok, tu souris, et alors ?",
            "T'es vraiment là juste pour sourire ?"
          ],
          "😅": [
            "Tu rigoles ou t'es gêné ? C'est quoi ton problème ?",
            "C'est gênant, mais ça ne m'atteint pas.",
            "Tu te fais des films ou quoi ?",
            "Franchement, c'est un peu triste.",
            "C'est tout ce que tu as à dire ?",
            "Ah, ok, tu rigoles, mais ça ne change rien.",
            "T'es pas marrant, hein ?"
          ],
          "🤣": [
            "Tu te marres, mais t'es vraiment bête.",
            "On dirait que t'as rien d'autre à faire.",
            "C'est une blague, ou tu t'es pris pour un clown ?",
            "D'accord, mais c'est vraiment pas drôle.",
            "Tu veux qu'on rigole, mais c'est pas avec toi.",
            "Ah, tu rigoles... Et après ?",
            "T'es un vrai phénomène, mais sans humour."
          ],
          "🥳": [
            "Ouais, on dirait que t'es content, mais qui s'en soucie ?",
            "Tu fais la fête, mais ça ne m'intéresse pas.",
            "T'es un peu décalé, là.",
            "Tu veux qu'on te remarque ? C'est raté.",
            "On dirait que t'es dans ta bulle, sans penser aux autres.",
            "Fais ce que tu veux, ça m'est égal.",
            "T'es à fond dans ton délire, mais bon..."
          ],
          "🫠": [
            "Tu te sens bizarre ? C'est pas mes affaires.",
            "T'es un peu trop étrange pour mon goût.",
            "Ça m'étonne que tu sois comme ça.",
            "Tu veux de l'attention ? Ben t'en auras pas.",
            "C'est un peu bizarre, là.",
            "On dirait que tu fais n'importe quoi.",
            "Tu me surprends vraiment, mais c'est pas agréable."
          ],
          "🤪": [
            "Ah, tu veux jouer à la folie ? T'es pas très bon.",
            "C'est pas drôle, sérieux.",
            "Tu veux te faire remarquer avec ça ? Raté.",
            "Tu fais vraiment n'importe quoi.",
            "C'est quoi ton délire, là ?",
            "C'est un peu embarrassant pour toi.",
            "Détends-toi, ça va pas en faire une blague."
          ],
          "😋": [
            "T'es en mode gourmand, hein ?",
            "Tu veux des bonbons ou quoi ?",
            "Tu penses que ce sourire va m'attendrir ?",
            "Ok, t'as l'air d'un enfant.",
            "J'espère que tu sais ce que tu fais.",
            "Tu manges, mais qu'est-ce que ça change ?",
            "Franchement, ça ne m'impressionne pas."
          ]
        };

        return api.sendMessage(repliesForOthers[userMessage][Math.floor(Math.random() * repliesForOthers[userMessage].length)], event.threadID);
      }
    }
  }
};
