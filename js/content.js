const From =document.getElementById("form");
const userName =document.getElementById("Username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const conPassword =document.getElementById("Con-Password");

//showError Message
function showError(input,Massege) {
    const FromControl =input.parentElement;
    FromControl.className = "form-control error";
    const small =FromControl.querySelector("small");
    small.innerText = Massege;
}
//ShowSuccess
function ShowSuccess(input){
    const FromControl =input.parentElement;
    FromControl.className = "form-control success";
}
//vaildEmail
function isVaildEmail(F) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(F).search (filter) != -1;
}
//checkPasswordMatch
function checkPasswordMatch(input1,input2) {
    if(input1.value!==input2.value){
        showError(input2,"password Dont Match (please Same Password Required)")
    }
}
//check required
function checkrequired(inputarr) {
    inputarr.forEach(input => {
        if(input.value== ""){
            showError(input,`${input.id} is required`)
        }else if(userName.value.length <3){
            showError(userName,"UserName Must be 3 Carector")
        }else if(userName.value.length >15){
            showError(userName,"UserName max 15 Carector")
        }else if(!isVaildEmail(email.value)){
            showError(email,"Email is not Valid")
        }else if(password.value.length <6){
            showError(password,"Password minimum 6 carector")
        }else if(password.value.length >30){
            showError(password,"Password Maximum 30 carector")
        }
        else{
            ShowSuccess(input)
        }
    });
}
//Eventlistner
From.addEventListener("submit",(e)=>{
    e.preventDefault()

        checkrequired([userName,email,password,conPassword]);
        checkPasswordMatch(password,conPassword)
});
