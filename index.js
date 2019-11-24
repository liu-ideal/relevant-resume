"use strict";
let toWrite =new Object();
toWrite.professionalSkillH2=`前端框架`;
toWrite.professionalSkill=`## vue react
手动搭建node生态圈下的开发环境,主要是使用webpack
手写过一个脚手架工具 liu-node-cli (框架官方cli配置项功能太多,配置比较乱)已在npm上线可以使用
注:还不会react native`;

toWrite.basicInformation=` 姓名： 刘培
  求职意向： web 前 端 开 发
 email: liuideal@sina.com
github: http://github.com/liu-ideal
主要技术栈:vue react nodejs
`;
toWrite.programWorksH2=`服务端`;
toWrite.programWorks=`
主要是使用Nodejs打包项目并上线
使用过mysql也写过一点PHP接口
熟悉前后端合作协同开发,沟通统一的数据格式,遇到问题合作解决
`;
toWrite.othersH2=`其他`
toWrite.others=`
  会微信小程序开发 web移动端 处理响应式页面需求
`
toWrite.styleCode=`

*{
  padding: 0;
  margin: 0;
  transition: all .3s;
}

html{
  height: 100%;
}

body{
  background-color: rgb(29, 45, 51);
  font-family: 'Arial','Microsoft YaHei';
  font-size: 15px;
  height: 100%;
}

pre{overflow-y: scroll;height: 100%;}

.generalContainer{
  color: rgb(247, 245, 242);
  display: flex;
  padding: 15px;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100vh;
  box-sizing: border-box;
}

.generalContainer .writeCodeWrap{
  flex-grow: 0;
  height: 100%;
  font-size: 12px;
}

.generalContainer .writeResume{
  flex-grow: 1;
  margin-left: 40px;
  background-color: rgb(246, 244, 240);
  overflow: auto;
  padding:0 30px;
}

.generalContainer .writeCodeWrap .writeCode{
  box-sizing: border-box;
  padding: 10px 0 0 8px;
  height:100%;
  border: 1px solid rgb(70, 71, 74);

}

.generalContainer .writeResume{
  white-space: pre;
  color: rgb(0, 0, 0)
}

.generalContainer .writeResume .basicInformation{
  text-align: center;
}

h2{
  font-size: 19px;
  color: rgb(72, 106, 164);
  text-indent: 30px;
  border-bottom: 1px solid black;
}

.writeResume{
  line-height: 32px;
}
.writeResume .projectExp{
  margin-top:-80px;
}
`;
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
let playMusic=(function(){
  let targetElement=document.querySelector('#startPlay');

  function goPlay(){
    if(targetElement.play){
      targetElement.oncanplay=targetElement.play;
        targetElement.play()
    }
  };
  function stopPlay(){
    if(targetElement.pause){
      targetElement.pause()
    }
  };
  return {
    goPlay:goPlay,
    stopPlay:stopPlay
  }
})();

wrap.insert();
document.body.onclick=function(){  //解决chrome浏览器不自动播放音乐的问题
  playMusic.goPlay();
  this.onclick='';
};
document.querySelector('.iconfont').addEventListener('click',()=>{
  let targetElement=document.querySelector('#startPlay');
    targetElement.paused?playMusic.goPlay():targetElement.pause()
},false)
let writeResumeO=document.querySelector('.writeResume');
let writeCodeO=document.getElementsByClassName('writeCode')[0];
let timer=null;
let promise=new Promise(function(resolve,reject){
  let headO = document.getElementsByTagName('head')[0];
  let styleO = document.createElement('style');
  let writeCodeO=document.getElementsByTagName("pre")[0];
  styleO.setAttribute('type','text/css'),headO.appendChild(styleO);
  let codeContainer=document.getElementsByClassName('writeCode')[0].getElementsByTagName('code')[0];
  let n=0;
  timer=setInterval(()=>{
    if(n>toWrite.styleCode.length){
      clearInterval(timer);
      resolve();
      return
    }
    codeContainer.innerHTML=toWrite.styleCode.substring(0,n);
    styleO.innerHTML=toWrite.styleCode.substring(0,n);
      hljs.initHighlightingOnLoad();
     writeCodeO.scrollTop=9999;
    n++;
  },10)
});
/*--------------------*/
promise.then(function(value){
  return new Promise(infomation)
}).then(function(value){
  return new Promise(fnn)
}).then(function(value){
  return new Promise(function(resolve){
    let n =0;
    let skillsPO=document.querySelector('.writeResume .skills p');
   timer=setInterval(()=>{
      if(n>toWrite.professionalSkill.length){
        clearInterval(timer);
        resolve();
        return
      }
      skillsPO.innerHTML=toWrite.professionalSkill.substring(0,n);
      writeResumeO.scrollTop=9999;
      n++
    },10)
  })
}).then(function(){
  return new Promise(function(resolve){
let n=0;
let expH2=document.querySelector('.writeResume .projectExp h2');
timer=setInterval(()=>{
  if(n>toWrite.programWorksH2.length){
    clearInterval(timer);
    resolve();
    return
  }
  expH2.innerHTML=toWrite.programWorksH2.substring(0,n);
  writeResumeO.scrollTop=9999;
  n++
},10)
})
}

  ).then(function(value){
    return new Promise(function(resolve){
      let n=0;
      let expP=document.querySelector('.writeResume .projectExp p');
      timer=setInterval(()=>{
        if(n>toWrite.programWorks.length){
          clearInterval(timer);
          resolve();
          return
        }
        expP.innerHTML=toWrite.programWorks.substring(0,n);
        writeResumeO.scrollTop=9999;
        n++
      },10)
    })

  }).then(function(value){
    toResult()
  })
function infomation(resolve){
  let n =0;
  let infO=document.querySelector('.basicInformation');
   timer=setInterval(()=>{
    if(n>toWrite.basicInformation.length){
      clearInterval(timer);
      resolve();
      return
    }
    infO.innerHTML=toWrite.basicInformation.substring(0,n);
    writeResumeO.scrollTop=9999;
    n++
  },10)
}

function fnn(resolve){
  let n =0;
  let skillsH2O=document.querySelector('.writeResume .skills h2');
   timer=setInterval(()=>{
    if(n>toWrite.professionalSkillH2.length){
      clearInterval(timer);
      resolve();
      return
    }
    skillsH2O.innerHTML=toWrite.professionalSkillH2.substring(0,n);
    writeResumeO.scrollTop=9999;
    n++
  },10)
}
document.querySelector("#ending").addEventListener('click',function(){
  let codeContainer=document.getElementsByClassName('writeCode')[0].getElementsByTagName('code')[0];
  codeContainer.innerHTML=toWrite.styleCode;
  hljs.initHighlightingOnLoad();
  setTimeout(function(){
    writeCodeO.scrollTop=9999;
  },1500)
  toResult()
},false)
function toResult(){
  document.querySelector('.writeResume').style.display='none';
  document.querySelector("#ending").style.display='none';
  document.querySelector('#writeResume').style.display='block';
  writeCodeO.scrollTop=9999;
  let linker=document.createElement('link');
  linker.setAttribute('rel','stylesheet');
  linker.setAttribute('href','./need_add.css');
  document.querySelector('head').appendChild(linker);
  clearInterval(timer);
  wrap.del()
}
