const gridContainer = document.querySelector(".gridContainer");
let userInputNumber;

function createGrid(userInputNumber) {

    for(let i=1; i <= (userInputNumber); i++) {
        
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRows");
        gridContainer.appendChild(gridRow);
        for(let i=1; i <= (userInputNumber); i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("gridItems");
            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.add("gridItemHovered")
            })
            gridRow.appendChild(gridItem);
        }
    }
}

for(let i=1; i <= (16); i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRows");
    gridContainer.appendChild(gridRow);
    for(let i=1; i <= (16); i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItems");
        gridItem.addEventListener("mouseover", () => {
            gridItem.classList.add("gridItemHovered")
        })
        gridRow.appendChild(gridItem);
    }
}

const gridButton = document.querySelector(".gridButton");
gridButton.addEventListener("click", () => {
    userInputNumber = prompt("Input a number 0-100! it's recommended to choose a number 16 and above.")
    createGrid(userInputNumber);
});

/* const gridItemsHovered = document.querySelectorAll(".gridItems");
for(let i=0; i < gridItemsHovered.length; i++) {
    gridItemsHovered[i].addEventListener("mouseover", function() {
        gridItemsHovered[i].classList.add("gridItemsHovered");
    });
}
*/

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
