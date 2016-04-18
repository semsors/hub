var express = require('express'),
    router  = express.Router(),

    toString = Object.prototype.toString;


module.exports = function (gateway) {

    // Format incoming JSON data as follows:
    // { "readings": Number }
    // or
    // { "readings": [Number] }
    router.post('/', function (req, res) {
        var readings = req.body.readings || [];

        if (toString.call(readings) !== '[object Array]') {
            readings = [readings];
        }

        gateway.emit('readings', readings);


        res.json({
            status: 'ok'
        });
    });


    return router;
};
