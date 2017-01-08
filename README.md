
# config-transform-docker

Input JSON or JS config and

## Test

```
cat '
module.exports = {
    url: 'https://news.ycombinator.com',
    selector: 'a.storylink',
    query: 'all'
};
' | docker run evanxsummers/config-transform-docker
```
where the `first` and `last` lines of the output can be specified.

The output is the following:
```
```
which could then be piped into `bash` e.g.
```
cat https://raw.githubusercontent.com/evanx/config-transform-docker/master/test/config.js | (
  echo 'docker run -d \\'
  docker run evanxsummers/config-transform-docker |
  echo '  authbot:latest'
) | bash -x
```  
