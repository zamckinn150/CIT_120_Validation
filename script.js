var userEle = document.body.querySelector(".user");
var messageBox = document.body.querySelector(".message");
var contentEle = document.body.querySelector(".content");
var sub = document.body.querySelector(".submit")
var viewsub = document.body.querySelector(".viewsub");
var view = document.body.querySelector(".view");
var list = [];

viewsub.style.visibility = "hidden";
view.style.visibility = "hidden";

function rendernote(){
  document.body.querySelector(".list").innerHTML="";
  for(var i=0; i<list.length; i++){
   var itmEle = document.createElement("h6");
   itmEle.innerHTML=list[i].name;
   document.body.querySelector(".list").appendChild(itmEle);
  }
}

function validated() {
  view.style.visibility = "visible";
  viewsub.style.visibility = "visible";
  userEle.style.visibility = "hidden";
  sub.style.visibility = "hidden";
  
}
document.body.querySelector(".submit").addEventListener("click", function () {
  messageBox.innerHTML = "";
  if (userEle.value == "coolStudent123") {
    validated();
    viewsub.style.visibility = "visible";
  } else {
    messageBox.innerHTML = "Incorrect Username";
  }
});

document.body.querySelector(".viewsub").addEventListener("click", function () {
if(view.value.length>1){
list.push({
 name:view.value,})
 rendernote()
}else{
messageBox.innerHTML = "Too Few Charcters"; 
}
})