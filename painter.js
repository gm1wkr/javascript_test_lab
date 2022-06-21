const Room = require('./room');

const Painter = function(stock){
    this.stock = stock;
};

Painter.prototype.addStock = function(cans){
    this.stock += cans;
};

Painter.prototype.totalPaint = function(){
    return this.stock * 10;
};

Painter.prototype.enoughPaint = function(room){
    if (room.area <= (10 * this.stock)){
        return true;
    }
    return false;
};

Painter.prototype.reduceStock = function(cansUsed){
    this.stock -= cansUsed;
};

Painter.prototype.paintTheRoom = function(room){
    const enoughPaint = this.enoughPaint();
    if(enoughPaint){
        this.reduceStock(room.area / 10);
        room.painted = true;

         
    }
};

module.exports = Painter;