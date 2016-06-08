// set up ========================
    var express  = require('express');
    var app      = express();

// configuration =================
    app.set('port', (process.env.PORT || 8080));
    app.use(express.static(__dirname + '/'));

// application ========================
    app.set('views', __dirname + 'views'); // views is directory for all template files
//    app.set('view engine', 'ejs');

    app.get('/', function(request, response) {
      response.render('index'); // load the single view file (angular will handle the page changes on the front-end)
    });

// listen (start app with node server.js) ======================================
    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });


