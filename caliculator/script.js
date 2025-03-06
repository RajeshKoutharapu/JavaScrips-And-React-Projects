(function(){

let input=document.querySelector('.input');
let buttons=document.querySelectorAll('.btn');
let equal=document.querySelector('.equal')
let clear=document.querySelector('.clear')

buttons.forEach(function(button){
    button.addEventListener('click',(e)=>{
       let value=e.target.getAttribute('data-num')
       input.value+=value
    });
})

})();