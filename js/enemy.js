function Enemy() {
    this.el = null;
    this.hp = 0;
    this.score = 0;
    this.enemyTimer = null;
    this.id = parseInt(Math.random() * 100000);

}
Enemy.prototype.init = function() {
    this.el = document.createElement('div');
    GameEngine.Inter().el.appendChild(this.el);
    GameEngine.Inter().enemys[this.id] = this;
    var enemy = Math.random();
    if (enemy < 0.7) {
        this.el.className = 'enemy-small';
        this.hp = 1;
        this.score = 10;
    } else if (enemy > 0.98) {
        this.el.className = 'enemy-large';
        this.hp = 5;
        this.score = 100;
    } else {
        this.el.className = 'enemy-middle';
        this.hp = 2;
        this.score = 40;
    }


    this.el.style.left = parseInt((GameEngine.Inter().el.offsetWidth - this.el.offsetWidth / 2) * Math.random()) + 'px';

    this.el.style.top = -this.el.offsetHeight + 'px';
    return this;
}


//-----------------------------------------------------------

Enemy.prototype.move = function() {
    this.enemyTimer = setInterval(() => {
        this.el.style.top = this.el.offsetTop + 10 + 'px';
        if (this.el.offsetTop > GameEngine.Inter().el.offsetHeight + this.el.offsetHeight) {
            this.el.remove();
            clearInterval(this.enemyTimer);
        }
    }, 40);
}

Enemy.prototype.hurt = function() {
    this.hp--;
    if (this.hp == 0) {
        myplane.myplaneSroce += this.score;
        delete(GameEngine.Inter().enemys[this.id]);
        this.boom();
    }
}

Enemy.prototype.boom = function() {
    clearInterval(this.enemyTimer);
    var index = 0;
    var enemyBoomTimer = setInterval(() => {
        index++;
        if (this.el.className == 'enemy-small') {

            if (index % 3 == 0) {
                this.el.remove();
                clearInterval(enemyBoomTimer);


            }
            this.el.style.background = ` url(./images/plane1_die${index%3+1}.png)`;
        }
        if (this.el.className == 'enemy-large') {

            if (index % 6 == 0) {
                this.el.remove();

                clearInterval(enemyBoomTimer);


            }
            this.el.style.background = ` url(./images/plane3_die${index%6+1}.png)`;
        }
        if (this.el.className == 'enemy-middle') {

            if (index % 4 == 0) {
                this.el.remove();
                console.log(44)
                clearInterval(enemyBoomTimer);


            }
            this.el.style.background = ` url(./images/plane2_die${index%4+1}.png)`;
        }

    }, 150);
}