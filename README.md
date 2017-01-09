
# config-transform-docker

Containerized util to format a docker run CLI with -e environment variables from input JSON or JS.

## Test

```
echo "module.exports = {
    url: 'https://news.ycombinator.com',
    selector: 'a.storylink',
    query: 'all',
    limit: 3,
    output: 'json'
};" | docker run -i evanxsummers/config-transform-docker
```

The output is the following:
```
-e url='https://news.ycombinator.com' \
-e selector='a.storylink' \
-e query='all' \
-e limit='3' \
-e output='json' \
```
where the properties have merely been reformatted with `-e` suitable for `docker run`

Optionally use `prepend` and `append`
```
curl -s https://raw.githubusercontent.com/evanx/config-transform-docker/master/test/config.js |
  docker run -i -e prepend='docker run' -e append='evanxsummers/phantomjs-query' \
  evanxsummers/config-transform-docker | tee ~/tmp/docker.run.sh
```
to specify the first and last lines for a ready-made `docker run` script e.g.
```
docker run \
  -e url='https://news.ycombinator.com' \
  -e selector='a.storylink' \
  -e query='all' \
  -e limit='3' \
  -e output='json' \
  evanxsummers/phantomjs-query
```
where the first line i.e. `docker run` and the last line i.e. `evanxsummers/phantomjs-query` were configuration options for the `config-transform-docker` utility. The `-e` lines are according to the configuration file piped into the utility.
