let uname=document.getElementById("uname")
let email=document.getElementById('email')
let pass=document.getElementById('pass')
let conformpass=document.getElementById('conformpass')
let terms=document.getElementById("terms")
let submitbtn=document.getElementById("form");


submitbtn.addEventListener('submit',(e)=>{
    console.log(e)
   e.preventDefalut();
   validate();
}
)
function validate(){
    console.log(uname)
let username=uname.value.trim();
console.log(uname)
  if(username===""){
    setError(uname,"Invalid User Name");
  }
  else
    setSucces(uname)
}
function setError(input,message){
    console.log(input)
  let parent=input.parentElement;
  let small=parent.querySelector('small')
  small.innerText=message;
  parent.classList.add('error')
  parent.remove('success')
}
function setSucces(){

}