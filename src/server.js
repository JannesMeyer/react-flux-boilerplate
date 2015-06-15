import express from 'express';
import logger from 'morgan';
import path from 'path';

const absolutePath = path.join.bind(path, __dirname);
const STATIC_DIR   = absolutePath('..', 'public');
const PORT         = process.env.PORT || 8000;
const ONE_YEAR     = 31557600000;
const JSON_HEADER  = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
  'Vary': 'Accept'
};

// Setup Express
var app = express();
app.use(express.static(STATIC_DIR, { maxAge: ONE_YEAR }));
app.use(logger('dev'));

// Print errors in development
if (__DEV__) {
  app.use((err, req, res, next) => {
    res.status(500).send('<pre>' + err.stack + '</pre>');
  });
}

// Start server
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});