
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor:"",
  });
  
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "a245cfb18ac0fc4e1161o64431840t19";
  let context = "You are a cultural poem expert and you are passionate about impactful short poems. Please create a 4 line poem. Separate each line of the poem using </br>. Sign the poem at the end using <em>Anonymous</em>. Follow the User instructions";
  let prompt = `User instructions:Please generate a Canadian poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳ Generating a Canadian poem about ${instructionsInput.value}...</div>`
  axios.get(apiURL).then(displayPoem);
 
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
