 window.onload=function(){
  var btn=document.getElementById("btn");
     var nav=document.getElementsByClassName("nav");
     var container=document.getElementsByClassName("container");
  btn.onclick=function(){
      nav[0].style.left="0px";
      container[0].style.position="relative";

  }

   }