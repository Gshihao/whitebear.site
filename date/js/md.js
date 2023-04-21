let shu="#md md文档 # 这是内容啊 # # 这是你换个容啊 #这是黑本快结束刷快手肯德基看手机 # 这是第二个标签 ";
function setdomtitle(a,b,c){
   /*正则表达式筛选标题*/
   /* a=h1 b=正则 c=数据源*/
   let rt;
     try{ rt="<"+a+">"+c.match(b)[1]+"</"+a+">"
     }catch(e){ return "no";
     }return rt;
}
function zhuThreadtitle(that){
  //查询标题 
  let io={
     "h1":/[^#]# (\S*) #[^#]/,
     "h2":/[^#]## (\S*) ##[^#]/,
     "h3":/[^#]### (\S*) ###[^#]/,
     "h4":/[^#]#### (\S*) ####[^#]/,
     "h5":/[^#]##### (\S*) #####[^#]/,
     "h6":/[^#]###### (\S*) ######[^#]/
    }
  for(let k in io){
     if(setdomtitle(k,io[k],that) != "no"){
       return setdomtitle(k,io[k],that);
       break;
       }
    }
}

 function chaxunliebiao(that){
     /*查询列表 未完*/
    return setdomtitle("",/[-] (\S*)/,that);
 }
 function chaxunpspan(that){
     /*查询段落p，未完*/
    return pspana=setdomtitle("p",/#[p] (\S*) [p]#/,that);
 }
 function fenduanchaxunchaxun(a,b){
   /*循环匹配查询标签*/
   let io;
   try{
     io=a.match(b)[1];
     }catch(e){
      return null;
     }
   return io;
 }
function fenduanchaxunaa(k,that){
  let than=that;
  switch(k){
    case "titleh":
    return zhuThreadtitle(than);
    break;
    case "pspan":
    return "<p>"+than+"</p>";
    break;
  }
}
function fenduanchaxun(that){
    //分段查询
  let ji="" /* 数据*/
  let nb="";
  let htmla={
      "titleh":/# (\S*) #/,
      "pspan":/ (\S*) /,
      "imga":/  (\S*) #/
    }
  let than=that;
  for(var k in htmla){
     if(fenduanchaxunchaxun(than,htmla[k]) != null){
         nb=fenduanchaxunchaxun(than,htmla[k]).length;
         var jia=fenduanchaxunaa(k,than);
         than+=than;
         ji+=jia;
       }
    }
  
  return ji;
}
 function datalocal(id,that){
   let shuju=that;
  // fenduanchaxun(shu);
   let chulihoushiju=setdomtitle("",/#md (\S*) /,that);
   if(chulihoushiju =="<>md文档</>"){
      document.getElementById(id).innerHTML= "开发中";
     }else{
     document.getElementById(id).innerHTML=that;
    }
 }
