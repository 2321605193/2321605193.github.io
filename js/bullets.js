class Bullets {
    constructor() {
        this.el = null;
        this.id = parseInt(Math.random() * 100000);
    }
    init() {
        this.el = document.createElement('div');
        this.el.className = 'bullet';
        GameEngine.Inter().el.appendChild(this.el);
        this.el.style.left = myplane.el.offsetLeft + myplane.el.offsetWidth / 2 - this.el.offsetWidth / 2 + 'px';
        this.el.style.top = myplane.el.offsetTop - this.el.offsetHeight / 2 + 'px';
        GameEngine.Inter().bullets[this.id] = this;
        return this;
    }
    move() {
        GameEngine.Inter().timer.bulletsTimer = setInterval(() => {
            this.el.style.top = this.el.offsetTop - 10 + 'px';
            if (this.el.offsetTop < 0) {
                this.el.remove();
                GameEngine.Inter().bullets.splice(this.id, 1);
            }
        });
    }

}