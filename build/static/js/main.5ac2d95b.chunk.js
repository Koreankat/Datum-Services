/* eslint-disable no-unused-expressions */
;(this.webpackJsonpcapture = this.webpackJsonpcapture || []).push([
  [0],
  {
    41: function (e, n, t) {},
    53: function (e, n, t) {
      "use strict"
      t.r(n)
      var i,
        a,
        r,
        c,
        s,
        o,
        d,
        l,
        b,
        j,
        h = t(0),
        m = t(14),
        p = t.n(m),
        x = t(9),
        u = t(7),
        g = t(4),
        O = t(2),
        f = t(3),
        v = Object(f.a)(
          i ||
            (i = Object(O.a)([
              "\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  @media (max-width: 1700px) {\n    font-size: 75%;\n  }\n}\n\nbody {\n  background: #1b1b1b;\n  font-family: 'Lato', sans-serif;\n  overflow-x: hidden;\n}\n\nbutton {\n  font-family: 'Inter', sans-serif;\n  font-weight: bold;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 1rem 2rem;\n  border: 3px solid #008711;\n  background: transparent;\n  color: white;\n  transition: all 0.5s ease;\n  &:hover {\n    background: #008711;\n    color: white;\n  }\n  \n}\n\nh2 {\n    font-weight: bold;\n    font-size: 4rem;\n  }\n  h3 {\n    color: white;\n  }\n  h4 {\n    font-weight: bold;\n    font-size: 2rem\n  }\n  a {\n    font-size: 1.1rem;\n  }\n  span {\n    font-weight: bold;\n    color: #008711;\n  }\n  p {\n    color: #ccc;\n    padding: 3rem 0;\n    font-size: 1.4rem;\n    line-height: 150%;\n  }\n\n",
            ]))
        ),
        w = t.p + "static/media/DS-Small-two.72e437fc.png",
        y = (t(41), t(1)),
        k = f.b.nav(
          a ||
            (a = Object(O.a)([
              "\n  min-height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding: 1rem 10rem;\n  width: 100%;\n  background: #282828;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  a {\n    color: white;\n    text-decoration: none;\n  }\n  ul {\n    display: flex;\n    list-style: none;\n  }\n  li {\n    padding-left: 10rem;\n    position: relative;\n  }\n\n  @media (max-width: 1300px) {\n    flex-direction: column;\n    position: static;\n    padding: 2rem 1rem;\n\n    ul {\n      padding: 2rem;\n      justify-content: space-around;\n      width: 100%;\n      li {\n        padding: 0;\n      }\n    }\n  }\n",
            ]))
        ),
        N = Object(f.b)(g.b.div)(
          r ||
            (r = Object(O.a)([
              "\n  height: 0.3rem;\n  width: 0%;\n  background: #008711;\n  position: absolute;\n  bottom: -80%;\n  left: 60%;\n  @media (max-width: 1300px) {\n    left: 0;\n  }\n",
            ]))
        ),
        z = function () {
          var e = Object(u.g)().pathname
          return Object(y.jsxs)(k, {
            children: [
              Object(y.jsx)("h1", {
                children: Object(y.jsx)(x.c, {
                  to: "/",
                  children: Object(y.jsx)("img", {
                    src: w,
                    id: "logo",
                    alt: "logo",
                    style: { width: "125px" },
                  }),
                }),
              }),
              Object(y.jsxs)("ul", {
                children: [
                  Object(y.jsxs)("li", {
                    children: [
                      Object(y.jsx)(x.c, { to: "/", children: "1. About Us" }),
                      Object(y.jsx)(N, {
                        transition: { duration: 0.75 },
                        initial: { width: "0%" },
                        animate: { width: "/" === e ? "50%" : "0%" },
                      }),
                    ],
                  }),
                  Object(y.jsxs)("li", {
                    children: [
                      Object(y.jsx)(x.c, {
                        to: "/work",
                        children: "2. Our Work",
                      }),
                      Object(y.jsx)(N, {
                        transition: { duration: 0.75 },
                        initial: { width: "0%" },
                        animate: { width: "/work" === e ? "50%" : "0%" },
                      }),
                    ],
                  }),
                  Object(y.jsxs)("li", {
                    children: [
                      Object(y.jsx)(x.c, {
                        to: "/contact",
                        children: "3. Our Team",
                      }),
                      Object(y.jsx)(N, {
                        transition: { duration: 0.75 },
                        initial: { width: "0%" },
                        animate: { width: "/contact" === e ? "50%" : "0%" },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        S = t.p + "static/media/textile.83a32eb2.png",
        I = Object(f.b)(g.b.div)(
          c ||
            (c = Object(O.a)([
              "\n  min-height: 90vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5rem 10rem;\n  color: white;\n  @media (max-width: 1300px) {\n    display: block;\n    padding: 2rem 2rem;\n    text-align: center;\n  }\n",
            ]))
        ),
        E =
          (Object(f.b)(g.b.div)(
            s ||
              (s = Object(O.a)([
                "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  padding: 5rem 10rem;\n  color: white;\n  @media (max-width: 1300px) {\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 2rem 2rem;\n    text-align: center;\n  }\n",
              ]))
          ),
          f.b.div(
            o ||
              (o = Object(O.a)([
                "\n  flex: 1;\n  padding-right: 5rem;\n  z-index: 2;\n  h2 {\n    font-weight: bold;\n  }\n  @media (max-width: 1300px) {\n    padding: 0;\n    button {\n      padding: 1.5rem;\n      margin-bottom: 5rem;\n    }\n  }\n",
              ]))
          )),
        C = f.b.div(
          d ||
            (d = Object(O.a)([
              "\n  flex: 1;\n  overflow: hidden;\n  z-index: 2;\n  img {\n    width: 100%;\n    height: 60vh;\n    object-fit: cover;\n  }\n  @media (max-width: 550px) {\n    img {\n      width: 100%;\n      height: auto;\n    }\n  }\n",
            ]))
        ),
        T = f.b.div(l || (l = Object(O.a)(["\n  overflow: hidden;\n"]))),
        M = {
          hidden: { opacity: 0, y: 300 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duratiion: 0.5,
              when: "beforeChildren",
              staggerChildren: 0.25,
            },
          },
          exit: { opacity: 0, transition: { duration: 0.5 } },
        },
        q = {
          hidden: { y: 200 },
          show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
        },
        A = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
        },
        D = {
          hidden: { scale: 1.5, opacity: 0 },
          show: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.75, ease: "easeOut" },
          },
        },
        U = {
          hidden: { width: "0%" },
          show: { width: "100%", transition: { duration: 1 } },
        },
        R = {
          hidden: { x: "-130%", skew: "45deg" },
          show: {
            x: "100%",
            skew: "0deg",
            transition: { duration: 1, ease: "easeOut" },
          },
        },
        L = {
          hidden: { opacity: 1 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, ease: "easeOut" },
          },
        },
        P = {
          hidden: { opacity: 0, scale: 1.1, transition: { duration: 0.5 } },
          show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        },
        F = f.b.svg(
          b ||
            (b = Object(O.a)([
              "\n  position: absolute;\n  left: 0;\n  z-index: 1;\n",
            ]))
        ),
        V = function () {
          return Object(y.jsx)(F, {
            viewBox: "0 0 1440 363",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(y.jsx)(g.b.path, {
              initial: { pathLength: 0, pathOffset: 1 },
              animate: { pathLength: 1, pathOffset: 0 },
              transition: { duration: 1 },
              d: "M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",
              stroke: "#008711",
              strokeOpacity: "0.5",
              strokeWidth: "8",
            }),
          })
        },
        _ = function (e) {
          var n = e.resultRef
          return Object(y.jsxs)(I, {
            children: [
              Object(y.jsxs)(E, {
                children: [
                  Object(y.jsxs)(g.b.div, {
                    children: [
                      Object(y.jsx)(T, {
                        children: Object(y.jsx)(g.b.h2, {
                          variants: q,
                          children: "On agis pour",
                        }),
                      }),
                      Object(y.jsx)(T, {
                        children: Object(y.jsxs)(g.b.h2, {
                          variants: q,
                          children: [
                            "transformer ",
                            Object(y.jsx)("span", { children: "vos besoins" }),
                            " en action.",
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(y.jsx)(g.b.p, {
                    variants: A,
                    children:
                      "Contactez nous pour vous aider a d\xe9velopper et digitaliser votre marque a travers nos solutions con\xe7ues pour am\xe9liorer votre entreprise et inciter le consomateur \xe0 agir.",
                  }),
                  Object(y.jsx)(g.b.button, {
                    variants: A,
                    onClick: function (e) {
                      e.preventDefault(),
                        n.current.scrollIntoView({ behavior: "smooth" })
                    },
                    children: "Contactez nous",
                  }),
                ],
              }),
              Object(y.jsx)(C, {
                children: Object(y.jsx)(g.b.img, {
                  variants: D,
                  src: S,
                  alt: "person with camera",
                }),
              }),
              Object(y.jsx)(V, {}),
            ],
          })
        },
        W = t(31),
        B = t(29),
        H = t.n(B),
        G = t(17),
        J = (t(52), t(11)),
        Q = t(30),
        Z = function () {
          var e = Object(g.c)(),
            n = Object(Q.a)({ threshold: 0.4 }),
            t = Object(J.a)(n, 2),
            i = t[0]
          return t[1] ? e.start("show") : e.start("hidden"), [i, e]
        }
      H.a.init()
      var X,
        K,
        Y,
        $,
        ee,
        ne,
        te,
        ie,
        ae,
        re,
        ce,
        se,
        oe,
        de,
        le,
        be,
        je,
        he,
        me,
        pe,
        xe,
        ue,
        ge,
        Oe = Object(h.forwardRef)(function (e, n) {
          var t = Object(h.useRef)()
          return Object(y.jsxs)(fe, {
            ref: n,
            children: [
              Object(y.jsxs)("h1", {
                children: [
                  "CONTACTEZ ",
                  Object(y.jsx)("span", { children: "NOUS" }),
                ],
              }),
              Object(y.jsxs)("h2", {
                children: [
                  "DEMANDER UN RAPPEL",
                  Object(y.jsx)("br", {}),
                  " DEVIS SANS ENGAGEMENT - CONSULTATION GRATUITE",
                ],
              }),
              Object(y.jsx)("div", {
                children: Object(y.jsxs)("form", {
                  onSubmit: function (e) {
                    e.preventDefault(),
                      W.a
                        .sendForm(
                          "service_k5douhi",
                          "template_xgoeijp",
                          t.current,
                          "4AFUO7Ua2XiLUj_hH"
                        )
                        .then(
                          function (e) {
                            console.log(e.text),
                              G.NotificationManager.success(
                                "Thank you for contacting me",
                                "Message sent!"
                              )
                          },
                          function (e) {
                            console.log(e.text),
                              G.NotificationManager.error(
                                "Please try again later",
                                "Message could not be sent!"
                              )
                          }
                        ),
                      e.target.reset()
                  },
                  ref: t,
                  children: [
                    Object(y.jsxs)("div", {
                      className: "row-1",
                      children: [
                        Object(y.jsx)("input", {
                          type: "text",
                          autoComplete: "off",
                          id: "user_name",
                          name: "user_name",
                          placeholder: "NOM",
                          spellCheck: "false",
                          required: !0,
                        }),
                        Object(y.jsx)("input", {
                          type: "email",
                          autoComplete: "off",
                          id: "user_email",
                          name: "user_email",
                          placeholder: "EMAIL",
                          spellCheck: "false",
                          required: !0,
                        }),
                      ],
                    }),
                    Object(y.jsx)("input", {
                      type: "text",
                      autoComplete: "off",
                      id: "from_name",
                      name: "from_name",
                      placeholder: "VOTRE SOCI\xc9T\xc9/ PROJECT/ ORGANISATION",
                      spellCheck: "false",
                    }),
                    Object(y.jsx)("br", {}),
                    Object(y.jsx)("textarea", {
                      id: "message",
                      autoComplete: "off",
                      name: "message",
                      placeholder: "SUJET",
                      spellCheck: "false",
                    }),
                    Object(y.jsx)("br", {}),
                    Object(y.jsx)("div", {
                      className: "form-button",
                      children: Object(y.jsx)("button", {
                        type: "submit",
                        value: "Submit",
                        children: "RAPPELEZ NOUS",
                      }),
                    }),
                  ],
                }),
              }),
              Object(y.jsx)(G.NotificationContainer, {}),
              Object(y.jsx)("footer", {
                children: Object(y.jsxs)("div", {
                  className: "cooter",
                  children: [
                    Object(y.jsx)("h2", {
                      children: "Ou contactez nous sur le:",
                    }),
                    Object(y.jsx)("h2", {
                      children: Object(y.jsx)("a", {
                        href: "tel:+212656290736",
                        style: {
                          fontSize: "24px",
                          color: "white",
                          textDecoration: "none",
                        },
                        children: "+212 656290736",
                      }),
                    }),
                    Object(y.jsx)("div", {
                      style: { marginTop: "10px", marginBottom: "10px" },
                      children:
                        "Copyright \xa9 Datum Services . All Right Reserved",
                    }),
                  ],
                }),
              }),
            ],
          })
        }),
        fe = f.b.div(
          j ||
            (j = Object(O.a)([
              "\n  footer {\n    padding-top: 20px;\n    background-color: #282828;\n    width: 100%;\n  }\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex-direction: column;\n  span {\n    display: block;\n  }\n  h2 {\n    font-weight: 200;\n    font-size: 30px;\n  }\n  button {\n    margin-bottom: 10px;\n  }\n  input {\n    font-family: sans-serif;\n    font-size: 17px;\n    margin-top: 20px;\n    background-color: #2d2c2c;\n    border: none;\n    text-indent: 10px;\n    color: rgb(201, 195, 195);\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 500px;\n    max-width: 100%;\n    height: 50px;\n  }\n  textarea {\n    font-family: sans-serif;\n    margin-top: 20px;\n    background-color: #2d2c2c;\n    border: none;\n    font-size: 17px;\n    text-indent: 10px;\n    padding-top: 10px;\n    color: rgb(201, 195, 195);\n    max-height: 200px;\n    height: 200px;\n    width: 100%;\n    max-width: 100%;\n    resize: none;\n    margin-bottom: 20px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  h1 {\n    font-weight: bold;\n    font-size: 50px;\n  }\n  @media (max-width: 550px) {\n    h1 {\n      font-size: 30px;\n      margin-bottom: 10px;\n    }\n    textarea {\n      width: 300px;\n    }\n    input {\n      width: 300px;\n    }\n    h2 {\n      font-size: 20px;\n      font-weight: 100;\n    }\n  }\n",
            ]))
        ),
        ve = Oe,
        we = t.p + "static/media/clock.68ce2c31.svg",
        ye = t.p + "static/media/diaphragm.4a6df06a.svg",
        ke = t.p + "static/media/money.06d33485.svg",
        Ne = t.p + "static/media/teamwork.b0c1bc4f.svg",
        ze = t.p + "static/media/home2.e1c8c796.jpeg",
        Se = Object(f.b)(I)(
          X ||
            (X = Object(O.a)([
              "\n  h2 {\n    padding-bottom: 5rem;\n  }\n  p {\n    width: 70%;\n    padding: 2rem 0 4rem 0;\n  }\n  .Image {\n    box-shadow: -2px -2px 10px 2px #008711;\n  }\n  @media (max-width: 550px) {\n    h2 {\n      font-size: 30px;\n    }\n  }\n",
            ]))
        ),
        Ie = f.b.div(
          K ||
            (K = Object(O.a)([
              "\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 1300px) {\n    justify-content: center;\n  }\n",
            ]))
        ),
        Ee = f.b.div(
          Y ||
            (Y = Object(O.a)([
              "\n  flex-basis: 20rem;\n  .icon {\n    display: flex;\n    align-items: center;\n\n    h3 {\n      margin-left: 1rem;\n      background: white;\n      color: black;\n      padding: 1rem;\n    }\n  }\n  @media (max-width: 550px) {\n    .icon {\n      justify-content: center;\n    }\n  }\n",
            ]))
        ),
        Ce = function () {
          var e = Z(),
            n = Object(J.a)(e, 2),
            t = n[0],
            i = n[1]
          return Object(y.jsxs)(Se, {
            ref: t,
            variants: P,
            animate: i,
            initial: "hide",
            children: [
              Object(y.jsxs)(E, {
                children: [
                  Object(y.jsxs)("h2", {
                    children: [
                      "Prestations de haute ",
                      Object(y.jsx)("span", { children: "qualit\xe9" }),
                    ],
                  }),
                  Object(y.jsxs)(Ie, {
                    children: [
                      Object(y.jsxs)(Ee, {
                        children: [
                          Object(y.jsxs)("div", {
                            className: "icon",
                            children: [
                              Object(y.jsx)("img", { alt: "icon", src: we }),
                              Object(y.jsx)("h3", { children: "Rapide" }),
                            ],
                          }),
                          Object(y.jsx)("p", {
                            children:
                              "R\xe9alisation de vos r\xeaves en periode courte.",
                          }),
                        ],
                      }),
                      Object(y.jsxs)(Ee, {
                        children: [
                          Object(y.jsxs)("div", {
                            className: "icon",
                            children: [
                              Object(y.jsx)("img", { alt: "icon", src: Ne }),
                              Object(y.jsx)("h3", { children: "Staff" }),
                            ],
                          }),
                          Object(y.jsx)("p", {
                            children: "Des experts \xe0 votre disposition.",
                          }),
                        ],
                      }),
                      Object(y.jsxs)(Ee, {
                        children: [
                          Object(y.jsxs)("div", {
                            className: "icon",
                            children: [
                              Object(y.jsx)("img", { alt: "icon", src: ye }),
                              Object(y.jsx)("h3", { children: "Valeur" }),
                            ],
                          }),
                          Object(y.jsx)("p", {
                            children: "Produit magnifiquement con\xe7u",
                          }),
                        ],
                      }),
                      Object(y.jsxs)(Ee, {
                        children: [
                          Object(y.jsxs)("div", {
                            className: "icon",
                            children: [
                              Object(y.jsx)("img", { alt: "icon", src: ke }),
                              Object(y.jsx)("h3", { children: "Abordable" }),
                            ],
                          }),
                          Object(y.jsx)("p", {
                            children: "Facturation comp\xe9titive.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(y.jsx)(C, {
                className: "Image",
                children: Object(y.jsx)("img", { alt: "camera", src: ze }),
              }),
            ],
          })
        },
        Te = (t.p, t.p + "static/media/bg-p1.d10a3d3e.png"),
        Me = Object(f.b)(g.b.div)(
          $ ||
            ($ = Object(O.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  padding: 5rem 10rem;\n  color: white;\n\n  h2 {\n    padding-bottom: 5rem;\n  }\n  p {\n    width: 90%;\n    padding: 2rem;\n    color: #f1f1f1;\n    line-height: 1.6;\n\n    background-image: url(",
              ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    border: 1px solid #008711;\n  }\n  div {\n    text-align: center;\n  }\n\n  @media (max-width: 1300px) {\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 2rem 2rem;\n    text-align: center;\n    p {\n      width: 95%;\n    }\n    h2 {\n      font-size: 30px;\n    }\n    img {\n      width: 180px;\n    }\n  }\n  @media (max-width: 550px) {\n    p {\n      font-size: 14px;\n      text-align: left;\n    }\n  } ;\n",
            ])),
          Te
        ),
        qe = function () {
          var e = Z(),
            n = Object(J.a)(e, 2),
            t = n[0],
            i = n[1]
          return Object(y.jsxs)(Me, {
            ref: t,
            variants: P,
            animate: i,
            initial: "hide",
            children: [
              Object(y.jsx)("div", {
                children: Object(y.jsxs)("h2", {
                  children: [
                    "QUI SOMMES",
                    Object(y.jsx)("span", { children: " NOUS" }),
                  ],
                }),
              }),
              Object(y.jsx)("p", {
                children:
                  "Datum Services agit en tant qu\u2019agence de developement Informatique, communication et de marketing num\xe9riques, dont l\u2019activit\xe9 principale est l'int\xe9gration et pr\xe9paration de vos projets gr\xe2ce \xe0 nos services int\xe9gr\xe9s de publicit\xe9, developement web, marketing digitale, graphic design...tout en g\xe9rant votre business avec le plus grand professionnalisme. De A \xe0 Z en commen\xe7ant par l\u2019\xe9tude du march\xe9 et de produits concurrents, en concevant les logos et l\u2019identit\xe9 visuelle tout en terminant par la cr\xe9ation de plans marketing strat\xe9giques. Nous sommes \xe0 votre \xe9coute, pour r\xe9pondre \xe0 tous vos besoins, quel que soit votre secteur d\u2019activit\xe9. En \xe9tudiant attentivement les exigences de vos projets et vos objectifs, nous vous accompagnons sur la voie du succ\xe8s avec les conseils les plus importants, les technologies les plus efficaces, les orientations et les meilleures id\xe9es publicitaires innovantes pour vous aider \xe0 exceller et \xe0 r\xe9ussir vos projets. Nous combinons des m\xe9thodes de marketing traditionnelles avec des m\xe9thodes modernes pour fournir un service marketing int\xe9gr\xe9 qui augmentera la valeur de votre marque, Ce dernier qui va \xe9tablire votre domination et mettre en \xe9vidence votre pr\xe9sence dans tous les canaux marketing digitale, ce qui acc\xe9l\xe9rera votre acc\xe8s \xe0 vos objectifs.",
              }),
            ],
          })
        },
        Ae = function () {
          var e = Object(u.g)().pathname
          return (
            Object(h.useEffect)(
              function () {
                window.scroll({ top: 0, left: 0 })
              },
              [e]
            ),
            null
          )
        },
        De = t.p + "static/media/wb-b1.d910599c.png",
        Ue = t.p + "static/media/wb-b2.3f7cc20a.png",
        Re = t.p + "static/media/gd-b1.f0534adc.png",
        Le = t.p + "static/media/gd-b2.29007edb.png",
        Pe = t.p + "static/media/md-b1.4e1164b3.png",
        Fe = t.p + "static/media/md-b2.e7ba55fb.png",
        Ve = Object(f.b)(g.b.div)(
          ee ||
            (ee = Object(O.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #f1f1f1;\n  align-items: center;\n  h1 {\n    font-size: 30px;\n  }\n  ul {\n    font-size: 18px;\n    line-height: 1.6;\n    margin: 10px;\n  }\n  .ul1 {\n    line-height: 2.2;\n  }\n  .ul2 {\n    line-height: 1.8;\n  }\n  .ul3 {\n    line-height: 3;\n  }\n\n  div {\n    width: 32%;\n    border: 2px solid #008711;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transition: 0.5s ease-in-out;\n  }\n  div {\n    transition: 0.5s ease-in-out;\n    height: 300px;\n  }\n  .div1 {\n    background-image: url(",
              ");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n  .div1:hover {\n    background-image: url(",
              ");\n  }\n  .div2 {\n    background-image: url(",
              ");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n  .div2:hover {\n    background-image: url(",
              ");\n  }\n  .div3 {\n    background-image: url(",
              ");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n  .div3:hover {\n    background-image: url(",
              ");\n  }\n  h2 {\n    padding-bottom: 5rem;\n  }\n  section {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 95%;\n  }\n  @media (max-width: 1060px) {\n    ul {\n      font-size: 18px;\n    }\n    h1 {\n      font-size: 25px;\n    }\n    section {\n      flex-direction: column;\n      width: 90%;\n    }\n    div {\n      width: 90%;\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n  }\n  @media (max-width: 550px) {\n    h1 {\n      font-size: 20px;\n    }\n    ul {\n      font-size: 16px;\n    }\n    p {\n      font-size: 14px;\n    }\n\n    h2 {\n      font-size: 30px;\n    }\n  }\n",
            ])),
          De,
          Ue,
          Re,
          Le,
          Pe,
          Fe
        ),
        _e = function () {
          var e = Z(),
            n = Object(J.a)(e, 2),
            t = n[0],
            i = n[1]
          return Object(y.jsxs)(Ve, {
            ref: t,
            variants: P,
            animate: i,
            initial: "hide",
            children: [
              Object(y.jsxs)("h2", {
                children: [
                  "NOS",
                  Object(y.jsx)("span", { children: " SERVICES" }),
                ],
              }),
              Object(y.jsxs)("section", {
                children: [
                  Object(y.jsxs)("div", {
                    className: "div1",
                    children: [
                      Object(y.jsx)("h1", {
                        children: Object(y.jsx)("span", {
                          children: "Graphic Design",
                        }),
                      }),
                      Object(y.jsxs)("ul", {
                        className: "ul1",
                        children: [
                          Object(y.jsx)("li", {
                            children: "Cr\xe9ation de marque",
                          }),
                          Object(y.jsxs)("li", {
                            children: [
                              "Logos, Design 3D,",
                              Object(y.jsx)("br", {}),
                              " Conception illustrative...",
                            ],
                          }),
                          Object(y.jsx)("li", { children: "UI/UX design" }),
                          Object(y.jsx)("li", {
                            children: "Illustration Digitale",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(y.jsxs)("div", {
                    className: "div2",
                    children: [
                      Object(y.jsx)("h1", {
                        children: Object(y.jsx)("span", {
                          children: "Developpement Web",
                        }),
                      }),
                      Object(y.jsxs)("ul", {
                        className: "ul2",
                        children: [
                          Object(y.jsx)("li", { children: "Site Webs" }),
                          Object(y.jsx)("li", {
                            children: "Application Mobile",
                          }),
                          Object(y.jsx)("li", {
                            children: "Conseil Informatique",
                          }),
                          Object(y.jsx)("li", { children: "SEO" }),
                          Object(y.jsx)("li", {
                            children: "Web Hosting/Nom de Domaine",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(y.jsxs)("div", {
                    className: "div3",
                    children: [
                      Object(y.jsx)("h1", {
                        children: Object(y.jsx)("span", {
                          children: "Marketing Digital",
                        }),
                      }),
                      Object(y.jsxs)("ul", {
                        className: "ul3",
                        children: [
                          Object(y.jsx)("li", {
                            children: "Optimisation du moteur de recherche",
                          }),
                          Object(y.jsx)("li", {
                            children: "Marketing de contenu",
                          }),
                          Object(y.jsx)("li", {
                            children: "Marketing de r\xe9seau sociaux",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        We = t.p + "static/media/img.eb4aa5a3.png",
        Be = Object(f.b)(g.b.div)(
          ne ||
            (ne = Object(O.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  padding: 5rem 10rem;\n  color: white;\n  h2 {\n    padding-bottom: 5rem;\n  }\n  p {\n    width: 90%;\n    padding: 2rem;\n    color: #f1f1f1;\n    text-align: center;\n    background-image: url(",
              ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    border: 1px solid #008711;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  img {\n    width: 500px;\n  }\n  @media (max-width: 1300px) {\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    text-align: center;\n    p {\n      width: 80%;\n      margin-bottom: 10px;\n    }\n    h2 {\n      font-size: 30px;\n    }\n  }\n  @media (max-width: 550px) {\n    p {\n      width: 280px;\n      font-size: 14px;\n      text-align: left;\n    }\n    img {\n      max-width: 330px;\n    }\n    h2 {\n      font-size: 30px;\n    }\n  }\n",
            ])),
          Te
        ),
        He = function () {
          var e = Z(),
            n = Object(J.a)(e, 2),
            t = n[0],
            i = n[1]
          return Object(y.jsxs)(Be, {
            ref: t,
            variants: P,
            animate: i,
            initial: "hide",
            children: [
              Object(y.jsxs)("div", {
                children: [
                  Object(y.jsxs)("h2", {
                    children: [
                      "NOTRE",
                      Object(y.jsx)("span", { children: " PHILOSOPHIE" }),
                    ],
                  }),
                  Object(y.jsxs)("p", {
                    children: [
                      "Le moment pr\xe9sent est celui de l'invention et l'innovation. C\u2019est la fin des anciennes m\xe9thodes et le d\xe9but de nouvelles d\xe9marches. Nous pensons que l\u2019avenir est entre les mains des personnes qui vivent dans un monde digital. \xeates vous pr\xeat ? ",
                      Object(y.jsx)("br", {}),
                      "Relevons ensemble le d\xe9fi !",
                    ],
                  }),
                ],
              }),
              Object(y.jsx)("img", { src: We, alt: "philo" }),
            ],
          })
        },
        Ge = function () {
          var e = Object(h.useRef)(null)
          return Object(y.jsxs)(g.b.div, {
            variants: M,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            style: { width: "100%" },
            children: [
              Object(y.jsx)(Ae, {}),
              Object(y.jsx)(_, { resultRef: e }),
              Object(y.jsx)(_e, {}),
              Object(y.jsx)(Ce, {}),
              Object(y.jsx)(qe, {}),
              Object(y.jsx)(He, {}),
              Object(y.jsx)(ve, { ref: e }),
            ],
          })
        },
        Je = Object(f.b)(g.b.div)(
          te ||
            (te = Object(O.a)([
              "\n  padding: 5rem 10rem;\n  color: #353535;\n\n  min-height: 90vh;\n  @media (max-width: 1300px) {\n    padding: 2rem;\n    font-size: 1rem;\n  }\n",
            ]))
        ),
        Qe =
          (f.b.div(
            ie ||
              (ie = Object(O.a)([
                "\n  margin-bottom: 4rem;\n  color: black;\n",
              ]))
          ),
          f.b.div(ae || (ae = Object(O.a)(["\n  overflow: hidden;\n"]))),
          f.b.div(
            re ||
              (re = Object(O.a)([
                "\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  background: #353535;\n",
              ]))
          ),
          Object(f.b)(g.b.div)(
            ce ||
              (ce = Object(O.a)([
                "\n  display: flex;\n  align-items: center;\n  h2 {\n    margin: 2rem;\n  }\n",
              ]))
          ),
          function () {
            return Object(y.jsx)(Je, {
              exit: "exit",
              variants: M,
              initial: "hidden",
              animate: "show",
              style: { background: "#fff" },
              children: Object(y.jsx)("h2", {
                children: "Under development...",
              }),
            })
          }),
        Ze = t.p + "static/media/OrDuMonde.4c942efb.png",
        Xe = t.p + "static/media/SpaceTraveling.1127c791.png",
        Ke = t.p + "static/media/vortex.943c2ac4.png",
        Ye = t.p + "static/media/OrDuMonde2.2e301c02.png",
        $e = t.p + "static/media/SpaceTraveling2.43954d82.png",
        en = t.p + "static/media/vortex2.06fde413.png",
        nn = t.p + "static/media/waced1.cb3ced4f.png",
        tn = t.p + "static/media/waced2.eef85a6a.png",
        an = function () {
          return [
            {
              title: "OrDuMOnde",
              mainImg: Ze,
              secondaryImg: Ye,
              url: "/work/ordumonde",
              awards: [
                {
                  title: "QUI SOMMES-NOUS",
                  description:
                    "\u201cOR DU MONDE : une histoire de famille aux valeurs partag\xe9es\u201d",
                },
                {
                  title: "MANIFESTE.",
                  description:
                    "\u201cLes bijoux sont symboles d'amour et ont de tout temps \xe9t\xe9 fabriqu\xe9s, port\xe9s, offerts, ils appartiennent \xe0 notre imaginaire collectif. Transmissibles, \xe9ternels, ils portent en eux un h\xe9ritage ancestral et la promesse du bonheur \xe0 venir..\u201d",
                },
                {
                  title: "NOS VALEURS.",
                  description:
                    "\u201cLA QUALIT\xc9 Notre valeur fondatrice : r\xe9aliser des bijoux de la plus belle qualit\xe9 sertis de diamants \xe9thiques exceptionnels et de pierres aux couleurs \xe9clatantes. L'HUMAIN : En garantissant des diamants libres d'atteintes aux droits de l'Homme et en soutenant l'artisanat fran\xe7ais nous mettons l'humain au c\u0153ur de nos pr\xe9occupations LA DURABILIT\xc9: En favorisant l'or recycl\xe9 et en privil\xe9giant l'utilisation responsable des ressources, nous fabriquons des bijoux \xe9co-friendly con\xe7us pour durer toute une vie . L'ENVIRONNEMENT:Tous nos diamants sont extraits dans le strict respect des standards internationaux en mati\xe8re d'\xe9cologie afin de prot\xe9ger la nature et les \xe9cosyst\xe8mes locaux.\u201d",
                },
              ],
            },
            {
              title: "Waced",
              mainImg: nn,
              secondaryImg: tn,
              url: "/work/waced",
              awards: [
                {
                  title: "QUI SOMMES-NOUS",
                  description:
                    "\u201cWaced est une grande soci\xe9t\xe9e d'immobilier situ\xe9e au \xc9tats-Unis \u201d",
                },
              ],
            },
            {
              title: "Space Traveling",
              mainImg: Xe,
              url: "/work/spacetraveling",
              secondaryImg: $e,
              awards: [
                {
                  title: "About",
                  description:
                    "\u201cSpace Traveling est une magnifique solution qui represente les recherches atteinte par rapport a tout ce qui est en relation avec le voyage dans l'espace.\u201d",
                },
              ],
            },
            {
              title: "Vortex Crypto Trading",
              mainImg: Ke,
              url: "/work/the-racer",
              secondaryImg: en,
              awards: [
                {
                  title: "About",
                  description:
                    "\u201cVortex est une platform de crypto trading cr\xe9e pour simplifier le m\xe9tier de trading.\u201d",
                },
              ],
            },
          ]
        },
        rn = Object(f.b)(g.b.div)(
          se || (se = Object(O.a)(["\n  color: white;\n"]))
        ),
        cn = f.b.div(
          oe ||
            (oe = Object(O.a)([
              "\n  min-height: 90vh;\n  padding-top: 20vh;\n  position: relative;\n  h2 {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -10%);\n  }\n  img {\n    width: 100%;\n    height: 70vh;\n    object-fit: cover;\n  }\n",
            ]))
        ),
        sn = f.b.div(
          de ||
            (de = Object(O.a)([
              "\n  display: flex;\n\n  align-items: center;\n\n  justify-content: space-around;\n  @media (max-width: 1500px) {\n    display: block;\n    padding: 2rem 2rem;\n  }\n",
            ]))
        ),
        on = f.b.div(
          le ||
            (le = Object(O.a)([
              "\n  padding: 5rem;\n  h3 {\n    font-size: 2rem;\n  }\n  .line {\n    width: 100%;\n    background: #008711;\n    height: 0.5rem;\n    margin: 1rem 0rem;\n  }\n  p {\n    padding: 2rem 0rem;\n  }\n",
            ]))
        ),
        dn = f.b.div(
          be ||
            (be = Object(O.a)([
              "\n  min-height: 50vh;\n  img {\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n  }\n  @media (max-width: 550px) {\n    min-height: auto;\n    img {\n      object-fit: fill;\n      height: auto;\n    }\n  }\n",
            ]))
        ),
        ln = function (e) {
          var n = e.title,
            t = e.description
          return Object(y.jsxs)(on, {
            children: [
              Object(y.jsx)("h3", { children: n }),
              Object(y.jsx)("div", { className: "line" }),
              Object(y.jsx)("p", { children: t }),
            ],
          })
        },
        bn = function () {
          var e = Object(u.f)().location.pathname,
            n = Object(h.useState)(an),
            t = Object(J.a)(n, 1)[0],
            i = Object(h.useState)(null),
            a = Object(J.a)(i, 2),
            r = a[0],
            c = a[1]
          return (
            Object(h.useEffect)(
              function () {
                var n = t.filter(function (n) {
                  return n.url === e
                })
                c(n[0])
              },
              [t, e]
            ),
            Object(y.jsx)(y.Fragment, {
              children:
                r &&
                Object(y.jsxs)(rn, {
                  variants: M,
                  initial: "hidden",
                  animate: "show",
                  exit: "exit",
                  children: [
                    Object(y.jsxs)(cn, {
                      children: [
                        Object(y.jsx)("h2", { children: r.title }),
                        Object(y.jsx)("img", { src: r.mainImg, alt: "movie" }),
                      ],
                    }),
                    Object(y.jsx)(sn, {
                      children: r.awards.map(function (e) {
                        return Object(y.jsx)(
                          ln,
                          { title: e.title, description: e.description },
                          e.title
                        )
                      }),
                    }),
                    Object(y.jsx)(dn, {
                      children: Object(y.jsx)("img", {
                        src: r.secondaryImg,
                        alt: "movie",
                      }),
                    }),
                  ],
                }),
            })
          )
        },
        jn = Object(f.b)(g.b.div)(
          je ||
            (je = Object(O.a)([
              "\n  min-height: 100vh;\n  overflow: hidden;\n  padding: 5rem 10rem;\n  @media (max-width: 1300px) {\n    padding: 2rem 2rem;\n  }\n\n  h2 {\n    padding: 1rem 0rem;\n  }\n",
            ]))
        ),
        hn = f.b.div(
          he ||
            (he = Object(O.a)([
              "\n  padding-bottom: 10rem;\n  .line {\n    height: 0.5rem;\n    background: #008711;\n    margin-bottom: 3rem;\n  }\n  img {\n    width: 100%;\n    height: 70vh;\n    object-fit: cover;\n  }\n",
            ]))
        ),
        mn = f.b.div(me || (me = Object(O.a)(["\n  overflow: hidden;\n"]))),
        pn = Object(f.b)(g.b.div)(
          pe ||
            (pe = Object(O.a)([
              "\n  position: fixed;\n  left: 0;\n  top: 10%;\n  width: 100%;\n  height: 100vh;\n  background: #fffebf;\n  z-index: 2;\n",
            ]))
        ),
        xn = Object(f.b)(pn)(
          xe || (xe = Object(O.a)(["\n  background: #ff8efb;\n"]))
        ),
        un = Object(f.b)(pn)(
          ue || (ue = Object(O.a)(["\n  background: #8ed2ff;\n"]))
        ),
        gn = Object(f.b)(pn)(
          ge || (ge = Object(O.a)(["\n  background: #8effa0;\n"]))
        ),
        On = function () {
          return Object(y.jsxs)(jn, {
            variants: M,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            style: { background: "#fff" },
            children: [
              Object(y.jsx)(Ae, {}),
              Object(y.jsxs)(g.b.div, {
                variants: L,
                children: [
                  Object(y.jsx)(pn, { variants: R }),
                  Object(y.jsx)(xn, { variants: R }),
                  Object(y.jsx)(un, { variants: R }),
                  Object(y.jsx)(gn, { variants: R }),
                ],
              }),
              Object(y.jsxs)(hn, {
                children: [
                  Object(y.jsx)(g.b.h2, { variants: A, children: "OrDuMonde" }),
                  Object(y.jsx)(g.b.div, { variants: U, className: "line" }),
                  Object(y.jsx)(x.b, {
                    to: "/work/ordumonde",
                    children: Object(y.jsx)(mn, {
                      children: Object(y.jsx)(g.b.img, {
                        variants: D,
                        src: Ze,
                        alt: "ordumonde",
                      }),
                    }),
                  }),
                ],
              }),
              Object(y.jsxs)(hn, {
                children: [
                  Object(y.jsx)("h2", { children: "Vortex Crypto Trading" }),
                  Object(y.jsx)("div", { className: "line" }),
                  Object(y.jsx)(x.b, {
                    to: "/work/the-racer",
                    children: Object(y.jsx)("img", { src: Ke, alt: "vortex" }),
                  }),
                ],
              }),
              Object(y.jsxs)(hn, {
                children: [
                  Object(y.jsx)("h2", { children: "Waced" }),
                  Object(y.jsx)("div", { className: "line" }),
                  Object(y.jsx)(x.b, {
                    to: "/work/waced",
                    children: Object(y.jsx)("img", { src: nn, alt: "waced" }),
                  }),
                ],
              }),
              Object(y.jsxs)(hn, {
                children: [
                  Object(y.jsx)("h2", { children: "Space Traveling" }),
                  Object(y.jsx)("div", { className: "line" }),
                  Object(y.jsx)(x.b, {
                    to: "/work/spacetraveling",
                    children: Object(y.jsx)("img", {
                      src: Xe,
                      alt: "spacetraveling",
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        fn = function () {
          var e = Object(u.g)()
          return Object(y.jsxs)(y.Fragment, {
            children: [
              Object(y.jsx)(v, {}),
              Object(y.jsx)(z, {}),
              Object(y.jsx)(g.a, {
                exitBeforeEnter: !0,
                children: Object(y.jsxs)(
                  u.c,
                  {
                    location: e,
                    children: [
                      Object(y.jsx)(u.a, {
                        path: "/",
                        exact: !0,
                        children: Object(y.jsx)(Ge, {}),
                      }),
                      Object(y.jsx)(u.a, {
                        path: "/work",
                        exact: !0,
                        children: Object(y.jsx)(On, {}),
                      }),
                      Object(y.jsx)(u.a, {
                        path: "/work/:id",
                        children: Object(y.jsx)(bn, {}),
                      }),
                      Object(y.jsx)(u.a, {
                        path: "/contact",
                        children: Object(y.jsx)(Qe, {}),
                      }),
                    ],
                  },
                  e.pathname
                ),
              }),
            ],
          })
        },
        vn = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 56))
              .then(function (n) {
                var t = n.getCLS,
                  i = n.getFID,
                  a = n.getFCP,
                  r = n.getLCP,
                  c = n.getTTFB
                t(e), i(e), a(e), r(e), c(e)
              })
        }
      p.a.render(
        Object(y.jsx)(x.a, { children: Object(y.jsx)(fn, {}) }),
        document.getElementById("root")
      ),
        vn()
    },
  },
  [[53, 1, 2]],
])
//# sourceMappingURL=main.5ac2d95b.chunk.js.map
