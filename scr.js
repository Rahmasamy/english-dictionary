// adding functionality of our project using javascript 
const input = document.getElementById('text');
const infoText= document.getElementById('para-text');
const meaningContainer=document.getElementById('meaning-container');
const title= document.getElementById('title');
const meaning= document.getElementById('meaning');
const audio =document.getElementById('audio');
async function fetchAPI(word) {
    try {
    infoText.style.display="block";
    infoText.innerHTML =`Searching for the meaning of "${word}"....`
    const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // request from the api 
    const result= await fetch(url).then((res)=> res.json());
    console.log(result);
    infoText.style.display="none";
    title.innerHTML=result[0]["word"];
    meaning.innerHTML=result[0]["meanings"][0]['definitions'][0] ['definition'];
    meaningContainer.style.display="block";
    title.style.margin="10px";
    meaning.style.margin="10px";
    audio.src=result[0]["phonetics"][0]["audio"];
    audio.style.marginTop="10px";
    
   
    console.log(result);  
    } catch (error) {
        console.log(error);
    }
  
}
// keyup == enter 
input.addEventListener("keyup",(e)=> {
    // if input not empty and you press enter 
   if (e.target.value && e.key === 'Enter') {
     fetchAPI(e.target.value);
   }
})