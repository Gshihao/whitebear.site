
window.onload=function(){
       var as={"p":"10","s":"100"};
       var ajax = new XMLHttpRequest();
       ajax.open("post","https://potato.xudakj.com/api/getMessageBoardList");
       ajax.setRequestHeader("Content-type", "application/form-data");
       ajax.setRequestHeader("askKey","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6NzYwNDM5MTk2ODg1Nzk4OTEyLCJnZXRNYW5hZ2VtZW50SWQiOjc2MDM3OTA3NDA1ODczNTYxNiwiVElNRSI6MTY3MDQxNDk1Mzk0MX0.yQtf2URqbijwRZABVQj-J6t_idVCUfPoHenHTIrPGH0");
       ajax.send(JSON.stringify(as));
       ajax.onreadystatechange = function () {
         if (ajax.readyState == 4 && ajax.status == 200) {
               var  poa= ajax.responseText;
               var obje=JSON.parse(poa);
               for(var i=0;i<obje.data.length;i++){
                   var io='<div class="sentence_data_a" name="'+obje.data[i].content+'" onclick=fz(this)><p>'+obje.data[i].content+'</p></div>';                  
                   document.getElementById("sentence_divb").innerHTML+=io;
             }            
          }}
}
function fz(that){
  alert(that.innerText);
}
  function tianjua(){
      var io=prompt("请输入\n 练习博主，，索要权限\n🎃🎃🎃");
      if(io == "admin123"){
        var kl=prompt();
        var as={"content":kl};
       var ajax = new XMLHttpRequest();
       ajax.open("post","https://potato.xudakj.com/api/messageBoard");
       ajax.setRequestHeader("Content-type", "application/json");
       ajax.setRequestHeader("askKey","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6NzYwNDM5MTk2ODg1Nzk4OTEyLCJnZXRNYW5hZ2VtZW50SWQiOjc2MDM3OTA3NDA1ODczNTYxNiwiVElNRSI6MTY3MDQxNDk1Mzk0MX0.yQtf2URqbijwRZABVQj-J6t_idVCUfPoHenHTIrPGH0");
       ajax.send(JSON.stringify(as));
       ajax.onreadystatechange = function () {
         if (ajax.readyState == 4 && ajax.status == 200) {
               var  poa= ajax.responseText;
               var obje=JSON.parse(poa);
               location.reload([true])               
          }}   
      }else{
      alert("密码错误，请联系版主");
      }
  
}
  function gerenboke(tim,stringa){
       if(stringa.length<=20){
        var a1='<div id="gerenboke-shjodn" class="shaoalert"><div class="shaoalert-va"> <img style="width:35px;height:35px;border-radius:50px;position:absolute;left:30px;margin-top:2.5px;" src="1d82e7a016473cd2.gif"/>';
        var a2='<span style="line-height:40px;">:'+stringa+'</span></div></div>';
       }else{
        var a1='<div id="gerenboke-shjodn" class="shaoalert"><div class="shaoalert-va"> <img style="width:35px;height:35px;border-radius:50px;position:absolute;left:30px;margin-top:2.5px;" src="1d82e7a016473cd2.gif"/>';
        var a2='<span style="line-height:40px;">:'+"字数不符合"+'</span></div></div>';
       }
       if(tim == null){tim =2500}else{ tim = tim}
        var htmldata=a1+a2;
        var tia=0;
        setTimeout(function (){
         tia=0;
         //防止重复点击
        },tim+50);
        if(tia == "0"){
          var body=document.getElementsByTagName("body");
          body[0].innerHTML+=htmldata;
          setTimeout(function (){
          document.getElementById("gerenboke-shjodn").remove();
          tia=1;
          //重置
          },tim);
        }
      }   
    
  function yejianmoshi(){
       var donghua=document.getElementById("yejianmoshi");
       var bodya=document.getElementsByTagName("body")[0];
       var s1='<div id="yejianmoshi"><div class="yejianmoshi"></div><div class="yejianmoshi-a"><img id=""src="Metrial58';
       var s2='.png"/></div></div>';
       if(localStorage.getItem("cooking") != "#040100"){
       document.getElementById("yejianmoshia").src="Metrial588.png";
        localStorage.setItem("cooking","#040100")        
        bodya.innerHTML+=s1+7+s2;
        setTimeout(function (){
         document.getElementById("yejianmoshi").remove();
        },2500);
      gerenboke(700,"已切换为白天");
       }else{
       document.getElementById("yejianmoshia").src="Metrial587.png";
        localStorage.setItem("cooking","#ebebe9")
        bodya.innerHTML+=s1+8+s2;
        setTimeout(function (){
         document.getElementById("yejianmoshi").remove();
        },2500);
       gerenboke(700,"已切换为黑天")
       }
      zt();
      }