
// 列表数据
const datalist = [
    {
        "listname": "测试数据",
        "listicon": "../../images/toolicon/webchngtool.png",
        "setTime": "2023/8/18 16:24",
        "lable": ["测试", "测试"],
        "listdat": [
            {
                "toolName": "测试",
                "toolicon": "",
                "toolurl": "packge/too/timestamp.html"
            },

        ]
    },
    {
        "listname": "测试",
        "listicon": "../../images/toolicon/webchngtool.png",
        "setTime": "2023/8/18 16:24",
        "lable": ["测试", "测试","测试","测试"],
        "listdat": [
            {
                "toolName": "测试",
                "toolicon": "",
                "toolurl": "packge/too/timestamp.html"
            },
            {
                "toolName": "测试",
                "toolicon": "",
                "toolurl": "packge/too/timestamp.html"
            },
        ]
    }
]

// 获取父标签
const slicterCon999 = document.querySelector(".slicterCona");
// <iframe src="" frameborder="0" class="slicteriframe"></iframe>  

let newlist = datalist.map((item, index) => {
    let { listname, listicon, lable, listdat } = item;
    return `
    <div class="siltoolbox" data-id="${index}">
        <h4><img src="${listicon}" alt="">${listname}</h4>
        <p>${new Array(lable.map(itema => `<span>${itema}</span>`).join(" "))}
        <pre data-id="${index}" data-click="true"></pre>
        </p>
        <ul>
            ${new Array(
        listdat.map((itemb) => {
            return ` 
                    <li data-url = "${itemb.toolurl}"><a href="#">${itemb.toolName}</a></li>
                    `
        })
    ).join(" ")
        }
        </ul>
    </div>
   `
})

// 设置html代码
slicterCon999.innerHTML = newlist.join(" ")


// 添加冒泡事件
// 
let asd = new Array();
slicterCon999.addEventListener("click", function (e) {
    const age = "siltoolboxulrad siltoolboxtop40"
    if (e.target.nodeName === "PRE") {
        const siltoolboxul = document.querySelector(`.siltoolbox:nth-child(${parseInt(e.target.dataset.id) + parseInt(1)}) ul`)
        if (asd.indexOf(parseInt(e.target.dataset.id) + parseInt(1))) {
             asd.push((parseInt(e.target.dataset.id) + parseInt(1)));
            try {
                document.querySelector(".siltoolboxtop40").classList.remove("siltoolboxtop40");
                document.querySelector(".siltoolboxulrad").classList.remove("siltoolboxulrad");
            } catch (a) {}
            siltoolboxul.classList.add("siltoolboxtop40")
            e.target.classList.add("siltoolboxulrad")
        }else{
            // 删除数组元素，取消重复值
            asd = []
            try {
                document.querySelector(".siltoolboxtop40").classList.remove("siltoolboxtop40");
                document.querySelector(".siltoolboxulrad").classList.remove("siltoolboxulrad");
            } catch (a) {}
        }
    }

})