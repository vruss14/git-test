let count = 0;
let score = 0;
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
            score++;
        } else {
            console.log("Incorrect.");
        }

        // Count starts at zero so finishing the questions means count will be one less
        // than questionList.length

        if (count === questionList.length - 1) {
            console.log(`Your score was: ${score} / ${questionList.length}`)
            return;
        }

        count++;
        askQuestions();
        
    }
});

const questionList = [

    {
        question: "Which of these is NOT an advantage of a version control system?",
        A: "You can revert selected files back to a previous state.",
        B: "You can compare changes over time.",
        C: "You can see where issues were introduced into a project.",
        D: "Previous versions of a file are not saved.",
        correct: "Previous versions of a file are not saved."
    },

    {
        question: "What kind of version control system is Git?",
        A: "A Local Version Control System",
        B: "A Centralized Version Control System (CVCS)",
        C: "A Distributed Version Control System (DVCS)",
        D: "An Executive Version Control System (EVCS)",
        correct: "A Distributed Version Control System (DVCS)"
    },

    {
        question: "What is unique about a DVCS?",
        A: "Clients fully mirror a repo, including the full history.",
        B: "Clients check out the latest version of the files.",
        C: "Clients copy every branch in a repo.",
        D: "Clients copy all public branches in a repo.",
        correct: "Clients fully mirror a repo, including the full history."
    },

    {
        question: "How does Git think about data?",
        A: "As a list of file-based changes.",
        B: "Like a Python dictionary.",
        C: "Like a JSON object.",
        D: "A stream of snapshots of the files in a project.",
        correct: "A stream of snapshots of the files in a project."
    },

    {
        question: "Which of these are advantages of Git?",
        A: "Offline capabilities.",
        B: "Integrity",
        C: "Difficult to lose committed changes",
        D: "All of the above",
        correct: "All of the above"
    },

    {
        question: "Which of these is NOT a state of a file in Git?",
        A: "Updated",
        B: "Modified",
        C: "Staged",
        D: "Committed",
        correct: "Updated"
    },

    {
        question: "What is a modified file in Git?",
        A: "A file that has been changed and committed.",
        B: "A file that has been changed but not committed.",
        C: "A file that has been added.",
        D: "A file that has been deleted.",
        correct: "A file that has been changed but not committed."
    },

    {
        question: "What is a staged file in Git?",
        A: "A modified file that is marked to be committed.",
        B: "An added file to a project.",
        C: "A file that has been changed and committed.",
        D: "A file that has been changed.",
        correct: "A modified file that is marked to be committed."
    },

    {
        question: "What is a committed file in Git?",
        A: "A file that has been pushed to the upstream remote.",
        B: "A file with data safely stored in the database.",
        C: "A changed file.",
        D: "A file that cannot be deleted from the repo.",
        correct: "A file with data safely stored in the database."
    },

    {
        question: "What is the working tree?",
        A: "The backlog of tasks for developers to work on.",
        B: "A collection of all the versions of a project.",
        C: "A single checkout of one version of a project.",
        D: "A list of staged commits.",
        correct: "A single checkout of one version of a project."
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
        question: "What is the staging area?",
        A: "A file that stores info about the next commit.",
        B: "A history of all previous commits.",
        C: "A list of untracked files.",
        D: "A list of all files in a project.",
        correct: "A file that stores info about the next commit."
    },

    {
        question: "What is copied when you clone a repository?",
        A: "A working tree.",
        B: "A new branch.",
        C: "Only the files of interest.",
        D: "The Git directory.",
        correct: "The Git directory."
    },

    {
        question: "What command lets you set your Git username and email?",
        A: "git set",
        B: "git user",
        C: "git config",
        D: "git add user",
        correct: "git config"
    },

    {
        question: "How do you check your configuration settings?",
        A: "git config --v",
        B: "git config --show",
        C: "git config --list",
        D: "git config --settings",
        correct: "git config --list"
    },

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
        question: "What happens when you run git --help --all or git --help -a in your present working directory?",
        A: "This is an invalid command will result in an error.",
        B: "A list of all available commands is printed.",
        C: "A list of all frequently asked questions about Git is printed.",
        D: "A link to the Git homepage is printed.",
        correct: "A list of all available commands is printed."
    },

    {
        question: "In Git, what is the difference between a porcelain command and a plumbing command?",
        A: "Porcelain commands are less commonly used by developers than plumbing commands.",
        B: "Plumbing commands cannot access the inner workings of Git.",
        C: "There is no difference between a porcelain and plumbing command.",
        D: "Porcelain commands are high level, user-friendly commands.",
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
        question: "To read more about a specific subcommand, what Git command can you use?",
        A: "git help --all",
        B: "git help <command>",
        C: "git read <command>",
        D: "git info <command>",
        correct: "git help <command>"
    },

    {
        question: "What command pulls down an entire history of a project?",
        A: "git copy",
        B: "git clone",
        C: "git checkout",
        D: "git pull --history",
        correct: "git clone"
    },

    {
        question: "What is the difference between a tracked and untracked file?",
        A: "You cannot commit untracked files.",
        B: "Untracked files have no changes/edits.",
        C: "Git cannot recognize an untracked file.",
        D: "Tracked files are files Git knows about.",
        correct: "Tracked files are files Git knows about."
    },

    {
        question: "What information do you gain from running git status?",
        A: "A summary of which files have changes staged for the next commit.",
        B: "A list of all possible git commands that can be run in the command line.",
        C: "An indication of which version of Git is running on your local computer.",
        D: "A boolean value of true or false.",
        correct: "A summary of which files have changes staged for the next commit."
    },

    {
        question: "What happens when you run git add in your present working directory after editing a file?",
        A: "The file will be added to the staging area.",
        B: "The phrase 'Nothing specified, nothing added.' will print because no files were selected.",
        C: "All edited files in the directory are added to the staging area.",
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
        question: "Why could a file be listed as both staged and unstaged?",
        A: "This is the default for untracked files.",
        B: "If you have made additional changes after running git add.",
        C: "The file was deleted.",
        D: "A file cannot be listed as both unstaged and unstaged.",
        correct: "If you have made additional changes after running git add."
    },

    {
        question: "How would you see a simplied version of git status?",
        A: "git status -s or git status --short",
        B: "git status --simple",
        C: "git status --S or git status --simple",
        D: "git status --overview",
        correct: "git status -s or git status --short"
    },

    {
        question: "What is the purpose of a .gitignore file?",
        A: "Create a private repository.",
        B: "Hide one particular version of a repository.",
        C: "Stop Git from tracking an entire project.",
        D: "Prevent Git from automatically adding certain files.",
        correct: "Prevent Git from automatically adding certain files."
    },

    {
        question: "What command lets you see what you've changed but not yet staged and what you've staged that you're about to commit?",
        A: "git compare",
        B: "git view",
        C: "git diff",
        D: "git status",
        correct: "git diff"
    },

    {
        question: "What happens if you run git commit without the -m flag?",
        A: "Your default editor is launched, such as Vim.",
        B: "The command will fail with an error.",
        C: "Changes will be committed with an empty commit message.",
        D: "You will be prompted with a series of questions about your changes.",
        correct: "Your default editor is launched, such as Vim."
    },

    {
        question: "What command lets you skip the staging area?",
        A: "git commit -a",
        B: "git commit --all",
        C: "git commit --complete",
        D: "git commit --skip",
        correct: "git commit -a"
    },

    {
        question: "What command lets you keep a file on your compute and not have Git track it anymore?",
        A: "git delete",
        B: "git rm --cached",
        C: "git resolve",
        D: "git rm",
        correct: "git rm --cached"
    },

    {
        question: "What displays when you run git log with no arguments?",
        A: "A summary log of possible Git commands.",
        B: "A log of the five previous Git commands you have entered.",
        C: "A list of the commits made in the repo, in chronological order.",
        D: "A list of the commits made in the repo, in reverse chronological order.",
        correct: "A list of the commits made in the repo, in reverse chronological order."
    },

    {
        question: "How is git log --patch different from git log?",
        A: "It patches together the three most recent commits.",
        B: "It displays a 'patch', meaning the most important changes.",
        C: "It shows the difference introduced in each commit.",
        D: "It only shows the latest commit instead of all of them.",
        correct: "It shows the difference introduced in each commit."
    },


    {
        question: "What additional info can you learn from the git log --stat command?",
        A: "List of modified files, # files changed, lines added/removed",
        B: "List of modified files",
        C: "# files changed",
        D: "Lines added/removed",
        correct: "List of modified files, # files changed, lines added/removed"
    },

    {
        question: "What command allows you to redo a commit?",
        A: "git commit --redo",
        B: "git commit --edit",
        C: "git commit --amend",
        D: "git commit --delete",
        correct: "git commit --amend"
    },

    {
        question: "Which two commands all you to undo things in Git?",
        A: "git reset and git undo",
        B: "git reset and git restore",
        C: "git restore and git undo",
        D: "git resolve and git retrace",
        correct: "git reset and git restore"
    },

    {
        question: "What happens when you run git remote --v?",
        A: "You see the word 'origin'.",
        B: "You see the version of Git you have installed.",
        C: "You see the remote's URLs that Git has stored.",
        D: "You see an error.",
        correct: "You see the remote's URLs that Git has stored."
    },

    {
        question: "In Git, what is a lightweight tag?",
        A: "A pointer to a specific commit.",
        B: "A full object in the Git database.",
        C: "An array of the five most recent commits.",
        D: "A JSON object that records events.",
        correct: "A pointer to a specific commit."
    },

    {
        question: "In Git, what is an annotated tag?",
        A: "A commit with extra room to leave comments.",
        B: "A detailed summary about the latest commit.",
        C: "A pointer to a specific commit.",
        D: "A full object in the Git database.",
        correct: "A full object in the Git database."
    },

    {
        question: "How do you create an annotated tag in Git?",
        A: "git tag -m \"message\"",
        B: "git tag -m",
        C: "git tag -a TAGNAME -m \"message\"",
        D: "git tag",
        correct: "git tag -a TAGNAME -m \"message\""
    },

    {
        question: "How do you create a lightweight tag in Git?",
        A: "git tag -m \"message\"",
        B: "git tag TAGNAME",
        C: "git tag",
        D: "git tag -a TAGNAME -m \"message\"",
        correct: "git tag TAGNAME"
    },

    {
        question: "How do you transfer tags to a remote server?",
        A: "Git does this by default when you push code to a repo.",
        B: "git push origin <tagname> or git push origin --tags",
        C: "git push origin tags",
        D: "git push --a",
        correct: "git push origin <tagname> or git push origin --tags"
    },

    {
        question: "What happens when you run git branch?",
        A: "A new branch is added.",
        B: "A list of branches is displayed, with the current branch selected.",
        C: "A branch is split into an old and new version.",
        D: "The branch with the most contributions is displayed.",
        correct: "A list of branches is displayed, with the current branch selected."
    },

    {
        question: "How would you delete a branch through Git?",
        A: "git branch --clear",
        B: "git branch --destroy",
        C: "git branch --remove",
        D: "git branch --delete",
        correct: "git branch --delete"
    },

    {
        question: "What is a blob?",
        A: "A staged commit.",
        B: "The total amount of changes made in a series of files.",
        C: "A version of a file in a Git repository.",
        D: "An unstaged file.",
        correct: "A version of a file in a Git repository."
    },

    {
        question: "What is the default branch name in Git?",
        A: "main",
        B: "master",
        C: "default",
        D: "original",
        correct: "master"
    },

    {
        question: "In Git, what does HEAD refer to?",
        A: "The branch you're currently on.",
        B: "The master branch.",
        C: "A feature branch of your choosing.",
        D: "The repository as a whole.",
        correct: "The branch you're currently on."
    },

    {
        question: "What command would allow you to switch back to the main branch?",
        A: "git switch main",
        B: "git checkout main",
        C: "git branch main",
        D: "git home",
        correct: "git checkout main"
    },

    {
        question: "What command lets you see a history of your commits AND how your history has diverged? ",
        A: "git log",
        B: "git log history --oneline",
        C: "git log history --all",
        D: "git log --oneline --decorate --graph --all",
        correct: "git log --oneline --decorate --graph --all"
    },

    {
        question: "What command allows you to create a new branch and switch to it at the same time?",
        A: "git checkout -b feature-branch",
        B: "git branch feature-branch",
        C: "git checkout feature-branch",
        D: "git branch --checkout feature-branch",
        correct: "git checkout -b feature-branch"
    },

    {
        question: "What is a fast forward in Git?",
        A: "When Git moves the pointer forward because there's no divergent work to merge together.",
        B: "It is synonymous with a git pull.",
        C: "It is equivalent to git fetch.",
        D: "It deletes the current version of a repo and replaces it with an updated version.",
        correct: "When Git moves the pointer forward because there's no divergent work to merge together."
    },

    {
        question: "What is the recursive strategy?",
        A: "Merging when more than one valid ancestor is found.",
        B: "When Git simply moves the pointer forward.",
        C: "A rare merging strategy.",
        D: "None of the above.",
        correct: "Merging when more than one valid ancestor is found."
    },

    {
        question: "What is a merge conflict?",
        A: "When a file is missing key information that Git requires.",
        B: "It's what happens when admin privileges to push code are restricted.",
        C: "When the same file is changed differently in the branches being merged.",
        D: "An unexpected error when running git merge.",
        correct: "When the same file is changed differently in the branches being merged."
    },

    {
        question: "What is a topic branch?",
        A: "Another name for the main/master branch.",
        B: "A short-lived branch used for a single feature.",
        C: "A long-lived branch used for multiple features.",
        D: "A branch that has only one file with edit access at any given time.",
        correct: "A short-lived branch used for a single feature."
    },


    {
        question: "How is git pull different from git fetch?",
        A: "git fetch modifies your working directory automatically.",
        B: "git pull is like running git fetch then git merge",
        C: "git fetch only works with APIs.",
        D: "The commands are completely interchangeable.",
        correct: "git pull is like running git fetch then git merge"
    },


    {
        question: "What is rebasing in Git?",
        A: "It is the same as a git merge.",
        B: "It restores a branch to the previous commit.",
        C: "It creates a new rebase branch that tracks divergent history from main.",
        D: "Taking the changes committed on one branch and replaying them on a different branch.",
        correct: "Taking the changes committed on one branch and replaying them on a different branch."
    },


    {
        question: "What should you avoid when rebasing in Git?",
        A: "Rebasing commits within your personal main branch.",
        B: "Rebasing commits on untracked files.",
        C: "Rebasing commits outside your repo that others may have based work on.",
        D: "Rebasing has no drawbacks and can be used at any time.",
        correct: "Rebasing commits outside your repo that others may have based work on."
    },

    {
        question: "How should you split up your commits?",
        A: "It's best practice to commit once for all changes you make.",
        B: "Do at least one commit per issue.",
        C: "Do at least 10 commits.",
        D: "Commit once a week.",
        correct: "Do at least one commit per issue."
    },

    {
        question: "Which of these is NOT an attribute of a goood quality commit message?",
        A: "The first line should be a concise summary.",
        B: "Write the commit message in the imperative.",
        C: "Include a detailed explanation about the changes.",
        D: "Use abbreviations wherever possible.",
        correct: "Use abbreviations wherever possible."
    },

    {
        question: "What is a cherry-pick in Git?",
        A: "Takes the commit history and highlights the ones with the most lines changed.",
        B: "It is a repo with only files that pass all tests in Git.",
        C: "It is identical to git rebase.",
        D: "Takes a patch introduced in a commit and tries to reapply it on the branch you're currently on.",
        correct: "Takes a patch introduced in a commit and tries to reapply it on the branch you're currently on."
    },

    {
        question: "What does git stash do?",
        A: "Saves a new copy of the repository.",
        B: "Saves your modified files when you don't want to commit unfinished work but need to switch branches.",
        C: "Stashes the .gitignore file.",
        D: "Stashes the public directory in your repo.",
        correct: "Saves your modified files when you don't want to commit unfinished work but need to switch branches."
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
