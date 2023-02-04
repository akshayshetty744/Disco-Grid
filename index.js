let mainDiv = document.querySelector(".mainDiv");

for (let index = 0; index < 500; index++){
   let  box = document.createElement("div");
    box.classList.add("box");
    box.style.width = "4rem";
    box.style.height = "4rem"
    box.style.border = "1px solid black"
    mainDiv.appendChild(box)
}
let className = document.querySelectorAll(".box");

// Random Number 0 to 500
    function random() {
      return Math.floor(Math.random() *  500);
}
    //Adding Event Listener on Parent Div
    mainDiv.addEventListener("mouseover", () => {
        for (let index = 0; index < className.length; index++){
            const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
           className[index].textContent = random();
            className[index].style.background = randomColor; 
        }
    });