//Import Images
import ordumonde from "./img/OrDuMonde.webp"
import ordumonde2 from "./img/OrDuMonde2.webp"
import ordumondemob from "./img/OrDuMondeMobile.png"
import spacetraveling from "./img/SpaceTraveling.webp"
import spacetraveling2 from "./img/SpaceTraveling2.webp"
import spacetravelingmob from "./img/SpaceTravelingMob.png"
import vortex from "./img/vortex.webp"
import vortex2 from "./img/vortex2.webp"
import vortexmob from "./img/vortex1mob.png"
import waced1 from "./img/waced1.webp"
import waced2 from "./img/waced2.webp"
import waced1mob from "./img/waced1Mobile.png"
import richpost1 from "./img/richpost.png"
import richpost2 from "./img/richpost2.png"
import richpostmob from "./img/richpostmob.png"
export const MovieState = () => {
  return [
    {
      title: "OrDuMOnde",
      mainImg: ordumonde,
      mainImgMob: ordumondemob,
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
      mainImgMob: waced1mob,
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
      mainImgMob: spacetravelingmob,
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
      mainImgMob: vortexmob,
      url: "/work/vortex",
      secondaryImg: vortex2,
      awards: [
        {
          title: "About",
          description:
            "“Vortex est une platform de crypto trading crée pour simplifier le métier de trading.”",
        },
      ],
    },
    {
      title: "The Rich Post",
      mainImg: richpost1,
      mainImgMob: richpostmob,
      url: "/work/richpost",
      secondaryImg: richpost2,
      awards: [
        {
          title: "About",
          description:
            "“The Rich Post est un site moderne e-commerce de clothing”",
        },
      ],
    },
  ]
}
