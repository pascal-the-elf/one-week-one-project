var Game = {
    "init": function() {
        ctx.font = "20px VT323";
        this.draw.start();
    },
    "draw": {
        "start": function() {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, 224, 288);
            ctx.fillStyle = "#000000";
            ctx.fillText("High", 10, 10);
            ctx.fillText("Score", 150, 10);
            ctx.fillText("Life", 200, 10);
        }
    },
    "data": {
        "stage": 0,
        "score": 0,
        "life": 3
    }
};
