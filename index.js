var app = require('http');
 
app.set('port', (process.env.PORT || 5000));
  
app.get('/', function(request, response) {
  response.render('index');
});
  
app.listen(app.get('port'), function() {
 console.log('Node app is running on port', app.get('port'));
});
