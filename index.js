const login=document.getElementById("login")
const loginmobile=document.getElementById("loginmobile")


login.addEventListener("click",()=>{
    window.location.replace("/login.html");
})

loginmobile.addEventListener("click",()=>{
    window.location.replace("/login.html");
})




function showSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display="flex";

}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display="none";
    
}