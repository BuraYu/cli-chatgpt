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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userInputForm");
  const userInput = document.getElementById("userInput");
  const container = document.querySelector(".container");
  const addedElements = []; // Keep track of added elements

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm();
  });

  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submitForm();
    }
  });

  function submitForm() {
    const userInputValue = userInput.value;
    if (userInputValue.trim() !== "") {
      if (userInputValue.trim().toLowerCase() === "clear") {
        // If the input is 'clear', remove only the added elements
        removeAllAboveContainer();
      } else if (userInputValue.trim().toLowerCase() === "help") {
        helpUser();
      } else if (userInputValue.trim().toLowerCase() === "whois") {
        whois();
      } else if (userInputValue.trim().toLowerCase() === "socials") {
        socials();
      } else if (userInputValue.trim().toLowerCase() === "input") {
        helpUser();
      } else if (userInputValue.trim().toLowerCase() === "user") {
        helpUser();
      } else if (userInputValue.trim().toLowerCase() === "password") {
        helpUser();
      } else {
        unknownInput(userInputValue);
      }
    }
  }

  const help = [
    "##############################################################################",
    "#                                                                            #",
    "# whois:git  Shows the creater of the CLI                            #",
    "# socials:           Shows tqe social credentials of the creator             #",
    "# input:             Enter an prompt to get ChatGPT response                 #",
    "# user:              Shows current User                                      #",
    "# password:          Generate a password                                     #",
    "#                                                                            #",
    "##############################################################################",
  ];

  function removeAllAboveContainer() {
    let currentElement = container;
    while (currentElement.previousSibling) {
      const siblingToRemove = currentElement.previousSibling;
      siblingToRemove.parentNode.removeChild(siblingToRemove);
    }
    userInput.value = "";
    userInput.focus();
  }

  function appendTextLetterByLetter(element, text, speed) {
    let index = 0;

    function appendLetter() {
      // Preserve spaces by replacing them with non-breaking spaces
      if (text[index] === " ") {
        element.innerHTML += "&nbsp;";
      } else {
        element.textContent += text[index];
      }

      index++;

      if (index < text.length) {
        setTimeout(appendLetter, speed);
      }
    }

    appendLetter();
  }

  function unknownInput(userInputValue) {
    const newElement = document.createElement("pre");
    container.insertAdjacentElement("beforebegin", newElement);
    addedElements.push(newElement);

    // Call the function to append text letter by letter
    appendTextLetterByLetter(
      newElement,
      "unknown command: " + userInputValue,
      25
    ); // Adjust the speed as needed

    userInput.value = "";
    userInput.focus();
  }

  function whois(userInputValue) {
    const newElement = document.createElement("pre");
    container.insertAdjacentElement("beforebegin", newElement);
    addedElements.push(newElement);

    appendTextLetterByLetter(
      newElement,
      "Hello, I'm Burak! 👋 Currently immersed in the world of Full Stack Development, I find immense\njoy in the process of crafting digital solutions that seamlessly come to life. The intricate dance\nbetween front-end and back-end technologies has become my playground, and each line of code feels\nlike a stroke on a canvas, bringing ideas to reality. The learning journey has been incredibly rewarding,\nand I can't wait to explore more facets of the ever-evolving tech landscape.\nLet's code and create together! 🚀✨",
      10
    ); // Adjust the speed as needed

    userInput.value = "";
    userInput.focus();
  }

  function socials(userInputValue) {
    const newElement = document.createElement("pre");
    container.insertAdjacentElement("beforebegin", newElement);
    addedElements.push(newElement);

    appendTextLetterByLetter(
      newElement,
      "Linkedn: burak.yueksel@hurrdurr.de",
      25
    ); // Adjust the speed as needed

    userInput.value = "";
    userInput.focus();
  }

  function helpUser() {
    const preElement = document.createElement("pre");
    help.forEach((element) => {
      preElement.textContent += element + "\n";
    });

    container.insertAdjacentElement("beforebegin", preElement);
    userInput.value = "";
    userInput.focus();
  }
});

// main();
