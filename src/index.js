//let name = prompt("welcome to my first website, please input \n your name")
//alert("you are welcome " + name);
let forminput = document.getElementById("form");
let firstnameInput = document.getElementById("firstname");
let lastnameInput = document.getElementById("lastname");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");


//Error Message
firstnameInput.style.backgroundImage = '../images/icon-error.svg';

//Error Massage Id
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

firstnameInput.addEventListener("keyup", function () {
    
});

lastnameInput.addEventListener("keyup", function () {
    
    if (firstnameInput.value === "") {
        firstnameInput.style.border = '2px solid red';
        firstnameInput.style.backgroundImage = 'url("../utils/images/icon-error.svg")';
        error1.style.visibility = "visible";
        error1.style.color = "red";
    }else {
       
        firstnameInput.style.border = '2px solid green';
        error1.style.visibility = "hidden";
         firstnameInput.style.backgroundImage = 'url("../utils/images/favicon-32x32.png")';
    }

});

emailInput.addEventListener("keyup", function () {
    if (lastnameInput.value === "") {
        lastnameInput.style.border = '2px solid red';
        error2.style.visibility = "visible";
        lastnameInput.style.backgroundImage = 'url("../utils/images/icon-error.svg")';
        error2.style.color = "red";
    }else {
        error2.style.visibility = "hidden";
        lastnameInput.style.border = '2px solid green';
        lastnameInput.style.backgroundImage = 'url("../utils/images/favicon-32x32.png")';
    }
});

passwordInput.addEventListener("keyup", function () {
    if (emailInput.value === "") {
        emailInput.style.border = '2px solid red';
        error3.style.visibility = "visible";
        emailInput.style.backgroundImage = 'url("../utils/images/icon-error.svg")';
        error3.style.color = "red";
    }else {
        error3.style.visibility = "hidden";
        emailInput.style.border = '2px solid green';
        emailInput.style.backgroundImage = 'url("../utils/images/favicon-32x32.png")';
    }
});

forminput.addEventListener("click", function () {
    if (firstnameInput.value === "") {
        firstnameInput.style.border = '2px solid red';
         error1.style.visibility = "visible";
        error1.style.color = "red";
        
    } else if (lastnameInput.value === "") {
        lastnameInput.style.border = '2px solid red';
         error2.style.visibility = "visible";
        error2.style.color = "red";

    } else if (emailInput.value === "") {
        emailInput.style.border = '2px solid red';
         error3.style.visibility = "visible";
        error3.style.color = "red";

    } else if (passwordInput.value === "") {
        passwordInput.style.border = '2px solid red';
         error4.style.visibility = "visible";
        error4.style.color = "red";
    } 
})
