const btn=document.getElementById('btn')
const  body=document.querySelector('body')
const color=['red','blue','white','green','yellow','gray','wheat']
btn.addEventListener('click',()=>{
    console.log("dmhfd")
    let num = Math.floor(Math.random() * color.length);
    body.style.backgroundColor=color[num]
});