var TG = {
    "init": function() {
        this.objects.ans = document.getElementById("ans");
        this.objects.Q = document.getElementById("q");
        this.objects.Alert = document.getElementById("alert");
        this.objects.Highest = document.getElementById("highest");
        this.objects.Highest.innerHTML = "Highest: " + this.data.highest;
        this.objects.timer = document.getElementById("timer");
        this.objects.ans.onkeyup = () => {TG.KeyUp(event)};
        Alert("Are You Ready?", "Press 'Yes' To Start", "question", {"show": true, "text": "Yes"}, {"show": false}, ()=>{
            this.nextQ();
        });
    },
    "KeyUp": function(event) {
        var key = event.which || event.keyCode;
        if(key == 13) {
            this.check();
        }
    },
    "check": function() {
        if(this.objects.ans.value === this.data.question) {
            this.data.score += 10;
            this.objects.Alert.innerHTML = "Score: " + this.data.score;
            this.nextQ();
        } else {
            this.wrongA();
        }
    },
    "nextQ": function() {
        if(!this.timer.used) this.timer.start();
        var length = 10 + Math.floor(Math.random()*20);
        var q = "";
        while(length--) {
            q += this.genWord();
        }
        this.data.question = q;
        this.objects.Q.innerHTML = q;
        this.objects.ans.value = "";
    },
    "genWord": function() {
        var dic = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789?!.";
        var rand = Math.floor(Math.random()*dic.length);
        return dic.charAt(rand);
    },
    "wrongA": function() {
        let tempV = this.data.question;
        for(var i = this.data.question.length - 1; i >= 0; i--)
            if(this.objects.ans.value[i] != this.data.question[i])
                tempV = tempV.substring(0, i) + '<span style="color: red">' + tempV.substr(i, 1) + '</span>' + tempV.substr(i+1);
        this.objects.Q.innerHTML = tempV;
        this.objects.Alert.innerHTML = '<span style="color: red">Wrong Answer</span>';
    },
    "save": function() {
        let DATA = {
            "highest": (this.data.score > this.data.highest) ? this.data.score : this.data.highest
        };
        localStorage.TG = JSON.stringify(DATA);
    },
    "timer": {
        "used": 0,
        "time": 180,
        "start": function() {
            this.used = 1;
            this.interval = setInterval(() => {
                if(this.time) {
                    this.time--;
                    TG.objects.timer.innerHTML = "Timer: " + this.time;
                }
                else this.stop();
            }, 1000);
        },
        "stop": function() {
            this.time--;
            clearInterval(this.interval);
            TG.objects.ans.disabled = true;
            Alert("Time's UP!", "Your Score is " + TG.data.score + "!", "success", {"show": true, "text": "OK"}, {"show": false});
            TG.save();
            TG.data.highest = JSON.parse(localStorage.TG).highest;
            this.objects.Highest.innerHTML = "Highest: " + TG.data.highest;
        }
    },
    "data": {
        "score": 0,
        "highest": localStorage.TG ? JSON.parse(localStorage.TG).highest : 0,
        "question": "Question"
    },
    "objects" : {}
};
