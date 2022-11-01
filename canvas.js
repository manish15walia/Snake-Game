                                                                                                         
const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d'); //2d me karege kaam.
//ctx var me sare properties store krvali.
// ctx.fillStyle='black'
// ctx.fillRect(10,20,50,40)
 //fillrect structure create krne m help krte.isme  4 parameter pass hote : x,y coordinate , height width
 //ek rect box create kra apne canvas me.color decide kra black. uska shape kesa hoga orr pure screen p uske position kya hoge. 0,0, means starting from initial starting pt 0,0 hona chaye
 //x axis y axis k coordinate 0,0.
 //last me 50,40 : height or width decide kr rha. (Size)
           
 let square = 50
 var snakeCell = [[0,0]]
 let bHight = 600
 let bWidth = 1000
 let direction = 'right' //initial dirn right k trf 
//ek cell add hota rhga. 2d arr bnya qki dynamic chaye.
//ek function : jo canvas k andar snake ke cells ko banyegaa.
let gameOver = false 
let foodG = generateRandomCell()
let score = 0;

document.addEventListener('keydown', function(e){ //e return krga konsa button click kra or uske andr konse properties h
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
}) //keydown hone p kch func run kre.
function update(){
    //initally snake bnega usme kch changes lane h to is func k andr hoga.
    // console.log("hello update")



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

 //isme 2 val pass krge coordinate.

snakeCell.shift() //ye age se new new cell ko remove krta rhga
}

//newX :  headX me ek val add krdege sqaure k height width
//headX cell k last wla point decide krga.
}


//ek or func jo snake ko draw karega.
function generateRandomCell(){
    return[Math.round(Math.random()*(bWidth-square)/square)*square, //to generate food and hamesha random coordinate generate hone wo 50 k multiple hoge(jitna snake k cell  k size h)
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
    draw() // dono ko call har 100 millisec bad call.
},100) //2 paramter : call back func or time kitne tym k liye call hoga //set Interval : dono func ko har 100 milisec bad move krga.


 
//Math random func humesha 0 or 1 k bich jo value dega wo hi hoga.

// console.log(Math.random()*10)



                        