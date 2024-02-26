const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")



let x=150;
let y=140;
let vxl = 0;
let vxr = 0;
let vyt = 0;
let vyb = 0;


function  update() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  x += vxr;
  x += vxl;
  y += vyt;
  y += vyb;
  console.log(y)
  if (x >= canvas.width-8){
    x-=3;
    
  }
  if (x <= -3){
    x+=3;
    
  }

  if (y > canvas.height-9){
    y-=3;
    
  }
  if (y <= -3){
    y+=3;
    
  }
  ctx.fillStyle = "red"
    ctx.fillRect(x,y,10,10)
    requestAnimationFrame(update)
  
}

update()

// Event handler
document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 39){
    
    vxl = 3;
  }
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 39){
    
    vxl = 0;
  }
})


document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 37){
    
    vxr = -3;
  }
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 37){
    
    vxr = 0;
  }
})

document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 40){
    
    vyb = 3;
  }
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 40){
    
    vyb = 0;
  }
})

document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 38){
    
    vyt = -3;
  }
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 38){
    
    vyt = 0;
  }
})







 

    


