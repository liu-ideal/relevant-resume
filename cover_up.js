"use strict";
let wrap=(function(){
  let wrap=document.createElement('div');
  wrap.style.position='fixed';
  wrap.style.width='100%';
  wrap.style.height='100%';
  wrap.style.backgroundColor='rgba(0,0,0,0.1)';
  wrap.style.top=0;
  wrap.style.left=0;
  function insert(zindex){
    document.querySelector('body').appendChild(wrap);
    wrap.style.zIndex=zindex||99;
  }
  function del(){
    document.querySelector('body').removeChild(wrap)
  }
  return {
    insert:insert,
    del:del
  }
})();
module.exports=wrap;
