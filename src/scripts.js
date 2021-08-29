const TILE_SIZE = 48;
const HELMET_OFFSE = 12;
const GAME_SIZE = TILE_SIZE * 20;

const root = document.documentElement;
root.style.setProperty('--tile-size', `$(TILE_SIZE)px`);
root.style.setProperty('--helmet-offset', `$(HELMET_OFFSE)px`);
root.style.setProperty('--game-size', `$(GAME_SIZE)px`);

function createBoard() {
    const board = document.getElementById('board');
    
}