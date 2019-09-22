//单例模式
//静态函数new 构造函数
class GameEngine {
    constructor() {
        this.el = null;
        this.bullets = [];
        this.enemys = [];
        this.timer = {
            //造子弹
            bulletsTimer: 0,
            //开火
            fireTime: 0,
            //创建敌机
            createEnemyTimer: 0,
            //敌机移动

            //我机被撞
            carsPlaneTimer: 0,
            //背景
            pYTimer: 0,

        }
    }
    static Inter() {
        if (GameEngine.InterObj == undefined) {
            GameEngine.InterObj = new GameEngine();
        }
        return GameEngine.InterObj;
    }
    init(cls) {
        this.el = document.querySelector(cls);
        this.el.innerHTML = '';
        this.loading(() => {
            this.el.innerHTML = '';

            this.start();
        });
    }


    start() {
        myplane.init().fire();
        var sorceDiv = document.createElement('div');
        GameEngine.Inter().el.appendChild(sorceDiv);

        sorceDiv.className = 'score';

        var myplaneHpDiv = document.createElement('div');
        GameEngine.Inter().el.appendChild(myplaneHpDiv);
        myplaneHpDiv.className = 'myplaneHp';
        setInterval(() => {
            sorceDiv.innerHTML = `sorce：${myplane.myplaneSroce}`;
            myplaneHpDiv.innerHTML = `hp：${myplane.hp}`;
        })

        var pY = 0;
        GameEngine.Inter().timer.pYTimer = setInterval(() => {
            pY++;
            this.el.style.backgroundPositionY = pY + 'px';

        });
        this.keyCtro();
        this.createEnemy();
        this.carsPlane();

    }
    createEnemy() {
        this.timer.createEnemyTimer = setInterval(() => {
            //------------------------------------------------------
            new Enemy().init().move();


        }, 1000);

    }

    carsPlane() {
        GameEngine.Inter().timer.carsPlaneTimer = setInterval(() => {
            for (const ee in GameEngine.Inter().enemys) {
                for (const bb in GameEngine.Inter().bullets) {
                    if (GameEngine.Inter().enemys[ee] == undefined) {
                        break;
                    }
                    var flag = crashTest(GameEngine.Inter().enemys[ee].el, GameEngine.Inter().bullets[bb].el);

                    if (flag) {
                        GameEngine.Inter().bullets[bb].el.remove();
                        delete(GameEngine.Inter().bullets[bb]);
                        GameEngine.Inter().enemys[ee].hurt();
                    }
                }

            }
            for (const ee in GameEngine.Inter().enemys) {

                var myplaneFlag = crashTest(GameEngine.Inter().enemys[ee].el, myplane.el);
                if (myplaneFlag) {

                    GameEngine.Inter().enemys[ee].hurt();
                    myplane.hurt();
                }
            }
        })

    }


    loading(fn) {
        var logo = document.createElement('div');
        logo.className = 'logo';
        this.el.appendChild(logo);

        var loading = document.createElement('div');
        loading.classList.add('loading');
        this.el.appendChild(loading);

        var loadingIndex = 0;
        var loadingTimer = setInterval(() => {
            loadingIndex++;
            if (loadingIndex >= 6) {
                clearInterval(loadingTimer);
                if (typeof fn == 'function') {
                    fn();
                }
            }
            loading.style.background = `url('./images/loading${loadingIndex%3+1}.png')`;

        }, 200);
    }


    keyCtro() {

        var timer37 = null;
        var timer38 = null;
        var timer39 = null;
        var timer40 = null;
        window.onkeydown = function(evt) {

            var e = evt || window.event;
            var step = 10;
            if (e.keyCode == 37) {
                clearInterval(timer37);
                timer37 = setInterval(() => {
                    myplane.el.style.left = myplane.el.offsetLeft - step + 'px';
                    if (myplane.el.offsetLeft < -myplane.el.offsetWidth / 2 + 2 * step) {
                        myplane.el.style.left = -myplane.el.offsetWidth / 2 + step + 'px';
                        clearInterval(timer37);
                        return;
                    }

                }, 15)

            }
            if (e.keyCode == 38) {

                clearInterval(timer38);

                timer38 = setInterval(() => {
                    myplane.el.style.top = myplane.el.offsetTop - step + 'px';
                    if (myplane.el.offsetTop < step) {
                        myplane.el.style.top = step + 'px';
                        clearInterval(timer38);
                        return;
                    }
                }, 15)

            }
            if (e.keyCode == 39) {

                clearInterval(timer39);
                timer39 = setInterval(() => {
                    myplane.el.style.left = myplane.el.offsetLeft + step + 'px';
                    if (myplane.el.offsetLeft > GameEngine.Inter().el.offsetWidth - myplane.el.offsetWidth / 2) {
                        myplane.el.style.left = GameEngine.Inter().el.offsetWidth - myplane.el.offsetWidth / 2 + 'px';
                        clearInterval(timer39);
                        return;
                    }
                }, 15)

            }
            if (e.keyCode == 40) {
                clearInterval(timer40);
                timer40 = setInterval(() => {
                    myplane.el.style.top = myplane.el.offsetTop + step + 'px';
                    if (myplane.el.offsetTop > GameEngine.Inter().el.offsetHeight - myplane.el.offsetHeight) {
                        myplane.el.style.top = GameEngine.Inter().el.offsetHeight - myplane.el.offsetHeight + 'px';
                        clearInterval(timer40);
                        return;
                    }

                }, 15)

            }
        }


        window.onkeyup = function(evt) {


            var e = evt || window.event;

            if (e.keyCode == 37) {
                clearInterval(timer37);
            }
            if (e.keyCode == 38) {
                clearInterval(timer38);
            }
            if (e.keyCode == 39) {
                clearInterval(timer39);
            }
            if (e.keyCode == 40) {
                clearInterval(timer40);
            }
        }
    }
}