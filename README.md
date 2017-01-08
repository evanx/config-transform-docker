
# config-transform-docker



## Test

```
cat '
module.exports = {
    domain: 'authtest.webserva.com',
    port: 8841,
    admin: 'evanxsummers',
    bot: 'ExTestAuthBot',
    logging: 'debug'
};
' | docker run evanxsummers/config-transform-docker
```

```
docker run \
  -e domain='authtest.webserva.com' \
  -e port='8841' \
  -e admin='evanxsummers' \
  -e bot='ExTestAuthBot' \
  -e logging='debug' \
  authbot
evans@eowyn:~/config-transform-docker$ cat test/config.js
```
