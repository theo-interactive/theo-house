FROM node:16-alpine3.12 as BUILD_IMAGE
WORKDIR /theo-house
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:16-alpine3.12
WORKDIR /theo-house

COPY --from=BUILD_IMAGE /theo-house/package.json ./package.json
COPY --from=BUILD_IMAGE /theo-house/node_modules ./node_modules
COPY --from=BUILD_IMAGE /theo-house/build ./build
COPY --from=BUILD_IMAGE /theo-house/public ./public
COPY --from=BUILD_IMAGE /theo-house/server ./server

EXPOSE 3000
CMD ["yarn", "start"]
