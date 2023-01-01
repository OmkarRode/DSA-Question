
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
        // for(var i=0;i<localStorage.length;i++)
        // {
        //                 var x=localStorage.key(i);
        //                 if(txtemail==x)
        //                 {
        //                     alert("your data alredy submitted");
        //                     flag=1;
        //                 }
            
        // }

        // create object
        if(flag==0)
        {
                                var myobj={
                                name: txtname,
                                email : txtemail
                                }

                        // object convert to the serilised
                        //var myobjSerilized=JSON.stringify(myobj);

                                axios.post("https://crudcrud.com/api/1bd799930d5440d68888466471351b1e/appioment",myobj)
                                .then((Response) =>{
                                    console.log(Response);
                                }).catch( (err)=>{console.log(err)});
                            //store value in local storage key is email
                            //localStorage.setItem(txtemail,myobjSerilized);

                        //alert message showin data submitted
                        alert("data is sumbmited sucessfully");
                        

                        // var userDetailsObj=JSON.parse(localStorage.getItem(txtemail));
                        showNewUserOnScreen()
        }
    }
}
// crate new li list 
function showNewUserOnScreen(){
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    const parentNode = document.getElementById('ulList');
    parentNode.innerHTML="";

    axios.get("https://crudcrud.com/api/1bd799930d5440d68888466471351b1e/appioment")
                        .then((Response) =>{
                           let user=Response.data;
                           for(var i=0;i<user.length;i++)
                           {
                               const childHTML = `<li id=${user[i].email}> ${user[i].name} - ${user[i].email}
                               <button onclick=deleteUser('${user[i].email}')> Delete User </button>
                               <button onclick=editUserDetails('${user[i].email}','${user[i].name}')>Edit User </button>
                            </li>`
                            parentNode.innerHTML = parentNode.innerHTML + childHTML;
                        }
                    }).catch( (err)=>{console.log(err)});


}    
    



//Edit User

function editUserDetails(emailId,name){

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;
    

    deleteUser(emailId)
 }

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
    
    axios.get("https://crudcrud.com/api/1bd799930d5440d68888466471351b1e/appioment")
    .then((Response) =>{
        for(var i=0;i<Response.data.length;i++)
        {
            console.log(Response.data[i]._id);
           if( Response.data[i].email===emailId)
           {
             const serId=Response.data[i]._id;
             axios.delete(`https://crudcrud.com/api/1bd799930d5440d68888466471351b1e/appioment/${serId}`)
             .then((Response) =>{
                 console.log(Response)
                 showNewUserOnScreen();
             }).catch( (err)=>{console.log(err)});
           }
        }


    }).catch( (err)=>{console.log(err)});



    // localStorage.removeItem(emailId);
    // console.log(emailId.id)
    
    // removeUserFromScreen(emailId);

}

showNewUserOnScreen();

// function removeUserFromScreen(emailId){
//     const parentNode = document.getElementById('ulList');
//     const childNodeToBeDeleted = document.getElementById(emailId);
//     if(childNodeToBeDeleted) {
//         parentNode.removeChild(childNodeToBeDeleted)
//     }
// }