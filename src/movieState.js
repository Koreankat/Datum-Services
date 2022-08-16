//Import Images
import ordumonde from "./img/OrDuMonde.png"
import spacetraveling from "./img/SpaceTraveling.png"
import vortex from "./img/vortex.png"
import ordumonde2 from "./img/OrDuMonde2.png"
import spacetraveling2 from "./img/SpaceTraveling2.png"
import vortex2 from "./img/vortex2.png"
import waced1 from "./img/waced1.png"
import waced2 from "./img/waced2.png"

export const MovieState = () => {
  return [
    {
      title: "OrDuMOnde",
      mainImg: ordumonde,
      secondaryImg: ordumonde2,
      url: "/work/ordumonde",
      awards: [
        {
          title: "QUI SOMMES-NOUS",
          description:
            "“OR DU MONDE : une histoire de famille aux valeurs partagées”",
        },
        {
          title: "MANIFESTE.",
          description:
            "“Les bijoux sont symboles d'amour et ont de tout temps été fabriqués, portés, offerts, ils appartiennent à notre imaginaire collectif. Transmissibles, éternels, ils portent en eux un héritage ancestral et la promesse du bonheur à venir..”",
        },
        {
          title: "NOS VALEURS.",
          description:
            "“LA QUALITÉ Notre valeur fondatrice : réaliser des bijoux de la plus belle qualité sertis de diamants éthiques exceptionnels et de pierres aux couleurs éclatantes. L'HUMAIN : En garantissant des diamants libres d'atteintes aux droits de l'Homme et en soutenant l'artisanat français nous mettons l'humain au cœur de nos préoccupations LA DURABILITÉ: En favorisant l'or recyclé et en privilégiant l'utilisation responsable des ressources, nous fabriquons des bijoux éco-friendly conçus pour durer toute une vie . L'ENVIRONNEMENT:Tous nos diamants sont extraits dans le strict respect des standards internationaux en matière d'écologie afin de protéger la nature et les écosystèmes locaux.”",
        },
      ],
    },
    {
      title: "Waced",
      mainImg: waced1,
      secondaryImg: waced2,
      url: "/work/waced",
      awards: [
        {
          title: "QUI SOMMES-NOUS",
          description:
            "“Waced est une grande sociétée d'immobilier située au États-Unis ”",
        },
      ],
    },
    {
      title: "Space Traveling",
      mainImg: spacetraveling,
      url: "/work/spacetraveling",
      secondaryImg: spacetraveling2,
      awards: [
        {
          title: "About",
          description:
            "“Space Traveling est une magnifique solution qui represente les recherches atteinte par rapport a tout ce qui est en relation avec le voyage dans l'espace.”",
        },
      ],
    },
    {
      title: "Vortex Crypto Trading",
      mainImg: vortex,
      url: "/work/the-racer",
      secondaryImg: vortex2,
      awards: [
        {
          title: "About",
          description:
            "“Vortex est une platform de crypto trading crée pour simplifier le métier de trading.”",
        },
      ],
    },
  ]
}
