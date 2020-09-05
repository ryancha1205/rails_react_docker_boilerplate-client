## development
### Before run client(without Docker)
```
$ cd ../server
$ bin/rails s -p 3020
```

### Before run client(with Docker)
```
$ cd ../server
$ docker-compose up
```

### without Docker
```sh
$ npm install
$ npm start
```

### with Docker
```sh
$ docker build -t client .
$ docker run -it --rm -v $(pwd):/client -p 3000:3000 client:latest npm start
```
