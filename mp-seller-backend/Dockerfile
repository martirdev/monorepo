FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN apt-get update && \
    apt-get install wget --yes && \
    mkdir --parents ~/.mongodb && \
    wget "https://storage.yandexcloud.net/cloud-certs/CA.pem" \
    --output-document ~/.mongodb/root.crt && \
    chmod 0644 ~/.mongodb/root.crt

RUN bun install --production

COPY src src
COPY tsconfig.json .
COPY prisma prisma

ENV NODE_ENV production
CMD ["bun", "run", "start:prod"]

EXPOSE 8080
