
# config-transform-docker

Input JSON or JS config and

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
where the `first` and `last` lines of the output can be specified.

The output is the following:
```
  -e domain='authtest.webserva.com' \
  -e port='8841' \
  -e admin='evanxsummers' \
  -e bot='ExTestAuthBot' \
  -e logging='debug' \
```
which could then be piped into `bash` e.g.
```
cat test/config.js | (
  echo 'docker run -d \\'
  docker run evanxsummers/config-transform-docker |
  echo '  authbot:latest'
) | bash -x
```  
