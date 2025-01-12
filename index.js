const btn=document.querySelector('button');
const img=document.querySelector('img');

btn.addEventListener('click',()=>{
const xhr=new XMLHttpRequest();
xhr.responseType='json';
xhr.addEventListener('load',()=>{
    console.log(xhr.response.message);
    img.src=xhr.response.message;
})
xhr.open('GET','https://dog.ceo/api/breeds/image/random');
xhr.send();
})