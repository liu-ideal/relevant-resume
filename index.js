"use strict";
var toWrite =new Object();
toWrite.professionalSkillH2=`专业技能`;
toWrite.professionalSkill=`## Vue / bootstrap/layui ElementUi
Vue 开发经验，掌握组件及组件间数据传递($emit $on eventbus)、响应式原理、vue-router和 vuex 的使用等,理解生命周期、$nextTick
能够利用bootstrap 等UI框架快速搭建应用
会使用 rem 、媒体查询等技术制作适配移动设备的页面

## HTML5 & CSS3 & JavaScript
掌握 HTML5 新特性、深刻理解语义化
掌握 CSS3 动画、过渡、转变、弹性盒子布局、媒体查询、响应式设计等常用技术
熟悉 原生JavaScript 熟悉面向对象编程 原型链 作用域链 闭包，熟悉常用 DOM BOM 的API，了解部分ES6新特性（let const，Arrow function Promise module等）

## 其他
掌握Git 常用命令、代码管理 协同开发 远程仓库等
了解 jQuery 常用 API ，如 DOM 操作、特效、事件等
了解 TCP/IP HTTP协议 HTTP状态码
熟悉 原生AJAX JSON 前后端数据交互 跨域解决方案
理解 MVC 、 MVVM 思想
会photoshop基本操作
有使用 Webpack 打包项目的经验，了解其管理资源的方法，使用相关配置 如 loader( css-loader  file-loader) 、 plugins 等`;
toWrite.basicInformation=` 姓名： 刘培
  求职意向： web 前 端 开 发
 email: liuideal@sina.com
github: http://github.com/liu-ideal
`;
toWrite.programWorksH2=`项目经验`;
toWrite.programWorks=`音乐播放器online
技术关键字：vue 响应式 移动端 组件化 css3
项目描述：项目使用vue构建 适配移动端 实现了音乐搜索 播放等基本功能

记事本online
技术关键字：vue elment-ui
项目描述：项目实现了基本的注册登录功能 简单记事功能`;

toWrite.styleCode=`
/*您好，接下来您将会看到一个

  由代码实时编写我的个人简历的过程

  当然，您可以随时点击页面中心的跳过按钮

  来查看简历最终效果*/
  /*------下面正式开始------*/

/*首先简单的reset一下样式并添加全局过渡*/

*{
  padding: 0;
  margin: 0;
  transition: all .3s;
}
html{
  height: 100%;

}

/*添加一个深色背景*/
body{
  background-color: rgb(29, 45, 51);
  font-family: 'Arial','Microsoft YaHei';
  font-size: 15px;
  height: 100%;
}

/*给代码框设置一些样式加点边距和边框*/
.generalContainer .writeCodeWrap .writeCode{
  box-sizing: border-box;
  padding: 10px 0 0 8px;
  height:100%;
  overflow: auto;
  border: 1px solid rgb(70, 71, 74);
}

/*构建一下基本布局*/
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
}

/*写个简历框用来放简历*/
.generalContainer .writeResume{
  flex-grow: 1;
  margin-left: 40px;
  background-color: rgb(246, 244, 240);
  overflow: auto;
  padding:0 30px;
}

/*给简历部分设置写一下基本样式*/
.generalContainer .writeResume{
  white-space: pre;
  color: rgb(0, 0, 0)
}
h2{
  font-size: 19px;
  color: rgb(72, 106, 164);
  text-indent: 30px;
  border-bottom: 1px solid black;

}
.generalContainer .writeResume .basicInformation{
  text-align: center;
}
.writeResume{
  line-height: 32px;
}
.projectExp{
  margin-top:-80px;
}
/*--------开始书写简历 请看右边---------*/

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
var writeResumeO=document.querySelector('.writeResume');
var writeCodeO=document.getElementsByClassName('writeCode')[0];
let timer=null;
var promise=new Promise(function(resolve,reject){
  var headO = document.getElementsByTagName('head')[0];
  var styleO = document.createElement('style');
  var writeCodeO=document.getElementsByClassName('writeCode')[0];
  styleO.setAttribute('type','text/css'),headO.appendChild(styleO);
  var codeContainer=document.getElementsByClassName('writeCode')[0].getElementsByTagName('code')[0];
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
  },20)
});
/*--------------------*/
promise.then(function(value){
  return new Promise(infomation)
}).then(function(value){
  return new Promise(fnn)
}).then(function(value){
  return new Promise(function(resolve){
    let n =0;
    var skillsPO=document.querySelector('.writeResume .skills p');
   timer=setInterval(()=>{
      if(n>toWrite.professionalSkill.length){
        clearInterval(timer);
        resolve();
        return
      }
      skillsPO.innerHTML=toWrite.professionalSkill.substring(0,n);
      writeResumeO.scrollTop=9999;
      n++
    },20)
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
},20)
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
      },20)
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
  },20)
}

function fnn(resolve){
  let n =0;
  var skillsH2O=document.querySelector('.writeResume .skills h2');
   timer=setInterval(()=>{
    if(n>toWrite.professionalSkillH2.length){
      clearInterval(timer);
      resolve();
      return
    }
    skillsH2O.innerHTML=toWrite.professionalSkillH2.substring(0,n);
    writeResumeO.scrollTop=9999;
    n++
  },20)
}
document.querySelector("#ending").addEventListener('click',function(){
  var codeContainer=document.getElementsByClassName('writeCode')[0].getElementsByTagName('code')[0];
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
  linker.setAttribute('href','./index.css');
  document.querySelector('head').appendChild(linker);
  clearInterval(timer);
  wrap.del()
}
