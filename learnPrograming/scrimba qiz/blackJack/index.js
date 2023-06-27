let firstCard = 1

let secondCard = 3

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    }else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
    }else {
   message = "You're out of the game!"
   isAlive = false 
    }
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    messageEl.textContent = message

    sumEl.textContent= "Sum: " + sum
}

function newCard() {
    let newCard = 7

     sum += newCard

    renderGame()
    
}