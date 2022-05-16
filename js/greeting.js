const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username= loginInput.value;
    localStorage.setItem("USERNAME_KEY", username)
    paintGreetings();

}

function paintGreetings(){
    const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden")
}


const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit)

} else{
    paintGreetings();
}