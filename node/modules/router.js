var express = require('express')
var app = express()


var routes = [
  {
    location: '/',
    name: 'home',
    baseFile: 'index',
    data: {
      test: 123
    }
  },
  {
    location: '/:bedrijf',
    name: 'details',
    baseFile: 'index',
    data: {
      test: 123
    }
  }
];


const router = {
  init: function(){
    router.settings();

    for(let i = 0; i < routes.length; i++){
      if(routes[i].data){
        app.get(routes[i].location, function(req, res){
          var routePath = routes[i].baseFile + '.ejs';
          res.render(routePath, {session: req.session});
        });
      }
      else{
        app.get(routes[i].location, function(req, res){
          res.send('hello world');
        });
      }
    }
  },
  settings: function(){
    //use static files served from public folder
    app.use(express.static('public'))

    //user view engine ejs
    app.set('view engine', 'ejs');
    //get views from src/views folder
    app.set('views', 'src/views');

  },
};

var server = app.listen(1337, function () {
   console.log('server is running on port 1337')
});


module.exports = router;
