const assert = require ('assert');
const PaintCan = require('../paint_can.js');
const Painter =require ('../painter.js');
const Room = require ('../room.js');

describe ('Room', function(){
    let room;

    beforeEach(function () {
        room = new Room (10, false);
    });

    it("should have an area", function(){
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });

    it("should not be painted", function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });
    
});

describe ('PaintCan', function(){
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10, false);
    });

    describe('Paint', function(){
        it("it should have volume", function(){
            const actual = paintCan.volume;
            assert.strictEqual(actual, 10);
        })

        it("should have paint", function(){
            const actual = paintCan.empty;
            assert.strictEqual(actual, false);
        })
        it ("should use paint", function(){
            const actual = paintCan.useUpPaint(5);
            assert.strictEqual(actual, 5);
        })
        it("should run out of paint", function(){
            const actual = paintCan.useUpPaint(10);
            assert.strictEqual(actual, 0)
        })
    });

   

    
    
    
});

describe('Painter', function(){
    let painter;
    
    beforeEach(function(){
        painter = new Painter(0);
    });
    
    it("should have no paint", function(){
        const actual = painter.stock;
        assert.strictEqual(actual, 0);
    });
    
    it("should be able to add cans", function(){
        painter.addStock(2);
        assert.strictEqual(painter.stock, 2);
    });
    
    it("should be able to count paint", function(){
        painter.addStock(2);
        const actual = painter.totalPaint();
        assert.strictEqual(actual, 20);
    });

    
});

