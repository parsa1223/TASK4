class rectangle{
    constructor(x,y,width,height){
    this.x1=x;
    this.y1=y;
    this.width1=width;
    this.height1=height;
    } shekl(){
       var canvas=document.getElementById('c1');
       var ctx=canvas.getContext('2d');
        ctx.fillRect(this.x1,this.y1,this.width1,this.height1)
        ctx.fillStyle="#f00";
    }
    
}