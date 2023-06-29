let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighterOne = Math.floor(Math.random()*17)
    let fighterTwo = Math.floor(Math.random()*17)
    stageEl.textContent = fighters[fighterOne] + " VS " + fighters[fighterTwo]
})