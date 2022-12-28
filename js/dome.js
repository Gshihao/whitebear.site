function guanbi(){
    document.getElementById("backstagediva").style.display="none";
  }
  function denglu(){
      let user=document.getElementById("fromuser").value;
      let pass=document.getElementById("frompass").value;
      guanbi();
      shalert(3000,"作有点小懒，还没有写")
       /* var ajax = new XMLHttpRequest();
        ajax.open("post","https://sl.hlunn.com/api/login");
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send("appId=2148&user="+user+"&password="+pass+"&device=webhtml001");
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
              var poa= ajax.responseText;
              var obje=JSON.parse(poa);
              if(obje.code == 200){
                alert(obje.result);
                window.open("demo.html")
            }}}
     */
      }
function opengongju(){
  document.getElementById("bodysygojgjyba").style.display="";
  
} 
function guanbigongju(){
  document.getElementById("bodysygojgjyba").style.animation="guanbiaa 0.5s";
  setTimeout(function (){
   document.getElementById("bodysygojgjyba").style.display="none";
   document.getElementById("bodysygojgjyba").style.animation="";
  },100);
}           

 var timea1;
function guanbib(){
    guanbigongju()
          let alertay=document.getElementById("bodyalertaa");
          alertay.style.animation="guanbia 1s";
          timea2=setTimeout(function (){
              clearTimeout(timea1)
              alertay.style.display="none";
            },1000);
          }
function shalert(tim,steraga){
    clearTimeout(timea1)
     let alertay=document.getElementById("bodyalertaa");
     let alertb=document.getElementById("bodyalertaap").innerText=steraga;
     alertay.style.animation="chuxiana 0.5s";
     alertay.style.display="";
     timea1= setTimeout(function (){
       alertay.style.animation="guanbia 1s";
       setTimeout(function (){
       alertay.style.display="none";
       },1000);  
      },tim);
   }   
 
var klp={};
     function getboke(){
       var jsisio=document.getElementById("bodydivabodyada")
       var ajax = new XMLHttpRequest();
       ajax.open("get","boke.json");
       ajax.send();
       ajax.onreadystatechange = function () {
         if (ajax.readyState == 4 && ajax.status == 200 ) {
               var poa= ajax.responseText;
               var obje=JSON.parse(poa);
               for(var i in obje.result){
                 var ji="";
                 klp[i]=obje.result[i]
                 for(var j=0;j<obje.result[i].content.length;j++){
                   ji+=obje.result[i].content[j]
                 }
                 ji=ji.replace(/<[^>]+>/g,"");
                 var kia='<div class="body-diva-bodya-daa" id="bodydivabodyadaa" name="'+i+'" onclick="chakanboke(this)"><h3>'+obje.result[i].title+'</h3>';
                 var kib='<div class="diso"><h4>(来源于本站 "'+obje.result[i].user+'"的选文)</h4><p class="ksjsjdjxnxnncjd">'+ji+'</p></div><time>'+obje.result[i].postTime+'</time></div>';
                  lkj=kia+kib;
                 jsisio.innerHTML+=lkj;
                 ji="";
                 }
             }            
          }
 }   
/*功能栏加载*/   
/*现在时间*/
function gongneng(){
 guanbigongju()
 setTimeout(function (){
 shalert(6000,"现在是:"+new Date())
 },300);
}