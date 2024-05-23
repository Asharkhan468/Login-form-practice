const username = document.querySelector("#username");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const age = document.querySelector("#age");
const idCardNo = document.querySelector("#CNIC");

const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex =
  /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*._%+-]{8,}@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/;
const cnicRegex = /^42\d{11}$/;

const btn = document.querySelector("#form");

btn.addEventListener('submit' , (event)=>{

event.preventDefault()

    if (usernameRegex.test(username.value) ) {
      console.log(username.value);
    }else{
        console.log("Wrong username");
    }

    if(emailRegex.test(email.value)){
        console.log(email.value);
    }else{
        console.log("Wrong email");
    }

     if (passwordRegex.test(password.value)) {
       console.log(password.value);
     } else {
       console.log("Wrong password");
     }

     if (ageRegex.test(age.value)) {
       console.log(age.value);
     } else {
       console.log("Wrong age");
     }

     if (cnicRegex.test(idCardNo.value)) {
       console.log(idCardNo.value);
     } else {
       console.log("Wrong NIC Number");
     }


     



    

    
})

