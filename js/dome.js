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
 var timea1;
function guanbib(){
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
                 klp[i]=obje.result[i]
                 var kia='<div class="body-diva-bodya-daa" id="bodydivabodyadaa" name="'+i+'" onclick="chakanboke(this)"><h3>'+obje.result[i].title+'</h3>';
                 var kib='<div class="diso"><h4>(来源于本站 "'+obje.result[i].user+'"的选文)</h4><p>'+obje.result[i].content+'</p></div><time>'+obje.result[i].postTime+'</time></div>';
                  lkj=kia+kib;
                 jsisio.innerHTML+=lkj;
                 }
             }            
          }
 }                         
