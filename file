FROM mhart/alpine-node

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN npx next telemetry disable

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
