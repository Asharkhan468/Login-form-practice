const FirstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const phoneNumber = document.querySelector(".phone Number");

const form = document.querySelector("#form").addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log(FirstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(password.value);
    console.log(phoneNumber.value);
})