

function displayPoem(response){
    
        new Typewriter('#poemContainer', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
});

let userInput = document.querySelector("#user-input");
    

}

function generatePoem(event){
    event.preventDefault();
    
    
    let userInput = document.querySelector("#userInput");
        new Typewriter('#poemContainer', {
    strings: `⌛Generating a poem about ${userInput.value}`,
    autoStart: true,
    delay: 1,
    cursor: ""
});

    
    let apiKey = "db36a36a2f66f8114f09od05493b24tc";
    let prompt = `User instructions: Generate a poem about ${userInput.value}`;
    let context = `You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br>. Do not include quotes and the name "html". Make sure to follow the user instructions.Do not include a title to the poem. Sign poem with "Olive" inside a <strong> element at the end of the poem and NOT at the beginning`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poemElement = document.querySelector(".poem");
    poemElement.style.display = "block";
    axios.get(apiUrl).then(displayPoem);
}

let poemGenerator = document.querySelector("#poem-generator");
poemGenerator.addEventListener("submit", generatePoem);