// 17 * 20 (17*120, 20*120)
// 100 / 17*120 / 100
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
            // Border
            ctx.beginPath();
            ctx.moveTo(100, 300);
            ctx.lineTo(100 + 17 * 120, 300);
            ctx.lineTo(100 + 17 * 120, 300 + 5 * 120);
            ctx.lineTo(100 + 14 * 120, 300 + 5 * 120);
            ctx.lineTo(100 + 14 * 120, 300 + 7 * 120);
            ctx.lineTo(100 + 18 * 120, 300 + 7 * 120);
            ctx.lineTo(100 + 18 * 120, 300 + 9 * 120);
            ctx.lineTo(100 + 14 * 120, 300 + 9 * 120);
            ctx.lineTo(100 + 14 * 120, 300 + 11 * 120);
            ctx.lineTo(100 + 17 * 120, 300 + 11 * 120);
            ctx.lineTo(100 + 17 * 120, 300 + 19 * 120);
            ctx.lineTo(100, 300 + 19 * 120);
            ctx.lineTo(100, 300 + 11 * 120);
            ctx.lineTo(100 + 3 * 120, 300 + 11 * 120);
            ctx.lineTo(100 + 3 * 120, 300 + 9 * 120);
            ctx.lineTo(100 - 1 * 120, 300 + 9 * 120);
            ctx.lineTo(100 - 1 * 120, 300 + 7 * 120);
            ctx.lineTo(100 + 3 * 120, 300 + 7 * 120);
            ctx.lineTo(100 + 3 * 120, 300 + 5 * 120);
            ctx.lineTo(100, 300 + 5 * 120);
            ctx.lineTo(100, 300);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            // Blocks
            ctx.beginPath();
            ctx.moveTo(100 + 1 * 120, 300 + 1 * 120);
            ctx.lineTo(100 + 3 * 120, 300 + 1 * 120);
            ctx.lineTo(100 + 3 * 120, 300 + 3 * 120);
            ctx.lineTo(100 + 1 * 120, 300 + 3 * 120);
            ctx.lineTo(100 + 1 * 120, 300 + 1 * 120);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(100 + 4 * 120, 300 + 1 * 120);
            ctx.lineTo(100 + 7 * 120, 300 + 1 * 120);
            ctx.lineTo(100 + 7 * 120, 300 + 3 * 120);
            ctx.lineTo(100 + 4 * 120, 300 + 3 * 120);
            ctx.lineTo(100 + 4 * 120, 300 + 1 * 120);
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
