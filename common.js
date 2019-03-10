/*动态改变根元素字体大小*/
function recalc() {
  var clientWidth = document.documentElement.clientWidth;
  if (!clientWidth) return;
  document.documentElement.style.fontSize = 100 * (clientWidth / 640) + 'px';//此640是设计图宽度
}
function initRecalc(){
	recalc();
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
}

initRecalc();