var Game = {
    "init": function() {
        draw.start();
    },
    "draw": {
        "start": function() {
            ctx.fillRect(0, 0, 224, 288);
            ctx.fillText("High", 10, 50);
            ctx.fillText("Score", 10, 150);
            ctx.fillText("Life", 10, 200);
        }
    },
    "data": {
        "stage": 0,
        "score": 0,
        "life": 3
    }
};
