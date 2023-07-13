// var btn=document.querySelector("#btn");
var h2=document.querySelector("#h2");
var hide=document.querySelector(".hidenav");
var cross=document.querySelector(".hidenav .menu .cross");


cross.addEventListener("click",function(){
    hide.style.display="none"
    console.log("click")
})

h2.addEventListener("click",function(){
// h2.innerHTML=`<i class="ri-close-line"></i>`;
hide.style.display="block";



})


//cursor div
var page7=document.querySelector(".page7");
var cursor=document.querySelector(".cursor");

// console.log(page7)

page7.addEventListener("mousemove",function(dets){
    cursor.style.top=dets.y+0+"px";
    cursor.style.left=dets.x+0+"px";
});

//cursor-contaiiner
// var page9=document.querySelector(".page9");
// var cursor_con=document.querySelector("#cursor-con");

// console.log(cursor_con)
// console.log(container)

// var flag=0;

// page9.addEventListener("mousemove",function(dets){
//     if(flag==0){
//         cursor_con.style.display="block"
//         cursor_con.style.top=dets.y+30+"px";
//         cursor_con.style.left=dets.x+30+"px";
//         flag=1
//     }else{
//         cursor_con.style.display="none"
//         flag=0
//     }
    
// });