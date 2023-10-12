// console.log(452);
const imgon = document.querySelectorAll("img")
// console.log(imgon);
imgon.forEach((item, index) => {
    item.addEventListener("click", function (e) {
        console.log(e.target.src);
        let src = e.target.src;

        // 图片预览
        // let pichtml = `<div><img src="" alt=""></div>`
        // 创建div
        const divpic = document.createElement("div");
        divpic.classList.add("divpic","picnbod")
        // 创建img
        const divimg = document.createElement("IMG");
        divimg.src = src
        // 将图片插入 div
        divpic.appendChild(divimg)
        document.body.appendChild(divpic)
    })
})