let color = "black"

function makeGrid(number){
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
        if(event.target.className =="indivDiv"){
            event.target.style.backgroundColor = color;
        }
    });
}

function clearBox(elementID){
    document.getElementById(elementID).innerHTML = "";
}
makeGrid(16);