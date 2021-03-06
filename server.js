'use strict';

var restify = require('restify'),
    server = restify.createServer({name: 'node-test-app'});

server.get('/hello/:name', function (req, res, next) {
    res.send({hello: req.params.name});
});

server.get('/', function (req, res, next) {
    res.send({welcome: 'oblivion'});
});

server.listen(process.env.PORT || '8080', function () {
    console.log('%s listening at %s', server.name, server.url);
});
