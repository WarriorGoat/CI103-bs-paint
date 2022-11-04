/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
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


// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

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

/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.


