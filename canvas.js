                                                                                                         
const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d'); 
// ctx.fillStyle='black'
// ctx.fillRect(10,20,50,40)

           
 let square = 50
 var snakeCell = [[0,0]]
 let bHight = 600
 let bWidth = 1000
 let direction = 'right' //initial dirn right k trf 

let gameOver = false 
let foodG = generateRandomCell()
let score = 0;

document.addEventListener('keydown', function(e){ 
// console.log(e)
if(e.key==='ArrowRight'){
    direction='right'                                     
}
else if(e.key==='ArrowLeft'){
    direction='left'
}
else if(e.key==='ArrowDown'){
    direction='down'
}
else{
    direction='up'
}
}) 
function update(){
 


headX=snakeCell[snakeCell.length-1][0]
headY=snakeCell[snakeCell.length-1][1]
if(direction==='right'){
newX = headX + square
newY = headY
if(newX==bWidth){
    gameOver=true

}
}

else if(direction==='down'){
    newX = headX
    newY = headY + square 
    if(newY==bHight){
        gameOver=true
    }
    
}
else if(direction==='left')
{
    newX = headX - square
    newY = headY
    // if(newX==headX){
    //     gameOver=true;
    // }
    if(newX<0){
        gameOver=true
    }
}
else{
    newX = headX
    newY = headY - square
    if(newY<0){
        gameOver=true


    }
}
snakeCell.push([newX,newY])
if(newX==foodG[0] && newY == foodG[1]){
    foodG =generateRandomCell();
    score+=1;
    return;
}
           
else{


snakeCell.shift() 
}


}

function generateRandomCell(){
    return[Math.round(Math.random()*(bWidth-square)/square)*square, 
    Math.round(Math.random()*(bHight-square)/square)*square
    ];

}
// console.log(Math.round(Math.random()*(bWidth-square)*square)*square);
function draw(){ 
//snake k initial length decide krge. with the help of fillRect
            if(gameOver===true){
                clearInterval(id)
                ctx.font='20px sans-serif'
                ctx.fillText('Gameover',60,70);
                return;       

            }
            ctx.clearRect(0,0,bWidth,bHight);
            
             for(let cell of snakeCell) {
                ctx.fillStyle='green';
                ctx.fillRect(cell[0],cell[1],square,square) //4 parameter pass lre
             }//array se uthega snake cell se.
             ctx.fillStyle='black';
             ctx.fillRect(foodG[0],foodG[1],square,square)     
             ctx.font='20px sans-sarif' 
             ctx.fillText(`SCORE  ${score}`,20,20);
                     
}
let id = setInterval(function(){
    update()
    draw() 
},100) 


 


// console.log(Math.random()*10)



                        
