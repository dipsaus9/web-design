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
      if((offset + 300) > distance){
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
  }
}
