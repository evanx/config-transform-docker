FROM mhart/alpine-node
ADD package.json .
RUN npm install
ADD components .
ADD src .
CMD ["node", "--harmony", "src/index.js"]
