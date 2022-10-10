var item= document.getElementsByClassName("list-group-item");
// console.log(item[2]);
item[2].textContent="Mango";
item[2].style.background="green";

// set all bold in list
// console.log(item);
for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight="bold";
    item[i].style.color="red";
    item[i].style.fontFamily="Times New Roman"
    
}