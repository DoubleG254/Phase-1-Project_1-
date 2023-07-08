document.addEventListener("DOMContentLoaded", fetchData);

function gameList(games) {
  let lister = document.querySelector("#games");
  let game = document.createElement("div");
  game.className="game"
  game.innerHTML = `
    <img src="${games.image}" alt="game image" id="gamage">
    <h2>${games.name}</h2>
    <button id="declare">System Requirement</button>
    <button>Add to Cart</button>
  `;
  lister.appendChild(game);
  let declare=document.querySelector("#declare")
  declare.addEventListener("click",()=>{
      let system = document.createElement("div")
      system.className="system"
      system.innerHTML=`
      <p> CPU : ${games.cpu}</p>
      <p>RAM : ${games.ram}</p>
      <p>Storage : ${games.storage}</p>`
      game.appendChild(system)
  })
 
}

function fetchData() {
  fetch("http://localhost:3000/games")
    .then(resp => resp.json())
    .then(games => {
      games.forEach(game => gameList(game));
    });
}

