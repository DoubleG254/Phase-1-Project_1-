document.addEventListener("DOMContentLoaded");
function gameList(games) {
  let lister = document.querySelector("#games");
  let game = document.createElement("div");
  game.innerHTML = `
    <img src="${games.image}alt="game image" id="gamage">
    <h2>${games.name}
    `;
  game.addEventListener("mouseover", () => {
    game.innerHTML = `
           <h2>System Requirements</h2>
           <p>Storage : ${games.systemrequirements.storage}</p>
           <p>RAM : ${games.systemrequirements.RAM}</p>
           <p>CPU: ${games.systemrequirements.CPU}`;
  });
  game.addEventListener("mouseout", () => {
    game.innerHTML = `
        <img src="${games.image}alt="game image" id="gamage">
        <h2>${games.name}
        `;
  });
}
