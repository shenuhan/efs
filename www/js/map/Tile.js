function Tile(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.nextTiles;
}

Tile.SIZE = 10;

Tile.CHAR_EOL = "|";
Tile.CHAR_ENTRANCE = "e";
Tile.CHAR_FREE = "o";
Tile.CHAR_FORBIDDEN = "x";

/**
 * Return is the tile free.
 */
Tile.prototype.isFree = function(nextTiles) {
    return this.char == Tile.CHAR_FREE || this.char == Tile.CHAR_ENTRANCE;
}
    
Tile.prototype.setNextTiles = function(nextTiles) {
    this.nextTiles = nextTiles;
};

Tile.prototype.toString = function() {
    return "{x:" + this.x.toString() + ",y:" + this.y.toString() + ",char:'" + this.char + "'}";
};