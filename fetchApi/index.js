 const btn=document.querySelector('.btn');
const info=document.querySelector('.name');
const img=document.querySelector('.img');

let value=1;

const name1=document.querySelector('.searchName');
    
name1.addEventListener('input',()=>{
    value=name1.value;
    console.log(value);
        })
async function callApi(){
    
    
 const response=await fetch(`https://api.github.com/users/${value}`);
 const data=await response.json();
 console.log(data);
info.innerText=data?.name;
img.src=data?.avatar_url;
}




btn.addEventListener('click',()=>{

    callApi();
    
     })