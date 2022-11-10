document.onmousemove = function(e){
  let coord = document.querySelector('.header_y1').getBoundingClientRect(),
      x = e.x-coord.left,
      y = e.y-coord.top;
  
      document.querySelector('.header_y1').style.transform = 'rotate('+ 57.2958 * arcctg(x,y) +'deg)';
  
      document.querySelector('.header_y3').style.transform = 'rotate('+ 57.2958 * arcctg(x+35,y) +'deg)';
  
  function arcctg(x,y){
    if(x < 0 && y < 0) return Math.PI/2 - Math.atan(x/y);
    if(x > 0 && y < 0) return Math.PI/2 - Math.atan(x/y);
    if(x > 0 && y > 0) return Math.PI + Math.atan(y/x);
    if(x < 0 && y > 0) return 3*Math.PI/2 + Math.abs(Math.atan(x/y));
  }
}