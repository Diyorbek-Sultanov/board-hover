const board = document.querySelector('#board')
const colors = ['#2bcf5a', '#0cc2c9', '#11e93c', '#e94731', '#da260e', '#e7dedd', '#e4cb21']
const SQUARE_NUMBER = 1000

for(let i = 0; i < SQUARE_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', setColor)
	square.addEventListener('mouseleave', removeColor)

	board.append(square)
}

function setColor(event) {
	const element = event.target
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}