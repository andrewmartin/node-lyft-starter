/* dependencies */
var express          = require('express');
var expressSession   = require('express-session');
var sassMiddleware   = require('node-sass-middleware');
var NeDBSessionStore = require('nedb-session-store')(expressSession);
var path             = require('path');
var bodyParser       = require('body-parser');

/* lyft API */
var Lyft = require('node-lyft');
lyft = new Lyft();

/* global configuration */
var config = require('./config');

/* controllers */
var apiLyftController   = require('./controllers/api/lyft');

/* express configuration */
app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var srcPath = __dirname + '/assets/sass';
var destPath = __dirname + '/public/styles';

app.use('/styles', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* express middleware */
app.use(
  expressSession({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 1000 /* 1 year */
    },
    store: new NeDBSessionStore({
      filename: path.join(__dirname, 'databases/sessions.db')
    })
  })
);
app.use(
  express.static(
    path.join(__dirname, 'public'),
    {maxAge: 31557600000}
  ),
  express.static(
    path.join(__dirname, 'assets'),
    {maxAge: 31557600000}
  )
);
app.use(function (req, res, next) {
  /* miscellaneous response headers */
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

/* express routing: lyft api */
app.post('/api/lyft/ridetypes', apiLyftController.getRideTypes);
app.post('/api/lyft/cost', apiLyftController.getCost);
app.post('/api/lyft/nearby-drivers', apiLyftController.getNearbyDrivers);
app.post('/api/lyft/eta', apiLyftController.getETA);

/* express routing: render */
app.get('*', function (req, res, next) {
  res.render('index', {
    GOOGLE_API_KEY: config.GOOGLE_API_KEY
  });
});

/* express invocation */
app.listen(config.PORT, function () {
  console.log([
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    'lyft-node-web-starter running',
    ' => http://localhost:' + config.PORT,
    ' => [ ctrl + c ] to quit',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ].join('\n'));
});
