let email = document.getElementById("usernameInput");
let error = document.getElementById("error");
let pswd = document.getElementById("pass");
let temp=0;

function test()
{
   error.innerHTML="Welcome User";
   error.style.color="green";
   error.style.fontSize="15px";
   error.style.padding="5px";
}

function validate(test)
{
  if(((email.value)=='admin')&&(pswd.value)=='12345')
   {
      test();
      location = "todo.html";
      return false; 
   }
else
   { 
    error.innerHTML=("The credentials you entered are not matching");
    error.style.color="red";
    error.style.fontSize="15px";
    error.style.padding="5px";
    return false;
   }

}
