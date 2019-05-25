// 19 * 22 (19*100, 22*100)
// 27.5 / 19*115 / 27.5
var Game = {
    "init": function() {
        ctx.font = "160px Arial";
        ctx.fillText("Loading...", 10, 160);
        ctx.font = "200px VT323";
        this.data.high = localStorage.PacManHigh ? localStorage.PacManHigh : 0;
        setTimeout(function() { Game.draw.start(); }, 1000);
    },
    "draw": {
        "start": function() {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, 2240, 2880);
            ctx.fillStyle = "#fff";
            ctx.fillText("High", 50, 120);
            ctx.fillText("Score", 800, 120);
            ctx.fillText("Life", 1550, 120);
            this.update();
            this.map();
        },
        "update" : function() {
            ctx.fillStyle = "#fff";
            ctx.fillText(Game.data.high, 50, 120*2);
            ctx.fillText(Game.data.score, 800, 120*2);
            ctx.fillText(Game.data.life, 1550, 120*2);
        },
        "map": function() {
            ctx.beginPath();
            ctx.moveTo(27.5, 300);
            ctx.lineTo(27.5 + 19 * 115, 300);
            ctx.lineTo(27.5 + 19 * 115, 300 + 7 * 115);
            ctx.lineTo(27.5 + 16 * 115, 300 + 7 * 115);
            ctx.lineTo(27.5 + 16 * 115, 300 + 9 * 115);
            ctx.lineTo(27.5 + 20 * 115, 300 + 9 * 115);
            ctx.lineTo(27.5 + 20 * 115, 300 + 11 * 115);
            ctx.lineTo(27.5 + 16 * 115, 300 + 11 * 115);
            ctx.lineTo(27.5 + 16 * 115, 300 + 13 * 115);
            ctx.lineTo(27.5 + 19 * 115, 300 + 13 * 115);
            ctx.lineTo(27.5 + 19 * 115, 300 + 21 * 115);
            ctx.lineTo(27.5, 300 + 21 * 115);
            ctx.lineTo(27.5, 300 + 13 * 115);
            ctx.lineTo(27.5 + 3 * 115, 300 + 13 * 115);
            ctx.lineTo(27.5 + 3 * 115, 300 + 11 * 115);
            ctx.lineTo(27.5 - 1 * 115, 300 + 11 * 115);
            ctx.lineTo(27.5 - 1 * 115, 300 + 9 * 115);
            ctx.lineTo(27.5 + 3 * 115, 300 + 9 * 115);
            ctx.lineTo(27.5 + 3 * 115, 300 + 7 * 115);
            ctx.lineTo(27.5, 300 + 7 * 115);
            ctx.lineTo(27.5, 300);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
        }
    },
    "data": {
        "stage": 0,
        "score": 0,
        "life": 3,
        "high": 0
    }
};
