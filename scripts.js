const gridContainer = document.querySelector(".gridContainer");

for(let i=1; i <= (16*16); i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItems");
    gridContainer.appendChild(gridItem);
}
/* This loop works by creating a new node every iteration. Without including the createElement and classList.add declaration in the loop, the appendChild declaration will just repeatedly replace the node created from the last iteration. */

/* Later, look to take the condition's equation (16*16) and apply the 16 to a variable so the user can use make a grid with however many items they want. I will first need to figure out the grid styling first with FlexBox*/

const gridItemsHovered = document.querySelectorAll(".gridItems");

for(let i=0; i < gridItemsHovered.length; i++) {
    gridItemsHovered[i].addEventListener("mouseover", function() {
        gridItemsHovered[i].classList.toggle("gridItemsHovered");
    });
}



/* 
ADVICE FROM TOP DISCORD:
I'll write out how my current workflow compared to what Damon said to try.
    My workflow:
    Select the grid container, append the 256 items into it, select all the grid items into a node list, add event listener then

    Damon's cleaner workflow suggestion:
    Select the grid container, give the item's an event listener AS you append them, ends up much cleaner and with less code. The event listener and items themselves are created at the exact same time.
*/





/*This code was an alternative method using Array methods to iterate through the node list, but I did not use this version due to concerns that using Array methods on node lists is not best practice. But, it still does work!*/
/* gridItemsHovered.forEach(box => {
    box.addEventListener("mouseover", () => box.classList.add("gridItemsHovered"))
}); */
