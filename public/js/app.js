(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
if(document.querySelector('.ratio')){
  var ratioElement = document.querySelector('.project-featured_image');
  ratio();
  window.onresize = function(){
    ratio();
  }
  if(document.querySelector('.project-featured-container')){
    var elementDistance = document.querySelector('.project-featured-container');
    var distance = elementDistance.offsetTop;
    document.addEventListener("DOMContentLoaded", function(event) {
      window.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        if((offset + 300) > distance){
          elementDistance.classList.add('active');
        }
      });
      var offset = window.pageYOffset;
      if((offset + 200) > distance){
        elementDistance.classList.add('active');
      }
    });
  }
}
function ratio(){
  var ratioElement = document.querySelectorAll('.ratio');
  for(let i = 0; i < ratioElement.length; i++){
    var width = ratioElement[i].offsetWidth;
    var height = width * 9 / 16;
    ratioElement[i].setAttribute("style", "height: " + height + "px");
    let html = document.getElementsByTagName('html')[0];
    html.setAttribute("style", "--height: " + height + "px");
  }
}

if(document.querySelector('.skip-content')){
  var cursorFocus = function(elem) {
    var x = window.scrollX, y = window.scrollY;
    elem.focus();
    // window.scrollTo(0, 0);
  }
  var skip = document.querySelector('.skip-content');
  var focus = document.querySelector('#content');
  skip.addEventListener('click', function(e){
    e.preventDefault();
    cursorFocus(focus);
  });
}

let allLinks = document.querySelectorAll('main a');

for(let i = 0; i < allLinks.length; i++){
  allLinks[i].addEventListener('focus', function(e){
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let target = e.target;
    let height = e.target.offsetHeight;
  });
}

},{}]},{},[1]);
