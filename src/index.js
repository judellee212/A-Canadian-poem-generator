function generatePoem(event) {
  event.preventDefault()
 
  new Typewriter('#poem', {
    strings: "Oh Canada, we stand on guard for thee",
    autoStart: true,
    delay: 1,
    cursor:"",
  });
 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
