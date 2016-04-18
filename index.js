var path = require('path'),

    express = require('express'),
    socket  = require('socket.io'),

    logger = require('morgan'),
    parser = require('body-parser'),

    Gateway = require('./app/server/emitters/gateway'),

    app          = express(),
    http_gateway = express();


var HUB_PORT          = process.env.HUB_PORT || 8000;
var HTTP_GATEWAY_PORT = process.env.HTTP_GATEWAY_PORT || 8080;

// Initialize Hub
app.use(logger('dev'));

// Hub serves static files
app.set('views', path.join(__dirname + '/app/server/views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(__dirname + '/less'));
}

app.use(express.static(__dirname + '/app/client'));

// The only route that is necessary to serve dashboard
app.get('/', function (req, res) {
    res.render('dashboard');
});

// Hub runs on HUB_PORT
var io = socket.listen(app.listen(HUB_PORT));


// Initialize gateway
var gateway = new Gateway(io);


// Initialize HTTP gateway
http_gateway.use(logger('dev'));
http_gateway.use(parser.urlencoded({ extended: true }));
http_gateway.use(parser.json());

// HTTP API
http_gateway.use('/', require(__dirname + '/app/server/controllers/index.js')(gateway));

// HTTP gateway runs on HTTP_GATEWAY_PORT
http_gateway.listen(HTTP_GATEWAY_PORT);
