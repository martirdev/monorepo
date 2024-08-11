declare module "bun" {
  interface Env {
    YANDEX_CLIENT_ID: string;
    YANDEX_CLIENT_SECRET: string;

    DB_POSTGRESS_URL: string;
  }
}
