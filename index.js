function generatePoem(event){
    event.preventDefault();
    
    let poemContainer = document.querySelector("#poemContainer");
    poemContainer.innerHTML = "The poem will go here";
}

let poemGenerator = document.querySelector("#poem-generator");
poemGenerator.addEventListener("submit", generatePoem);