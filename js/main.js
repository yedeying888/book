window.onload = function() {
  (function(){
    var startX;
    var endX;
    var width = screen.width;
    var more = document.querySelector('.more');
    var lis = document.querySelectorAll('.carousel-inner img');
    for(var i = 0; i < lis.length; i++) {
      var li = lis[i];
      li.addEventListener('touchstart', start, false);
      li.addEventListener('mousedown', start, false);
      li.addEventListener('touchmove', move, false);
      li.addEventListener('mousemove', move, false);
      li.addEventListener('touchend', end, false);
      li.addEventListener('mouseup', end, false);
    }
    function start(e) {
      e.preventDefault();
      e = e.targetTouches ? e.targetTouches[0] : e;
      startX = e.pageX;
    }
    function move(e) {
      e.preventDefault();
      e = e.targetTouches ? e.targetTouches[0] : e;
      endX = e.pageX;
    }
    function end(e) {
      var x = endX - startX;
      if(x < -20) {
        $('.carousel').carousel('next');
      } else if(x > 20) {
        $('.carousel').carousel('prev');
      }
      e.preventDefault();
    }
  })();
};