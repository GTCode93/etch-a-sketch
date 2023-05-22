const gridContainer = document.querySelector(".gridContainer");

for(let i=1; i <= (16*16); i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItems");
    gridContainer.appendChild(gridItem);
}
/* This loop works by creating a new node every iteration. Without including the createElement and classList.add declaration in the loop, the appendChild declaration will just repeatedly replace the node created from the last iteration. */
/* Later, look to take the condition's equation (16*16) and apply the 16 to a variable so the user can use make a grid with however many items they want. */