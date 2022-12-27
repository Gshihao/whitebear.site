let shu="#md md文档 #p 这是内容啊 p## java-shihao #\n用来存放一些学习java做的小玩意\n- README.md\n+ Yhk.java\n+ interface.java\n+ #p java 乘法练习.java\n+ javaArray.java\n+ java创建账号.java\n+ java匿名类练习题>周长计算.java\n+ 内部类实例.java\n+ 构造方法.java\n+ 泛型generic.java p#";
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
     /*查询段落p*/
    return pspana=setdomtitle("p",/#[p] (\S*) [p]#/,that);
 }
 function datalocal(id,that){
   let shuju=that;
   let chulihoushiju=setdomtitle("",/#md (\S*) /,that);
   if(chulihoushiju =="<>md文档</>"){
      document.getElementById(id).innerHTML='md文档暂不支持查看 <a class="" href="https://qm.qq.com/cgi-bin/qm/qr?k=oXynp5oJJrTLMq50MwR4xCwz4XbxiuHm&noverify=0&personal_qrcode_source=3">点击反馈</a>';
    }else{
     document.getElementById(id).innerHTML=that;
    }
 }
