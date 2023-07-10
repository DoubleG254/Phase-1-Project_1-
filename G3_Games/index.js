document.addEventListener("DOMContentLoaded", ()=>{
  fetchData();
  feedback()
});

function gameList(games) {
//Display games 
  let lister = document.querySelector("#games");
  let game = document.createElement("div");
  game.className="game"
  game.innerHTML = `
    <img src="${games.image}" alt="game image" class="gamage">
    <h2>${games.name}</h2>
    <button class="cartAdd">Add to Cart</button>
  `;
  lister.appendChild(game);
  //Dispaly sysytem requirements for the games
  let declareButton=document.querySelector(".declare")
    declareButton.addEventListener("click",()=>{
      let system = document.createElement("div")
      system.className="system"
      system.innerHTML=`
      <p> CPU : ${games.cpu}</p>
      <p>RAM : ${games.ram}</p>
      <p>Storage : ${games.storage}</p>`
      game.appendChild(system)
  })
//Add game to the cart
let cartAdd=game.querySelector(".cartAdd")
  cartAdd.addEventListener("click",()=>{
    let li = document.createElement("li")

    li.innerHTML=`${games.name}`
    let ul= document.querySelector(".list")
    ul.appendChild(li);
  })
 

  }
  
//Fetch game data from the server
function fetchData() {
  fetch("http://localhost:3000/games")
    .then(resp => resp.json())
    .then(games => {
      games.forEach(game => gameList(game));
    });
}
//Feedback display
function feedback(){
  let form =document.querySelector("#feedback")
form.addEventListener("submit",(e)=>{
e.preventDefault();
let respond=document.querySelector("#respond").value
let response=document.querySelector("#response")
let p = document.createElement("p")
p.innerHTML=`${respond}`
response.appendChild(p)
})
}



