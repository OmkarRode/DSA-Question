
// geting submit button id
var submitt=document.getElementById('my-form');

//delcare click event in submit button
submitt.addEventListener('submit',additem);


// 
var ulId=document.getElementById('ulList');


function additem(e)
{
        e.preventDefault();

        // getting name and email from value 
        var txtname=document.getElementById('name').value;
        var txtemail=document.getElementById('email').value;

    // set input codition  
    if(txtname=='' || txtemail=='')
    {
        alert("plaese fill information");
    }
    else
    {
        var flag=0
        for(var i=0;i<localStorage.length;i++)
        {
                        var x=localStorage.key(i);
                        if(txtemail==x)
                        {
                            alert("your data alredy submitted");
                            flag=1;
                        }
            
        }

        // create object
        if(flag==0)
        {
                                var myobj={
                                name: txtname,
                                email : txtemail
                                }

                        // object convert to the serilised
                        var myobjSerilized=JSON.stringify(myobj);


                            //store value in local storage key is email
                            localStorage.setItem(txtemail,myobjSerilized);

                        //alert message showin data submitted
                        alert("data is sumbmited sucessfully");

                        var userDetailsObj=JSON.parse(localStorage.getItem(txtemail));
                        showNewUserOnScreen(userDetailsObj)
        }
    }
}
// crate new li list 
function showNewUserOnScreen(user){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('ulList');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(emailId,name){

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;
    

    deleteUser(emailId)
 }

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('ulList');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}