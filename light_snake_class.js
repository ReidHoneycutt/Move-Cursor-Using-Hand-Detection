class Light_Snake {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.terminate = 0;
  }
  update() {
    
    if (this.terminate == 1) {
      this.r--;
    }
    else {
      this.r++
    }
  }
  show() {
    fill((frameCount%1000)/1000, 1, 1);
    stroke(1-(frameCount%1000)/1000, 1, 1)
    ellipse(this.x, this.y, this.r)
  }
}
