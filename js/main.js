window.onload = function() {

  // initial for carousel
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

  // initial for tablist
  (function() {
    var listIcon = document.querySelector('.tablist-icon');
    var list = document.querySelector('.tablist');
    var lis = document.querySelectorAll('.tablist-item');
    var width = list.offsetWidth;
    list.style.left = '-' + width + 'px';
    listIcon.onclick = listOut;
    listIcon.style.top = lis[3].offsetTop + 'px';

    function listOut() {
      listIcon.style.left = width + 'px';
      listIcon.style.opacity = '.8';
      list.style.left = '0';
      listIcon.onclick = listIn;
    }

    function listIn() {
      listIcon.style.left = '0';
      listIcon.style.opacity = '.5';
      list.style.left = '-' + width + 'px';
      listIcon.onclick = listOut;
    }
  })();
};