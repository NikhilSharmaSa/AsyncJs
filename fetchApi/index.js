 const btn=document.querySelector('.btn');
const info=document.querySelector('.name');
const img=document.querySelector('.img');

let value=1;

const name1=document.querySelector('.searchName');
    
name1.addEventListener('input',()=>{
    value=name1.value;
    console.log(value);
        })
 function callApi(){
    
    
  fetch(`https://api.github.com/users/${value}`)
  .then(data=> data.json())
  .then(data=> {
    console.log(data);
info.innerText=data?.name;
img.src=data?.avatar_url;

  })
}




btn.addEventListener('click',()=>{

    callApi();
    
     })