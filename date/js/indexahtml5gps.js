var x=document.getElementById("demo");
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.watchPosition(showPosition);
    }
    else
    {
        x.innerHTML="该浏览器不支持获取地理位置。";
    }
}
function showPosition(position)
{
    x.innerHTML="纬度: " + position.coords.latitude + 
    "<br>经度: " + position.coords.longitude; 
}