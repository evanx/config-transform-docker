FROM mhart/alpine-node
ADD package.json .
RUN npm install
ADD src app
CMD ["node", "--harmony", "app/index.js"]
