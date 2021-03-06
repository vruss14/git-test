let questionList;
let count = 0;
let score = 0;

// Retrieves all the questions stored in the MySQL database

async function retrieveQuestions() {
    const response = await fetch("/api/questions", {
        method: "GET",
    }).then(function(data) {
        return data.json();
    }).then(function(data) {
        questionList = data;
    })
}

retrieveQuestions();

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
    return;
}

function delayTyping(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

async function displayBtn() {
    const response = await typeText("This quiz will test your knowledge on using Git in the command line. Ready to begin?", 
    "typing-text", 50);
    const btn = document.createElement("button");
    btn.classList.add("start-btn")
    btn.textContent = "GET STARTED";
    btn.setAttribute("id", "start")
    document.getElementById("container").appendChild(btn);
}

// Event delegation to clear the container after the intro
// Event delegation to see if the user clicked a choice, and if so, get the ID of the choice

document.addEventListener('click',function(e){
    if(e.target && e.target.id === 'start'){
        document.getElementById("container").innerHTML = "";
        askQuestions();
    }

    if(e.target && e.target.classList.value === "choice") {

        // Checks if the user's answer (one of the choice buttons) matches
        // the value for the correct answer in the questionList object

        if(e.target.textContent === questionList[count].correct) {
            score++;
        }

        // Count starts at zero so finishing the questions means count will be one less than questionList.length

        if (count === questionList.length - 1) {
            displayScore();
            return;
        }
        count++;
        askQuestions();
    }
});

function displayScore() {
    document.getElementById("container").innerHTML = "";
    const div = document.createElement('div');
    div.setAttribute('id', 'typing-wrapper');
    document.getElementById('container').appendChild(div);

    const typingText = document.createElement('span');
    typingText.setAttribute('id', 'typing-text');
    div.appendChild(typingText);

    const typingCursor = document.createElement('span');
    typingCursor.setAttribute('id', 'typing-cursor');
    div.appendChild(typingCursor);

    typeText(`Your score is: ${score} / ${questionList.length}`, "typing-text", 50);
}

function askQuestions() {
    document.getElementById("container").innerHTML = "";

    const question = document.createElement("h1");
    question.classList.add("heading");
    question.textContent = questionList[count].question;
    document.getElementById("container").appendChild(question);

    for(let i=0; i<4; i++) {
        const choice = document.createElement("button");
        choice.classList.add("choice");
        choice.id = `choice-${i}`
        document.getElementById("container").appendChild(choice);
    }

    document.getElementById("choice-0").textContent = questionList[count].A;
    document.getElementById("choice-1").textContent = questionList[count].B;
    document.getElementById("choice-2").textContent = questionList[count].C;
    document.getElementById("choice-3").textContent = questionList[count].D;

}

// On page load, the function to display the button is called, which occurs after all the intro text is typed out
// because of the async/await structure

displayBtn();
