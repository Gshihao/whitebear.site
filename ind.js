
window.onload=function(){
       var ui=["不是所有的努力都会有理想的结局，但至少这些努力，永远值得",
               "最怕你一生碌碌无为 还安慰自己说平凡可贵.🚶",
               "心之所动就随风去了以爱之明你还愿意吗？—— 《起风了》",
               "梦中你，还是当初模样，早知惊鸿一场，何必情深一往。――《旧梦一场》",
               "最有意义的是 把说过的话变成现实",
               "要向前看，不要烂在过去和梦里",
               "",
               "",
               "",
               "",
               ""]; 
        for(var i=0;i<ui.length;i++){
          var io='<div class="sentence_data_a" name="'+ui[i]+'" onclick=fz(this)><p>'+ui[i]+'</p></div>';
          document.getElementById("sentence_divb").innerHTML+=io;
          }
}
function fz(that){
  alert(that.innerText);
}
function tianjua(){
       var as={"appId":2033};
       var ajax = new XMLHttpRequest();
       ajax.open("POST","https://sl.hlunn.com/api/getNotice");
       ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       ajax.send(as);
       ajax.onreadystatechange = function () {
         if (ajax.readyState == 4 && ajax.status == 200) {
               var  poa= ajax.responseText;
               var obje=JSON.parse(poa);
               
          }}
           
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
