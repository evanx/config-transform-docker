
# config-transform-docker

Input JSON or JS config for environment variables and format for docker run CLI

## Test

```
echo "module.exports = {
    url: 'https://news.ycombinator.com',
    selector: 'a.storylink',
    query: 'all',
    limit: 3
};" | docker run -i evanxsummers/config-transform-docker
```

The output is the following:
```
-e url='https://news.ycombinator.com' \
-e selector='a.storylink' \
-e query='all' \
-e limit='3' \
```
which can then be cut and paste e.g. into a bash script for `docker run`

Optionally use `prepend` and `append`
```
curl -s https://raw.githubusercontent.com/evanx/config-transform-docker/master/test/config.js |
  docker run -i \
  -e prepend='docker run' \
  -e append='evanxsummers/phantomjs-query' \
  evanxsummers/config-transform-docker |
  tee ~/tmp/docker.run.sh
```
to specify first and last lines together with the config for a `docker run` script
```
docker run \
  -e url='https://news.ycombinator.com' \
  -e selector='a.storylink' \
  -e query='all' \
  -e limit='3' \
  evanxsummers/phantomjs-query
```
