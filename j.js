console.log("hi");
const apiUrl = 'https://catfact.ninja/fact';
const outputElement = document.querySelector(".para");


document.querySelector(".button").addEventListener('click',()=>{
    console.log("button clicked");
   async function getresponse(){
const response = await fetch(apiUrl);
   
   const res= await response.json();
   console.log(res);
   outputElement.innerHTML=res.fact;
   }
});