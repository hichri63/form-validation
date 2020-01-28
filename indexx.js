let firstname = document.querySelector('.name')
let address = document.querySelector('.address')
let pwd = document.querySelector('.password')
let email = document.querySelector('.email')
let comment = document.querySelector('.comment')
let sendBtn = document.querySelector('.send-btn')

let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
let emaRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

sendBtn.addEventListener('click', function(){
    if(firstname.value === '' || address.value === '' || pwd.value === '' || email.value === ''){
        alert('All fields are required!')
    }else if(!pwdRegex.test(pwd.value)){
        alert('Password must be at least 8 characters')
    }
     else if(!emaRegex.test(email.value)){
         alert('Address invalide')

    }
    else {
        alert('Thank you for your feedback ;D')
    }
})




