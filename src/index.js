const cards = [
	{ name: 'cylinder miarowy', img: 'cylinder-miarowy.png' },
	{ name: 'kolba', img: 'kolba.png' },
	{ name: 'lejek', img: 'lejek.png' },
	{ name: 'mozdzierz', img: 'mozdzierz.png' },
	{ name: 'palnik', img: 'palnik.png' },
	{ name: 'pipeta', img: 'pipeta.png' },
	{ name: 'probowka', img: 'probowka.png' },
	{ name: 'rozdzielacz', img: 'rozdzielacz.png' },
	{ name: 'stojak', img: 'stojak.png' },
	{ name: 'szalka petriego', img: 'szalka-petriego.png' },
	{ name: 'termometr', img: 'termometr.png' },
	{ name: 'zlewka', img: 'zlewka' },
	{ name: 'cylinder miarowy', img: 'cylinder-miarowy.png' },
	{ name: 'kolba', img: 'kolba.png' },
	{ name: 'lejek', img: 'lejek.png' },
	{ name: 'mozdzierz', img: 'mozdzierz.png' },
	{ name: 'palnik', img: 'palnik.png' },
	{ name: 'pipeta', img: 'pipeta.png' },
	{ name: 'probowka', img: 'probowka.png' },
	{ name: 'rozdzielacz', img: 'rozdzielacz.png' },
	{ name: 'stojak', img: 'stojak.png' },
	{ name: 'szalka petriego', img: 'szalka-petriego.png' },
	{ name: 'termometr', img: 'termometr.png' },
	{ name: 'zlewka', img: 'zlewka' },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
	let html = '';

	memoryGame.shuffleCards();

	memoryGame.cards.forEach((pic) => {
		html += `
        <div class='card' data-card-name='${pic.name}'>
            <div class='back' name='${pic.img}'></div>
            <div class='front' style='background: url(img/${pic.img}) no-repeat'></div>
        </div>
        `;
	});

	//Add all divs do the HTML
	document.querySelector('#memory-board').innerHTML = html;

	//Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach((card) => {
		card.addEventListener('click', () => {
			if (memoryGame.pairsGuessed === 12) {
				const youWonBox = document.createElement('div');
				youWonBox.className = 'you-won';
                const boxParagraph = document.createElement('p');
                boxParagraph.innetHTML = 'Koniec gry!';
                youWonBox.appendChild(boxParagraph);
                document.body.appendChild(youWonBox);

                return
			} else {
                
            }
		});
	});
});
