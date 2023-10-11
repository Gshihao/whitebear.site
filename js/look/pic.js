// console.log(452);
const imgon = document.querySelectorAll("img")
// console.log(imgon);
imgon.forEach((item, index) => {
    // console.log(item);
    item.addEventListener("click", function (e) {
        console.log(e.target.src);
    })
})