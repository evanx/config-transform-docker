
# config-transform-docker

Input JSON or JS config and

## Test

```
echo "module.exports = {
    url: 'https://news.ycombinator.com',
    selector: 'a.storylink',
    query: 'all'
};" | docker run -i evanxsummers/config-transform-docker
```

The output is the following:
```
-e url='https://news.ycombinator.com' \
-e selector='a.storylink' \
-e query='all' \
```

We can use `first` and `last` to prepend and append those lines to the output:
```
curl -s https://raw.githubusercontent.com/evanx/config-transform-docker/master/test/config.js |
  docker run -i \
  -e prepend='docker run' \
  -e append='evanxsummers/phantomjs-query' \
  evanxsummers/config-transform-docker
```  
```
```

which could then be piped into `bash` e.g.
```
curl -s https://raw.githubusercontent.com/evanx/config-transform-docker/master/test/config.js |
  first='docker run' last='evanxsummers/phantomjs-query' \
  docker run -i evanxsummers/config-transform-docker | bash -x
```  
