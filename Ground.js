class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = 20;
      this.height = height;
     
  }
  display(){
    var pos = this.body.position;
       push();
       fill(215,150,28);
       pop();

  }
}
