var Game = {
    "init": function() {
        ctx.font = "200px VT323";
        this.data.high = localStorage.PacManHigh ? localStorage.PacManHigh : 0;
        this.draw.start();
    },
    "draw": {
        "start": function() {
            this.update();
        },
        "update" : function() {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, 2240, 2880);
            ctx.fillStyle = "#fff";
            ctx.fillText("High", 50, 120);
            ctx.fillText("Score", 800, 120);
            ctx.fillText("Life", 1550, 120);
            ctx.fillText(Game.data.high, 50, 120*2);
            ctx.fillText(Game.data.score, 800, 120*2);
            ctx.fillText(Game.data.life, 1550, 120*2);
        }
    },
    "data": {
        "stage": 0,
        "score": 0,
        "life": 3,
        "high": 0
    }
};
