
// 文章上滑
const anfootr = document.querySelector(".an-footr");
const slither = document.querySelector(".slither-content")
anfootr.addEventListener("click", ifbreakbook)
function ifbreakbook(ifa) {
  if (ifa) {
    document.querySelector(".nav").style.display = "none"
    document.querySelector(".an-contont").style.display = "none"
    document.querySelector(".an-footr").style.display = "none"
    slither.classList.add("slither-content2")
  }
}


//判断herf 链接是否有内容
try {
  const sherh = window.location.href;
  if (sherh.split("?")[1].split("=")[1]) {
    ifbreakbook(true)
  }
} catch (e) { 
  // throw new Error(e)
}

// 返回启动界面
const serctionnavbrackimg = document.querySelector(".serctionnavbrackimg");
serctionnavbrackimg.addEventListener("click", function (e) {
  // console.log(12);
  document.querySelector(".nav").style.display = "block"
  document.querySelector(".an-contont").style.display = "block"
  document.querySelector(".an-footr").style.display = "block"
  slither.classList.remove("slither-content2")
})


// 狗友点击效果
const imggpuyou = document.querySelector(".an-contont1 img");
let rt = null;
imggpuyou.addEventListener("click", (e) => {
  clearTimeout(rt)
  e.target.style.animation = "imgsdf .2s";
  rt = setTimeout(() => {
    e.target.style.animation = "";
  }, 100)

})

// 文章 工具标题滑块
const serctionnav12 = document.querySelector(".serctionnav12 ul");
const serctionnav12slither = document.querySelector(".serctionnav12slither")
serctionnav12.addEventListener("click", function (e) {
  console.log(e.target.dataset.id);
  if (e.target.nodeName === "LI") {
    document.querySelector(`.slicterCon0`).classList.remove("slicterCon0")
    document.querySelector(` .slicterCon999:nth-child(${e.target.dataset.id})`).classList.add(`slicterCon0`);

    serctionnav12slither.style.transform = `translateX(${e.target.offsetLeft + 47}px)`;
  }
})


// 动态文字显示
const schpboxpxp = document.querySelector(".schpboxpxp");
// setInterval(()=>{

// },200)



// 加载数据
function lodingdat() {
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "http://120.48.169.127/myapi");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 0 | 200) {
      var poa = JSON.parse(ajax.responseText);
      let dat = poa[2];
      let str = "";
      str = dat.map((item) => {
        let { tl, mt, pp } = item;
        let { pr, dg, dgsa, spaceused } = pp;
        // console.log(tl.substring(0,6));
        tl = tl.length >= 7 ? tl = tl.substring(0, 6) + `...` : tl = tl;
        return ` 
        <div class="searchcon45" data-id="${spaceused}">
           <h3 data-id="${spaceused}">${tl}</h3>
           <h4 data-id="${spaceused}">${pr}</h4>
           <P data-id="${spaceused}" >${dgsa}</P>
           <pre data-id="${spaceused}"> ${timestampToTime(mt)}</pre>
         
       </div>
        `
      })
      document.querySelector(".searchcon").innerHTML = str.join("")
    }
  }
}
lodingdat();


const searchcon = document.querySelector(".searchcon");
searchcon.addEventListener("click", function (e) {
  const mod = e.target.nodeName;
  if (mod === "DIV" || mod === "P" || mod === "H3") {
    window.location.href = `../../packge/lookpage.html?id=${e.target.dataset.id}`
  }
})

function timestampToTime(timestamp) {
  // 时间戳为10位需*1000，时间戳为13位不需乘1000
  var date = new Date(timestamp * 1000);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h = date.getHours() + ":";
  var m = date.getMinutes() + ":";
  var s = date.getSeconds();
  return Y + M + D + h + m + s;
}