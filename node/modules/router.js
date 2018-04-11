var express = require('express')
var app = express()
var projects = require('./projects.js');

var routes = [
  {
    location: '/',
    name: 'home',
    baseFile: 'index',
    data: projects[0]
  },
  {
    location: '/projects',
    name: 'overzicht',
    baseFile: 'projects',
    data: projects
  },
  {
    location: '/contact',
    name: 'contact',
    baseFile: 'contact'
  }
];
//create detail page for every project ther is
let allUrl = [];
for(let i = 0; i < projects.length; i++){
  if(!allUrl.includes(projects[i].url)){
    allUrl.push(projects[i].url);
    projects[i].id = i;
    let location = '/projects/' + projects[i].url;
    let obj = {
      location: location,
      name: 'overzicht',
      baseFile: 'detailProject',
      data: projects[i]
    }
    routes.push(obj);
  }
}
const router = {
  init: function(){
    router.settings();
    for(let i = 0; i < routes.length; i++){
      if(routes[i].baseFile){
        app.get(routes[i].location, function(req, res){
          var routePath = routes[i].baseFile + '.ejs';
          res.render(routePath, routes[i]);
        });
      }
      else{
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
