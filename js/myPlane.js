const myplane = {
    el: null,
    bulletSpeed: 0,
    myplaneSroce: 0,
    hp: 3,
    timerBoom: 0,
    init() {
        this.el = document.createElement('div');
        this.el.className = 'myplane';
        GameEngine.Inter().el.appendChild(this.el);
        this.el.style.left = GameEngine.Inter().el.offsetWidth / 2 - this.el.offsetWidth / 2 + 'px';
        this.el.style.bottom = '0px';
        return this;
    },
    fire() {
        GameEngine.Inter().timer.fireTime = setInterval(() => {
            new Bullets().init().move();
        }, this.bulletSpeed);
    },
    hurt(emy) {
        this.hp--;
        //console.log(emy)
        if (this.hp == 0) {
            // this.myplaneSroce -= emy.score;
            this.boom();
        }
    },
    boom() {
        for (var key in GameEngine.Inter().timer) {
            clearInterval(GameEngine.Inter().timer[key]);
        }
        for (const ee in GameEngine.Inter().enemys) {
            clearInterval(GameEngine.Inter().enemys[ee].enemyTimer);
        }
        window.onkeydown = window.onkeyup = null;
        var index = 0;
        this.timerBoom = setInterval(function() {
            index++;
            myplane.el.style.background = ` url(./images/me_die${index%4+1}.png)`;
        }, 200);

        this.gameOver();
    },

    gameOver() {


        var oGameOver = document.getElementsByClassName('gameOver')[0];
        var oAgain = document.getElementById('again');
        var oQuit = document.getElementById('quit');
        var oList = document.getElementById('list');
        oGameOver.style.display = 'block';

        oGameOver.children[1].innerHTML = `得分：${myplane.myplaneSroce}`;
        oAgain.onclick = function() {
            clearInterval(myplane.timerBoom);

            myplane.myplaneSroce = 0;
            myplane.hp = 3;
            oGameOver.style.display = 'none';
            GameEngine.InterObj = null;
            GameEngine.Inter().init('#main_body');
        }
        oQuit.onclick = function() {
            window.location.reload(true);

        }
    }

}