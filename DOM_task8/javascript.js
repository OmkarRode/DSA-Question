var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem);

// adding a item
function addItem(e){
    e.preventDefault();
    var newItem= document.getElementById("item").value;
    var li =document.createElement("li");
    li.className="list-group-item";
    // var nitem=document.createTextNode(livalue);
    li.appendChild(document.createTextNode(newItem));


//create button
var delButton =document.createElement("button");
delButton.className="btn btn-danger btn-sm float-right delete";
delButton.appendChild(document.createTextNode('X'));
li.appendChild(delButton);


itemList.appendChild(li);

}