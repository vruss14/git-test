let showBtn = false;

// This is an asynchronous function for typing text to the page
// The function accepts 3 parameters: a sentence, an element to append the text to, and
// a delay (longer values slow down typing speed, and smaller values speed it up)

async function typeText(sentence, elementId, delay = 100) {

    // The sentence that will be typed out is split up into characters
    const letters = sentence.split("");

    // Grabs the correct element to append the text to
    const element = document.getElementById(`${elementId}`);

    // Loops through all the characters of the sentence
    for(let i=0; i<letters.length; i++) {

        // Waits before typing the character for the allotted delay; 100 ms is the default value
        await delayTyping(delay)

        // Creates a node for the character and appends it to the correct element
        const letterNode = document.createTextNode(letters[i])
        element.appendChild(letterNode);
    }

    showBtn = true;
    displayBtn();

    return;
}

function delayTyping(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

function displayBtn() {
    if (showBtn) {
        const btn = document.createElement("button");
        btn.classList.add("start-btn")
        btn.textContent = "GET STARTED";
        document.getElementById("container").appendChild(btn);
    }
}

// Calls the function that types the text with the correct parameters

typeText("This quiz will test your knowledge on using Git in the command line. Having a working knowledge of common Git commands can save time and prevent mistakes, especially when working collaboratively with other developers. Ready to begin?", 
"typing-text", 50);


