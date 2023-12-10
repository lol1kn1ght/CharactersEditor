FROM node:20-alpine

WORKDIR /prod

COPY . .

RUN npm i && npm i serve -g
RUN GENERATE_SOURCEMAP=false npm run build
CMD ["serve", "-s", "build", "-l","3000"]   