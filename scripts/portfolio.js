chkMono.onclick=removeStyles();

function removeStyles(){
if (document.getElementById("chkMono").checked){
let  body=document.querySelector("body");
//window.alert(body);
body.style.background="white";
let heading = document.querySelector("h1").style;

heading.color="black";
heading.textShadow="none";
}
else{
  location.reload();
}
}



