const PaintCan =  function(volume, empty){
    this.volume = volume;
    this.empty = empty;
};

PaintCan.prototype.useUpPaint = function(paintUsed){
   
    if(paintUsed > this.volume){
        return false;
    }else{
        this.volume -= paintUsed;
    }

    if (this.volume === 0){
        this.empty = true;
    }
return this.volume
}
module.exports = PaintCan;