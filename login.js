const loginForm=document.getElementById("loginform")
const signupForm=document.getElementById("signupform")

const loginbtn=document.getElementById("loginbtn")
const signupbtn=document.getElementById("signupbtn")

const backbtn=document.getElementById("backbtn")

loginbtn.addEventListener("click",()=>{
    signupForm.style.display="none"
    loginForm.style.display="flex"
})

signupbtn.addEventListener("click",()=>{
    loginForm.style.display="none"
    signupForm.style.display="flex"
})

backbtn.addEventListener("click",()=>{
    window.location.replace("/index.html");
})
