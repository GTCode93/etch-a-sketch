/* 
*How do I make a 16x16 grid with DOM methods and CSS styling?
*/

const gridContainer = document.querySelector(".gridContainer");

for(let i=1; i <= 5; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItems");
    gridContainer.appendChild(gridItem);
}