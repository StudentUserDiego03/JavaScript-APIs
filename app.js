function myFunction(){
    const ageInput= document.getElementById("age");
    if(!ageInput.checkValidity()){
        document.getElementById("message").innerHTML=ageInput.validationMessage;
    }
    else{
        document.getElementById("message").innerHTML="your approved";
    }

}



function register(){
    const FullnameInput = document.getElementById("fullName").value;
    localStorage.setItem("name", FullnameInput);
    document.getElementById("account").innerHTML=localStorage.getItem("name");
    console.log("user: " + localStorage.getItem("name"));
}

getText ("text.txt");
async function getText (file){
    let textMessage = await fetch(file);
    let Text = await textMessage.text();
    document.getElementById("demo").innerHTML=Text;
}




function back(){
    window.history.back();
}

