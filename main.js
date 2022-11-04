/*******************
 * OUR HELPER CODE *
*******************/


 //Here we add the squares to the canvas dynamically.
const gridWidth = 50; //lookup CSS Grid!
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

//Add buttons for reset and night/day
let brushArea = document.querySelector(".brush")
let buttonReset = document.createElement('button')
let buttonNight = document.createElement('button')
buttonReset.className = "reset";
buttonNight.className = "night";
brushArea.appendChild(buttonReset);
brushArea.appendChild(buttonNight);
buttonReset.innerText = "Reset All";
buttonNight.innerText = "Click for Night";



/***********
 * QUERIES *
***********/


let paints = document.querySelectorAll(".paint .palette-color");
let brush = document.querySelector(".current-brush");
let gridSquares = document.querySelectorAll(".square");
let app = document.querySelector(".app");
let head = document.querySelector(".headings")
let message = document.querySelector(".message")
let isMouseDown = false;

/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

//selects color of paint to use
for(let i = 0; i< paints.length; i++){
  paints[i].addEventListener("click", function(){
    let oldColor = brush.classList[1];
    let newColor = paints[i].classList[1];
    brush.classList.replace(oldColor, newColor);
  })}


// changes canvas color for click events
for(let i = 0; i<gridSquares.length; i++){
  gridSquares[i].addEventListener("click", function(){
    if (isMouseDown === false){
      let oldColor = gridSquares[i].classList[1];
      let newColor = brush.classList[1];
      gridSquares[i].classList.replace(oldColor, newColor);
}})}
    
    
//changes color when click then drag for squares dragged over
app.addEventListener("mousedown", function(){
  isMouseDown = true;})

app.addEventListener("mouseup", function(){
  isMouseDown = false;})

for(let i = 0; i<gridSquares.length; i++){
  gridSquares[i].addEventListener("mouseover", function(){
    if (isMouseDown === true){
      let oldColor = gridSquares[i].classList[1];
      let newColor = brush.classList[1];
      gridSquares[i].classList.replace(oldColor, newColor);
    }})}


//Reset Function
for(let i = 0; i<gridSquares.length; i++){
buttonReset.addEventListener("click", function(){
    if (isMouseDown === false){
      let oldColor = gridSquares[i].classList[1];
      gridSquares[i].classList.replace(oldColor, "color-5");
}})}

//Night/Day Function
buttonNight.addEventListener("click", function(){
  isMouseDown = false;
  let background = app.classList;
  background.toggle("app-night");
  let heading = head.classList;
  heading.toggle("headings-night");
  if(buttonNight.innerText === "Click for Night"){
    buttonNight.innerText = "Click for Day";
  }else{
  buttonNight.innerText = "Click for Night";
  }
})