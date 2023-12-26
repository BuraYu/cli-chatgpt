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
                removeAllAboveContainer();
            } else if (userInputValue.trim().toLowerCase() === 'help') {
                helpUser();
            } else {
                
        unknownInput(userInputValue);
            }
        }
    }

    const help = [
        'whois:             Shows the creater of the CLI',       
        'socials:           Shows tqe social credentials of the creator',
        'input:             Enter an prompt to get ChatGPT response',
        'user:              Shows current User',
        'password:          Generate a password'
    ]

    function unknownInput(userInputValue) {
        const newElement = document.createElement('p');
        newElement.textContent = 'unknown command: ' + userInputValue;
        container.insertAdjacentElement('beforebegin', newElement); 
        userInput.value = '';
        userInput.focus();
        addedElements.push(newElement);
    }

    function helpUser() {
        const preElement = document.createElement('pre');
    help.forEach(element => {
        preElement.textContent += element + '\n';
    });

    container.insertAdjacentElement('beforebegin', preElement);
    userInput.value = '';
    userInput.focus();
        
        
    }



    function removeAllAboveContainer() {
        let currentElement = container;
        while (currentElement.previousSibling) {
            const siblingToRemove = currentElement.previousSibling;
            siblingToRemove.parentNode.removeChild(siblingToRemove);
        }
        userInput.value = '';
        userInput.focus();
    }
});




// main();