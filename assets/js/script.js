let count = 0;
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
        btn.setAttribute("id", "start")
        document.getElementById("container").appendChild(btn);
    }
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
            console.log("You're right!");
        } else {
            console.log("Incorrect.");
        }

        // Count starts at zero so finishing the questions means count will be one less
        // than questionList.length

        if (count === questionList.length - 1) {
            return;
        }

        count++;
        askQuestions();
        
    }
});

const questionList = [
    {
        question: "What happens when you run git --version in your present working directory?",
        A: "The version of git your computer is currently using will be printed.",
        B: "The most recent version of git will display, with the option to upgrade.",
        C: "A history of the previous versions of git your computer has used will be printed.",
        D: "This is an invalid command and will result in an error.",
        correct: "The version of git your computer is currently using will be printed."
    }, 

    {
        question: "What happens when you run git --help in your present working directory?",
        A: "You are connected with a Git chat agent.",
        B: "This is an invalid command will result in an error.",
        C: "A list of common Git commands used in various situations are displayed.",
        D: "You are prompted to input a question, which will be used as a query for Git FAQs.",
        correct: "A list of common Git commands used in various situations are displayed."
    },

    {
        question: "What happens when you run git --help --all or git--help -a in your present working directory?",
        A: "This is an invalid command will result in an error.",
        B: "A list of all available commands is printed.",
        C: "A list of all frequently asked questions about Git is printed.",
        D: "A link to the Git homepage is printed.",
        correct: "A list of all available commands is printed."
    }, 

    {
        question: "To read more about a specific subcommand, what Git command can you use?",
        A: "git help --all",
        B: "git help <command>",
        C: "git read <command>",
        D: "git info <command>",
        correct: "git help <command>"
    },

    {
        question: "In Git, what is the difference between a porcelain command and a plumbing command?",
        A: "Porcelain commands less commonly used by developers than plumbing commands.",
        B: "Porcelain commands are low level commands that can access the inner workings of Git, while plumbing commands are high level and user-friendly.",
        C: "There is no difference between a porcelain and plumbing command.",
        D: "Porcelain commands are high level, user-friendly commands, while plumbing commands are low level and can access the inner workings of Git.",
        correct: "Porcelain commands are high level, user-friendly commands, while plumbing commands are low level and can access the inner workings of Git."
    },
    
    {
        question: "Out of the following Git commands, which is an example of a porcelain command?",
        A: "git checkout",
        B: "git config",
        C: "git prune",
        D: "git replace",
        correct: "git checkout"
    },

    {
        question: "Out of the following Git commands, which is an example of a plumbing command?",
        A: "git add",
        B: "git commit",
        C: "git branch",
        D: "git remote",
        correct: "git remote"
    },

    {
        question: "What happens when you run git add in your present working directory after editing a file?",
        A: "The file will be added to the staging area.",
        B: "The phrase 'Nothing specified, nothing added.' will print because no files were selected.",
        C: "All edited files in the present working directory will be added to the staging area.",
        D: "The edits will be directly transferred to the upstream remote.",
        correct: "The phrase 'Nothing specified, nothing added.' will print because no files were selected."
    },

    {
        question: "What happens when you run git add in your present working directory after editing a file?",
        A: "The file will be added to the staging area.",
        B: "The phrase 'Nothing specified, nothing added.' will print because no files were selected.",
        C: "All edited files in the present working directory will be added to the staging area.",
        D: "The edits will be directly transferred to the upstream remote.",
        correct: "The phrase 'Nothing specified, nothing added.' will print because no files were selected."
    },

    {
        question: "What is the purpose of the command git add?",
        A: "To initialize a git repository.",
        B: "To add a new file to the present working directory.",
        C: "To update the index with current content in the working tree and prepare that content for the next commit.",
        D: "To directly update the upstream remote in real time.",
        correct: "To update the index with current content in the working tree and prepare that content for the next commit."
    },

    {
        question: "In the context of Git, what is an index?",
        A: "A unique identifier for each commit, which is displayed in the git history.",
        B: "A list of all previous commits in the present working directory.",
        C: "A list of all possible git commands that can be run in the command line.",
        D: "A snapshot of the content of the working tree.",
        correct: "A snapshot of the content of the working tree."
    },

    {
        question: "What information do you gain from running git status?",
        A: "A summary of which files have changes staged for the next commit.",
        B: "A list of all possible git commands that can be run in the command line.",
        C: "An indication of which version of Git is running on your local computer.",
        D: "A boolean value of true or false.",
        correct: "A summary of which files have changes staged for the next commit."
    },

]

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

// Calls the function that types the text with the correct parameters

typeText("This quiz will test your knowledge on using Git in the command line. Ready to begin?", 
"typing-text", 10);
