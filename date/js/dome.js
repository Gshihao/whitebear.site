function guanbi() {
  document.getElementById("backstagediva").style.display = "none";
}
function denglu() {
  let user = document.getElementById("fromuser").value;
  let pass = document.getElementById("frompass").value;
  guanbi();
  shalert(3000, "作有点小懒，还没有写")
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
function opengongju() {
  document.getElementById("bodysygojgjyba").style.display = "";

}
function guanbigongju() {
  document.getElementById("bodysygojgjyba").style.animation = "guanbiaa 0.5s";
  setTimeout(function () {
    document.getElementById("bodysygojgjyba").style.display = "none";
    document.getElementById("bodysygojgjyba").style.animation = "";
  }, 100);
}

var timea1;
function guanbib() {
  guanbigongju()
  let alertay = document.getElementById("bodyalertaa");
  alertay.style.animation = "guanbia 1s";
  timea2 = setTimeout(function () {
    clearTimeout(timea1)
    alertay.style.display = "none";
  }, 1000);
}
function shalert(tim, steraga) {
  clearTimeout(timea1)
  let alertay = document.getElementById("bodyalertaa");
  let alertb = document.getElementById("bodyalertaap").innerText = steraga;
  alertay.style.animation = "chuxiana 0.5s";
  alertay.style.display = "";
  timea1 = setTimeout(function () {
    alertay.style.animation = "guanbia 1s";
    setTimeout(function () {
      alertay.style.display = "none";
    }, 1000);
  }, tim);
}
function timestampToTime(timestamp) {
  var date = new Date(timestamp*1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y+M+D+h+m+s;
}
function getboke() {
  var jsisio = document.getElementById("bodydivabodyada")
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "http://120.48.169.127/myapi");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 0 | 200) {
      var poa = ajax.responseText;
      var obje = JSON.parse(poa);
      var lens=0;
      for (var i in obje[2]) {
        // var ji = "";
        // klp[i] = obje.result[i]
        // for (var j = 0; j < obje.result[i].content.length; j++) {
        //   ji += obje.result[i].content[j]
        // }
        // ji = ji.replace(/<[^>]+>/g, "");
        /*
         * i:顺序
           til.split(".")[0] 名字
         */
        if(i >= 10){
        }
        lens++;
        var til=obje[2][i].tl;
        var kia = '<div class="body-diva-bodya-daa" id="bodydivabodyadaa" name="' +  obje[2][i].pp.spaceused + '" onclick="chakanboke(this)"><h3>' + til.split(".")[0]+ '</h3>';
        var kib = '<div class="diso"><p class="ksjsjdjxnxnncjd">' + obje[2][i].pp.dgsa + '</p></div class="asdjaklsd"> <span style="position: absolute;"><img class="skdldad" st';
            kib+= 'yle="display:block;float: left;" src="../date/img/10/local11.png" alt=""><span class="sdhsdjakd">' + obje[2][i].pp.pr + '</span>';
            kib +='</span><time>' + timestampToTime(obje[2][i].mt) + '</time></div>';
        lkj = kia + kib;
        jsisio.innerHTML += lkj;
        ji = "";
      }
      document.getElementById("shexhiwemzhang").innerText="文档数量"+" "+lens+"😍";
    }
  }
}
// C:\Users\郭世豪\Desktop\whitebear.site\date\img\10\local11.png
// C:\Users\郭世豪\Desktop\whitebear.site\date\js\dome.js

/*功能栏加载*/
/*现在时间*/
function gongneng() {
  guanbigongju()
  setTimeout(function () {
    shalert(6000, "现在是:" + new Date())
  }, 300);
}

let didinhyi = document.getElementById("uiozidonhui");
let stringaa = '欢迎访问 http://120.48.169.127/';
let jki = 0;
zidingyi();
function zidingyi () {
  setInterval(function () {
    if (jki == stringaa.length) {
      return;
    }
    didinhyi.innerText += stringaa[jki];
    jki++;
  }, 220);
}
function Setggfo(){
  // 首页公告栏内容
  let data=[
    "数据已",
    "数据二",
    "数据三"
  ];
  var Sizea=0;
  setInterval(function(){
    didinhyi.innerText=data[Sizea];
    Sizea++;
    didinhyi.style.animation="";

  },00)
}