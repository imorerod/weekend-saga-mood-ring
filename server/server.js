const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const imageRouter = require('./routes/images.router');
const tagRouter = require('./routes/tags.router');
const imagesTagsRouter = require('./routes/images-tags.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/tags', tagRouter);
app.use('/image', imageRouter);
app.use('/all', imagesTagsRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});