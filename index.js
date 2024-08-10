const btnEle=document.getElementById("btn");
const jokeEle=document.getElementById("joke");

const apiKey="JCAQ7xfNJPlDL21BZ1WbUA==9cjiCpvKzW2lzPo6";
const options={
  method: "GET",
  headers: {
    
      "X-Api-Key": apiKey,
    }
  }
  const apiUrl="https://api.api-ninjas.com/v1/jokes"

async function getJoke() {
  //console.log("click");

 jokeEle.innerText="Updating...........";
 jokeEle.style.color="#ff00ff";
 jokeEle.style.fontSize="20px"

//  jokeEle.style.width="90%"
//  jokeEle.style.textAlign="center";
 btnEle.disabled=true;
 btnEle.innerText="Reloading";



  const response= await fetch(apiUrl,options)
  const data= await response.json();
  btnEle.disabled=false;
  btnEle.innerText="Tell ME A JOKE";
 

  jokeEle.innerText=data[0].joke;


}

btnEle.addEventListener("click", getJoke);