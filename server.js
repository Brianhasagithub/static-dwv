var express = require('express'),
app = express();

var app = express()
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});
app.use('/', express.static(__dirname));
app.listen('8080');
