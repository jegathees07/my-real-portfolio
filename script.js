
function toggleBtn(){
    document.body.classList.toggle("dark_mode")
}
function openMenu(){
    document.getElementById("dropdown_menu").style.display="block";
}
function closeMenu(){
    document.getElementById("dropdown_menu").style.display="none";
}
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

function userSubmit(){
    nameValue=nameInput.value;
    emailValue=emailInput.value;
    messageValue=messageInput.value;

    if(nameValue.length =="" && emailValue.length ==""){
        const parentEl = nameInput.parentElement;
        const spanElement = parentEl.querySelector('.error');
        spanElement.classList.add('invalid');

        const formEmailControl = emailInput.parentElement;
        const spanEmailElement = formEmailControl.querySelector('.error');
        spanEmailElement.classList.add('invalid');
    }
    if(nameValue.length >=6 && messageValue.length > 1){
        nameInput.value ="";
        emailInput.value="";
        messageInput.value ="";

        const parentEl = nameInput.parentElement;
        const spanElement = parentEl.querySelector('.error');
        spanElement.classList.remove('invalid');

        const formEmailControl = emailInput.parentElement;
        const spanEmailElement = formEmailControl.querySelector('.error');
        spanEmailElement.classList.remove('invalid');

        const message = document.getElementById("message");
        message.style.display="block";

        setTimeout(() => {
            message.style.display="none"
        },5000)
    }
    if(messageValue ==""){
        const enterMsg = document.getElementById("enterMsg");
        enterMsg.style.display="block";

        setTimeout(() =>{
            enterMsg.style.display="none";
        },4000)
    }
}

