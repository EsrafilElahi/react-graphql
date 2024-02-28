# ======================================== Stage 1: install dependencies
FROM node:20-alpine3.17 as deps

WORKDIR /app

COPY package.json yarn.lock ./ 

RUN yarn install



# ======================================== Stage 2: run dev mode
FROM deps AS dev

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev" ]



# ======================================== Stage 3: build app
FROM deps as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn add typescript

RUN yarn build



# ======================================== Stage 5: run app in staging server
FROM builder as staging

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist .

ENV NODE_ENV development 

EXPOSE 4173

CMD [ "yarn", "preview" ]



# ======================================== Stage 6: run app in production server
FROM builder as prod

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist .

ENV NODE_ENV production 

EXPOSE 4173

CMD [ "yarn", "preview" ]
