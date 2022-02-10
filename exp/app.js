const createError = require('http-errors');
const express = require('express');
const app = express();
const router = express.Router();
const url = require('url');
const port = 3000;

app.use(function (req, res, next) {
    if (req.url === '/home') {
        res.send('Home');
    } else {
        next()
    }
});

app.use('/forbidden', function (req, res) {
    const urlData = url.parse(req.url, true);
    if (urlData.search === '?secret=true') {
        res.end('Access approved')
    } else {
        res.end('Access denied')
    }
})

app.listen(port)

app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = router;
module.exports = app;