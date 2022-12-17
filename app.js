document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'natal',
      img: './assets/images/natal.png'
    },
    {
      name: 'natal',
      img: './assets/images/natal.png'
    },
    {
      name: 'nataleu',
      img: './assets/images/nataleu.png'
    },
    {
      name: 'nataleu',
      img: './assets/images/nataleu.png'
    },
    {
      name: 'baby',
      img: './assets/images/baby.jpeg'
    },
    {
      name: 'baby',
      img: './assets/images/baby.jpeg'
    },
    {
      name: 'bibi',
      img: './assets/images/bibi.jpeg'
    },
    {
      name: 'bibi',
      img: './assets/images/bibi.jpeg'
    },
    {
      name: 'family',
      img: './assets/images/family.png'
    },
    {
      name: 'family',
      img: './assets/images/family.png'
    },
    {
      name: 'sj',
      img: './assets/images/sj.jpeg'
    },
    {
      name: 'sj',
      img: './assets/images/sj.jpeg'
    },
    {
      name: 'sjnos',
      img: './assets/images/sjnos.jpeg'
    },
    {
      name: 'sjnos',
      img: './assets/images/sjnos.jpeg'
    },
    {
      name: 'sorvete',
      img: './assets/images/sorvete.png'
    },
    {
      name: 'sorvete',
      img: './assets/images/sorvete.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')

  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let pares = []
  let score = 0

  //screen
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.classList.add('game-img')
      card.setAttribute('src', './assets/images/card.svg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //pairs
  function checkforMatch() {
    let cards = document.querySelectorAll('.game-img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', './assets/images/card.svg')
      cards[optionTwoId].setAttribute('src', './assets/images/card.svg')
      console.log('Você clicou na mesma imagem')
    } else if (cardsChosen[0] == cardsChosen[1]) {
      audio = document.querySelector('audio')
      console.log('Você conseguiu um par!')
      cards[optionOneId].setAttribute('src', './assets/images/white.svg')
      cards[optionTwoId].setAttribute('src', './assets/images/white.svg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      pares.push(cardsChosen)
      score += 5
      audio.play()
    } else {
      cards[optionOneId].setAttribute('src', './assets/images/card.svg')
      cards[optionTwoId].setAttribute('src', './assets/images/card.svg')
      console.log('Ops! Jogue novamente :)')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = score

    if (pares.length == cardArray.length / 2) {
      resultDisplay.textContent = ` Parabéns! Você fez ${score} pontos.`
    }
  }

  //cards
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
      setTimeout(checkforMatch, 500)
    }
  }

  createBoard()
})
