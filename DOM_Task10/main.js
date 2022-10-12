

var submitt=document.getElementById('my-form');
submitt.addEventListener('submit',additem);
var it=document.getElementById('it');


function additem(e){
    e.preventDefault();

    var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
if(name=='' || email=='')
{
    alert("plaese fill information");
}
else
{
var myobj={
    OName: name,
    OEmail : email
}

var myobjSerilized=JSON.stringify(myobj);
// console.log(myobjSerilized);
localStorage.setItem(name,myobjSerilized);

// desrization process ;
var myObjDeserilized=JSON.stringify(localStorage.getItem(name));
console.log(myObjDeserilized);

// localStorage.setItem(name,email);
alert("data is sumbmited sucessfully");
var li =document.createElement("li");
    li.className="item";
    li.appendChild(document.createTextNode(`${name} ${email}`));


     it.appendChild(li);
}

}