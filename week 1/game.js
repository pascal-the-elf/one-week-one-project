// 17 * 20 (17*120, 20*120)
// 100 / 17*120 / 100
// dot-space: 27 * 30
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
            var ds = 2200 / 27;
            var pd = 20, hpd = 300;
            ctx.lineCap = "round";
            // Border
            ctx.beginPath();
            ctx.moveTo(pd, hpd);
            ctx.lineTo(pd + 13 * ds, hpd);
            ctx.lineTo(pd + 13 * ds, hpd + 4 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 4 * ds);
            ctx.lineTo(pd + 14 * ds, hpd);
            ctx.lineTo(pd + 27 * ds, hpd);
            ctx.lineTo(pd + 27 * ds, hpd + 9 * ds);
            ctx.lineTo(pd + 22 * ds, hpd + 9 * ds);
            ctx.lineTo(pd + 22 * ds, hpd + 13 * ds);
            ctx.lineTo(pd + 28 * ds, hpd + 13 * ds);
            ctx.lineTo(pd + 28 * ds, hpd + 15 * ds);
            ctx.lineTo(pd + 22 * ds, hpd + 15 * ds);
            ctx.lineTo(pd + 22 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 27 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 27 * ds, hpd + 24 * ds);
            ctx.lineTo(pd + 25 * ds, hpd + 24 * ds);
            ctx.lineTo(pd + 25 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 27 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 27 * ds, hpd + 30 * ds);
            ctx.lineTo(pd, hpd + 30 * ds);
            ctx.lineTo(pd, hpd + 25 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 24 * ds);
            ctx.lineTo(pd, hpd + 24 * ds);
            ctx.lineTo(pd, hpd + 19 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 15 * ds);
            ctx.lineTo(pd - 1 * ds, hpd + 15 * ds);
            ctx.lineTo(pd - 1 * ds, hpd + 13 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 13 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 9 * ds);
            ctx.lineTo(pd, hpd + 9 * ds);
            ctx.lineTo(pd, hpd);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            // top left blocks
            ctx.beginPath();
            ctx.moveTo(pd + 2 * ds, hpd + 2 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 2 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 4 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 4 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 2 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 7 * ds, hpd + 2 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 2 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 4 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 4 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 2 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 2 * ds, hpd + 6 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 6 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 7 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 7 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 6 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 7 * ds, hpd + 6 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 6 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 9 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 9 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 10 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 10 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 13 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 13 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 6 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            // top right blocks
            ctx.beginPath();
            ctx.moveTo(2220 - (2 * ds), hpd + 2 * ds);
            ctx.lineTo(2220 - (5 * ds), hpd + 2 * ds);
            ctx.lineTo(2220 - (5 * ds), hpd + 4 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 4 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 2 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(2220 - (7 * ds), hpd + 2 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 2 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 4 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 4 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 2 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(2220 - (2 * ds), hpd + 6 * ds);
            ctx.lineTo(2220 - (5 * ds), hpd + 6 * ds);
            ctx.lineTo(2220 - (5 * ds), hpd + 7 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 7 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 6 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(2220 - (7 * ds), hpd + 6 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 6 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 9 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 9 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 10 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 10 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 13 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 13 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 6 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            // center blocks
            ctx.beginPath();
            ctx.moveTo(pd + 10 * ds, hpd + 6 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 6 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 7 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 7 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 10 * ds);
            ctx.lineTo(pd + 13 * ds, hpd + 10 * ds);
            ctx.lineTo(pd + 13 * ds, hpd + 7 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 7 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 6 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 10 * ds, hpd + 18 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 18 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 22 * ds);
            ctx.lineTo(pd + 13 * ds, hpd + 22 * ds);
            ctx.lineTo(pd + 13 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 18 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 10 * ds, hpd + 24 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 24 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 14 * ds, hpd + 28 * ds);
            ctx.lineTo(pd + 13 * ds, hpd + 28 * ds);
            ctx.lineTo(pd + 13 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 24 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            // bottom left blocks
            ctx.beginPath();
            ctx.moveTo(pd + 7 * ds, hpd + 15 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 15 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 19 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 15 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 2 * ds, hpd + 21 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 21 * ds);
            ctx.lineTo(pd + 5 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 4 * ds, hpd + 25 * ds);
            ctx.lineTo(pd + 4 * ds, hpd + 22 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 22 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 21 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 7 * ds, hpd + 21 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 21 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 22 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 22 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 21 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(pd + 7 * ds, hpd + 24 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 24 * ds);
            ctx.lineTo(pd + 8 * ds, hpd + 27 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 27 * ds);
            ctx.lineTo(pd + 11 * ds, hpd + 28 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 28 * ds);
            ctx.lineTo(pd + 2 * ds, hpd + 27 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 27 * ds);
            ctx.lineTo(pd + 7 * ds, hpd + 24 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            // bottom right blocks
            ctx.beginPath();
            ctx.moveTo(2220 - (7 * ds), hpd + 15 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 15 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 19 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 19 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 15 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(2220 - (2 * ds), hpd + 21 * ds);
            ctx.lineTo(2220 - (5 * ds), hpd + 21 * ds);
            ctx.lineTo(2220 - (5 * ds), hpd + 25 * ds);
            ctx.lineTo(2220 - (4 * ds), hpd + 25 * ds);
            ctx.lineTo(2220 - (4 * ds), hpd + 22 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 22 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 21 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(2220 - (7 * ds), hpd + 21 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 21 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 22 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 22 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 21 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(2220 - (7 * ds), hpd + 24 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 24 * ds);
            ctx.lineTo(2220 - (8 * ds), hpd + 27 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 27 * ds);
            ctx.lineTo(2220 - (11 * ds), hpd + 28 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 28 * ds);
            ctx.lineTo(2220 - (2 * ds), hpd + 27 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 27 * ds);
            ctx.lineTo(2220 - (7 * ds), hpd + 24 * ds);
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 10;
            ctx.stroke();
            
            // home
            ctx.beginPath();
            ctx.moveTo(pd + 12 * ds, hpd + 12 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 12 * ds);
            ctx.lineTo(pd + 10 * ds, hpd + 16 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 16 * ds);
            ctx.lineTo(pd + 17 * ds, hpd + 10 * ds);
            ctx.lineTo(pd + 15 * ds, hpd + 10 * ds);
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
