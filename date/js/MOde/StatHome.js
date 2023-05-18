(function(){
    let kaiping = '<div class="startAHome" id="startAHoeme"><div class="startAHomeA"> <div class="startAHomeAcon">';
        kaiping += '<span class="startAHomeAconT"></span> <span class="startAHomeAconK"></span><span class="startAHomeAThine">';
        kaiping += '</span><span class="startAHomeAFove"></span></div></div> <div class="startAHomeB">';
        kaiping += '<span class="jsjdhdbdbdbb">L</span> <span class="jsjdhdbdbdbb">o</span> <span class="jsjdhdbdbdbb">a</span>';
        kaiping +=' <span class="jsjdhdbdbdbb">a</span> <span class="jsjdhdbdbdbb">i</span> <span class="jsjdhdbdbdbb">n</span>';
        kaiping +=' <span class="jsjdhdbdbdbb">g</span> <span class="jsjdhdbdbdbb">.</span>';
        kaiping +=' <span class="jsjdhdbdbdbb">.</span> <span class="jsjdhdbdbdbb">.</span> </div>';
   document.body.innerHTML+=kaiping;
 }())
  function IntTime(time){
    let yuo=0;
    setInterval(function (){
      let spana=document.getElementsByClassName("jsjdhdbdbdbb");
     if(yuo > spana.length-1){
        return ;
     }
     spana[yuo].style.animation="spangunadong 1s";
        yuo++;
       if(yuo < spana.length){
         spana[yuo].style.animation="";       
       } else{
         return 0;
       }    
    },time);
  }
 
 function zitoUpperCase(){
   setInterval(function (){
   IntTime(100)
   },2500);
 }