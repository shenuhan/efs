function Maps() {
    
    this.x = 0;
    this.y = 0;
    this.mapList = new Map();
    this.currentMap = "";
    
    this.initialize = function() {
        this.currentMap = "map2";
        
    };
    
    this.update = function() {
    };
    
    this.draw = function() {
        ctx.drawImage(app.images.get(this.currentMap), this.x, this.y);
    };
    
    this.updatePosition = function(x, y) {
        var newX = this.x + x;
        var canvasWidth = canvas.getAttribute("width");
        var mapWidth = app.images.get(this.currentMap).width;
        if (newX < canvasWidth - mapWidth) {
            this.x = canvasWidth - mapWidth;
        } else if (newX > 0) {
            this.x = 0;
        } else {
            this.x = newX;
        }

        var newY = this.y + y;
        var canvasHeight = canvas.getAttribute("height");
        var mapHeight = app.images.get(this.currentMap).height;
        if (newY < canvasHeight - mapHeight) {
            this.y = canvasHeight - mapHeight;
        } else if (newY > 0) {
            this.y = 0;
        } else {
            this.y = newY;
        }
        //console.log("Map position : (" + this.x + ", "  + this.y + ").");
    }

    this.addMap = function (name, content) {
        var myMap = [];
        var myLine = [];
        for (var i = 1; i < content.size; i++) {            
            
            if (content.get(i) == "\n") {
                myMap.push(myLine);
                myLine = [];
            } else {
                myLine.push(content.get(i));
            }
        }
        this.mapList.add(name, myMap);
    }
}
