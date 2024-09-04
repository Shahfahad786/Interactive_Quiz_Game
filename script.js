var questions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Central Performance Unit",
            "Computer Programming Unit",
            "Central Program Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which of the following is an example of an input device?",
        options: [
            "Monitor",
            "Printer",
            "Keyboard",
            "Speaker"
        ],
        answer: "Keyboard"
    },
    {
        question: "What is the main function of the operating system?",
        options: [
            "To execute software programs",
            "To manage hardware resources",
            "To connect to the internet",
            "To display graphics"
        ],
        answer: "To manage hardware resources"
    },
    {
        question: "Which programming language is known for its use in web development?",
        options: [
            "Python",
            "Java",
            "JavaScript",
            "C++"
        ],
        answer: "JavaScript"
    },
    {
        question: "What does 'URL' stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Locator",
            "Uniform Retrieval Link",
            "Universal Retrieval Link"
        ],
        answer: "Uniform Resource Locator"
    },
    {
        question: "Which of these is an example of a database management system?",
        options: [
            "Microsoft Word",
            "Google Chrome",
            "MySQL",
            "Adobe Photoshop"
        ],
        answer: "MySQL"
    },
    {
        question: "What does 'RAM' stand for in computing?",
        options: [
            "Read Access Memory",
            "Random Access Memory",
            "Rapid Access Memory",
            "Readable Access Memory"
        ],
        answer: "Random Access Memory"
    },
    {
        question: "Which of the following is an output device?",
        options: [
            "Scanner",
            "Mouse",
            "Microphone",
            "Monitor"
        ],
        answer: "Monitor"
    },
    {
        question: "In programming, what does 'loop' refer to?",
        options: [
            "A type of variable",
            "A function that repeats",
            "A storage device",
            "An error message"
        ],
        answer: "A function that repeats"
    },
    {
        question: "Which of these is used to create a web page?",
        options: [
            "HTML",
            "Java",
            "SQL",
            "Python"
        ],
        answer: "HTML"
    },
    // Add more questions as needed
];

var currentQuestionIndex = 0;

function loadQuestion() {
    var questionElement = document.getElementById('question');
    var optionsContainer = document.getElementById('options-container');

    // Clear previous options
    optionsContainer.innerHTML = '';

    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        var optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}
