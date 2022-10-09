
//task 3 first activity
document.getElementById("header-title").innerText="hello Sharpner";

// task 3 second activity . set border color 

var title=document.getElementById("header-title");
title.style.border="2px solid black";

// third activity
//  change item and set color

var itemList=document.getElementsByClassName("list-group-item");
itemList[1].innerHTML='<b>Mango</b>';
itemList[1].style.background="green";



