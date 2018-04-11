if(document.querySelector('.project-featured_image')){
  var ratioElement = document.querySelector('.project-featured_image');
  setTimeout(function(){
    ratio();
  }, 1);
}
function ratio(){
  var ratioElement = document.querySelector('.project-featured_image')
  var width = ratioElement.offsetWidth;
  var height = width * 9 / 16;
  ratioElement.setAttribute("style", "height: " + height + "px");
}
