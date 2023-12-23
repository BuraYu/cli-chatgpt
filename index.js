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
    const container = document.querySelector('.container');
    const addedElements = []; // Keep track of added elements
  
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });
  
    userInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitForm();
        }
    });
  
    function submitForm() {
        const userInputValue = userInput.value;
        if (userInputValue.trim() !== '') {
            if (userInputValue.trim().toLowerCase() === 'clear') {
                // If the input is 'clear', remove only the added elements
                removeAddedElements();
            } else if(userInputValue.trim().toLowerCase() === 'help') {
                helpUser();
            }
            
            else {
                const newElement = document.createElement('p');
                newElement.textContent = userInputValue;
                container.insertAdjacentElement('beforebegin', newElement); // Insert above the form
                userInput.value = '';
                userInput.focus();
  
                // Add the new element to the tracking array
                addedElements.push(newElement);
            }
        }
    }
  
    function helpUser() {
      const newElement = document.createElement('p');
      newElement.textContent = 'you can try the following: help, user, credintials';
      container.insertAdjacentElement('beforebegin', newElement);
      userInput.value = '';
      userInput.focus();
  }
  
  function removeAllAboveContainer() {
    let currentElement = container;
    while (currentElement.previousSibling) {
        const siblingToRemove = currentElement.previousSibling;
        siblingToRemove.parentNode.removeChild(siblingToRemove);
    }
}
  });



// main();