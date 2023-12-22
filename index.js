// import OpenAI from "openai";

// const openai = new OpenAI({apiKey:'check env for key'});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// async function requestFromUser(message) {
//     const chatgptInput = await openai.chat.completions.create({
//         messages: [{ role: "system", content: message}],
//         model: "gpt-3.5-turbo"
//     })

//     console.log(chatgptInput[0])
// }
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userInputForm');
    const userInput = document.getElementById('userInput');
  
    form.addEventListener('submit', function (event) {
      submitForm(event);
    });
  
    userInput.addEventListener('keydown', function (event) {
      handleKeyDown(event);
    });
  });
  
  function submitForm(event) {
    event.preventDefault();
    const userInputValue = document.getElementById('userInput').value;
    console.log('Submitted user input:', userInputValue);
  }
  
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      submitForm(event);
    }
  }
  
// main();