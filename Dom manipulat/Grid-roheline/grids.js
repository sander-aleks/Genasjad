let selectedTiles = [];

document.addEventListener('click', (event) =>{
    console.log(event.target);
    if (!event.target.classList.contains('tile')) return;
    event.target.classList.add('selected');
    selectedTiles.push(event.target);
    if (selectedTiles.length >= 9) {
        const interval = setInterval(() =>{
            const tile = selectedTiles[0];
            tile.classList.remove('selected');
            selectedTiles.shift();
        }, 1000)
        if (selectedTiles.lenght === 0) {
            clearInterval(interval);
        }
    }
})
