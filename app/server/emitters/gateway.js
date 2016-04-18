var EventEmitter = require('events').EventEmitter;


var Gateway = function (io) {
    if ( ! (this instanceof Gateway)) {
        return new Gateway();
    }

    EventEmitter.call(this);

    var self        = this,
        init_length = 10,
        // 0's array of size init_length
        init_data   = Array.apply(null, Array(init_length)).map(Number.prototype.valueOf, 0);

    io.sockets.on('connection', function (socket) {
        socket.emit('prefetch', init_data);

        self.on('readings', function (readings) {
            socket.emit('readings', readings);
        });
    });
};

Gateway.prototype = Object.create(EventEmitter.prototype);


module.exports = Gateway;
