function guanbi(){
   document.getElementById("backstagediva").style.display="none";
}
function denglu(){
  let user=document.getElementById("fromuser").value;
  let pass=document.getElementById("frompass").value;
  if(user.length !=0 && pass.length !=0){
       var ajax = new XMLHttpRequest();
       ajax.open("post","https://sl.hlunn.com/api/login");
       ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       ajax.send("appId=2148&user="+user+"&password="+pass+"&device=webhtml001");
       ajax.onreadystatechange = function () {
         if (ajax.readyState == 4 && ajax.status == 200) {
               var  poa= ajax.responseText;
               var obje=JSON.parse(poa);
               alert(obje.result);
               if(obje.code ==200){
                  window.open("demo.html")
                  
               }
              }}}
  
}
