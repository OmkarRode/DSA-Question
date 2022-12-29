

var submitt=document.getElementById('my-form');
submitt.addEventListener('submit',additem);
var it=document.getElementById('it');


function additem(e){
    e.preventDefault();

    var iname=document.getElementById('name').value;
var iemail=document.getElementById('email').value;
if(iname=='' || iemail=='')
{
    alert("plaese fill information");
}
else
{
var myobj={
    OName: iname,
    OEmail : iemail
}

var myobjSerilized=JSON.stringify(myobj);
// console.log(myobjSerilized);
localStorage.setItem(iemail,myobjSerilized);

// desrization process ;
// var myObjDeserilized=JSON.stringify(localStorage.getItem(name));
// console.log(myObjDeserilized);

// localStorage.setItem(name,email);
// alert("data is sumbmited sucessfully");
var li =document.createElement("li");
    li.className="item";
    // var btn = (`<button onclick=edit(${iname})>edit</button><button onclick=delete()>Delete</button>`);
    var btn = (`<button>edit</button><button onclick=delete()>Delete</button>`);
    console.log(li.childNodes[1]);
    li.appendChild(document.createTextNode(`${iname} ${iemail}`));
    li.innerHTML=li.innerHTML+btn;       
     it.appendChild(li);
    // 
    li.childNodes[1].id='iemail';
}

}



//edit button
function edit(iemail){
   var input= document.getElementById('name');
   if(confirm('are you')){
input.value=iemail;}
};