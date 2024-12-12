import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Оффициальный сайт бренда",
    short_name: "MARTIR",
    description:
      "Официальный сайт бренда MARTIR. Только оригинальная продукция. Фирменный стиль в духе панк-эстетики, который подчёркивает индивидуальность и стремление к экспериментам.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.ico",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
