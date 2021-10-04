let color = "black"
let rainbow = false;

let clear = document.querySelector("#clearBtn");
clear.addEventListener("click", () =>{
    let size = prompt("Starting a new canvas, how large do you want it to be? x by x", 16);
    if(size > 100 || size < 1){
        alert("Size must be between 1 and 100");
        return;
    }
    makeGrid(size);
});

let rainbowButton = document.querySelector("#rainbowBtn")
rainbowButton.addEventListener("click", () =>{
    rainbow = true;
});

let blackButton = document.querySelector("#blackBtn")
blackButton.addEventListener("click", () =>{
    rainbow = false;
});

function makeGrid(number = 16){
    clearBox("gridContainer");
    let div = document.querySelector("#gridContainer");


    for(let i = 0; i < number; i++){
        let secondaryDiv = document.createElement('div')
        secondaryDiv.className = "rowDiv"
        for(let j = 0; j < number; j++){
            let individualDiv = document.createElement('div')
            individualDiv.className = "indivDiv";
            //individualDiv.textContent="hi";
            //individualDiv.addEventListener("hover", changeColor("black"));
            secondaryDiv.appendChild(individualDiv);
        }
        div.appendChild(secondaryDiv);
    }
    document.getElementById("gridContainer").addEventListener("mouseover", function(event){
        if(event.target.className =="indivDiv" && rainbow === false){
            event.target.style.backgroundColor = color;
        }else if(event.target.className =="indivDiv"){
            event.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        }
    });
}

function clearBox(elementID){
    document.getElementById(elementID).innerHTML = "";
}
makeGrid()