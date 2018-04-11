if(document.querySelector('.project-featured_image')){
  var ratioElement = document.querySelector('.project-featured_image');
  setTimeout(function(){
    ratio();
  }, 1);
  window.onresize = function(){
    ratio();
  }
  var elementDistance = document.querySelector('.project-featured-container');
  var distance = elementDistance.offsetTop;
  window.addEventListener('scroll', function(e){
    var offset = window.pageYOffset;
    if((offset) > distance){
      elementDistance.classList.add('active');
    }
  });
}
function ratio(){
  var ratioElement = document.querySelector('.project-featured_image')
  var width = ratioElement.offsetWidth;
  var height = width * 9 / 16;
  ratioElement.setAttribute("style", "height: " + height + "px");
}
