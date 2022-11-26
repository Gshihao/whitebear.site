
window.onload=function(){
       var ui=["最怕你一生碌碌无为 还安慰自己说平凡可贵.🚶",
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
 alert("你好😁");
}