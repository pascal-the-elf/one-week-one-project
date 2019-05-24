var Game = {
    "init": function() {
        ctx.font = "200px VT323";
        this.draw.start();
    },
    "draw": {
        "start": function() {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, 2240, 2880);
            ctx.fillStyle = "#fff";
            ctx.fillText("High", 550, 120);
            ctx.fillText("Score", 1300, 120);
            ctx.fillText("Life", 1800, 120);
        }
    },
    "data": {
        "stage": 0,
        "score": 0,
        "life": 3
    }
};
