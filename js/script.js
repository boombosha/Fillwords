let cells = document.querySelectorAll("td");
let cellsColor; 
let isMouseDown = false;

// for(let i = 0; i < cells.length; i++){
//     cells[i].addEventListener("mousedown", function(){
//         cellsColor = this.style.backgroundColor;
//         this.style.backgroundColor = "blue";
//     });
//     cells[i].addEventListener("mouseup", function(){
// 	    cellsColor = this.style.backgroundColor;
// 	    this.style.backgroundColor = "blue";
//     });
// }

let hover = document.querySelectorAll("td")
for(let i = 0; i < hover.length; i++){
    hover[i].addEventListener("mouseover", function(){
	    this.style.fontSize = "2.5em";
    });
    
    hover[i].addEventListener("mouseout", function(){
	    this.style.fontSize = "2em"; 
    });
}

let rightWordIds = [1.1, 1.2, 1.3, 2.3, 3.3, 4.3, 4.4, 4.5];
let rightWordElements = rightWordIds.map(id=>document.getElementById(id));

let currentWordIds = [];

cells.forEach(function(cell) {
  
  function clearCells() {
    cell.style.border = '';
    cell.style.backgroundColor = "";
    
  };

  cell.addEventListener('mousedown', function() {
    isMouseDown = true;
    this.style.border = '2px solid red';
    this.style.backgroundColor = "pink";
    currentWordIds.push(cell.id);
    setTimeout(clearWrongCells, 1500);  
  });
  
  cell.addEventListener('mouseover', function() {
    if (isMouseDown) {
      currentWordIds.push(cell.id); // unique
      // console.log(currentWordIds);
      // console.log(rightWordIds);
      this.style.border = '2px solid red';
      this.style.backgroundColor = "pink";
      setTimeout(clearWrongCells, 1500);
      
    }
  });
  
  cell.addEventListener('mouseup', function() {
    isMouseDown = false;
    setTimeout(clearWrongCells, 1500);
    console.log(currentWordIds);
  });

  function clearWrongCells() {
    if (currentWordIds.length != 0) {
      let isRigthWord = false;
      if (currentWordIds.toString() == rightWordIds.toString()) {
        isRigthWord = true;
        currentWordIds = [];
        console.log(currentWordIds);
      }
      else {
        isRigthWord = false;
        clearCells();
        currentWordIds = [];
        console.log('else:  ' + currentWordIds);
      }
    }
    
  }

});




// function clearCells() {
//     cell.style.border = '';
//     cell.style.backgroundColor = "";
// };

// console.log(currentWordIds);

// rightWordElements.forEach(function(rightCell) {
//   rightCell.addEventListener('mousedown', function() {
//     isMouseDown = true;
//     rightCell.style.border = '2px solid green';
//     rightCell.style.backgroundColor = "pink"; 
//   });
  
//   rightCell.addEventListener('mouseover', function() {
//     if (isMouseDown) {
//       rightCell.style.border = '2px solid green';
//       rightCell.style.backgroundColor = "pink";
//     }
//   });
  
//   rightCell.addEventListener('mouseup', function() {
//     isMouseDown = false;
//   });
// });

