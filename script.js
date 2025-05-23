<<<<<<< HEAD
const difficultySelect = document.getElementById('difficulty-select');
let jsonFile_dif;
if (difficultySelect.value === 'easy') {
  jsonFile_dif = 'questionHTML.json';
} else {
  jsonFile_dif = 'questionHTML.json';
}

// Fetch the JSON file
fetch('jsonFile_dif')
  .then(response => response.json())
  .then(data => {
    let questions = data.question;
    let currentQuestionIndex = 0;
    let score = 0;

    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const scoreEl = document.getElementById('score');
    const submitBtn = document.getElementById('submit-btn');

    // Display the first question
    displayQuestion();

    // Display the next question when the Submit button is clicked
    submitBtn.addEventListener('click', () => {
      // Check if the selected choice is correct
      let selectedChoice = document.querySelector('input[name="choice"]:checked');
      if (selectedChoice) {
        if (selectedChoice.value === 'true') {
          score++;
        }

        // Move on to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          // Display the final score
          questionEl.textContent = 'Quiz Completed';
          choicesEl.innerHTML = '';
          scoreEl.textContent = `Your Score: ${score} out of ${questions.length}`;
        }
      }
    });

    function displayQuestion() {
      // Display the question
      let question = questions[currentQuestionIndex];
      questionEl.textContent = question.question;

      // Display the choices
      choicesEl.innerHTML = '';
      for (let i = 0; i < question.choices.length; i++) {
        let choice = question.choices[i];
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choice';
        input.value = choice.correct;
        let span = document.createElement('span');
        span.textContent = choice.text;
        li.appendChild(input);
        li.appendChild(span);
        choicesEl.appendChild(li);
      }
    }
  });
=======
const difficultySelect = document.getElementById('difficulty-select');
let jsonFile_dif;
if (difficultySelect.value === 'easy') {
  jsonFile_dif = 'questionHTML.json';
} else {
  jsonFile_dif = 'questionHTML.json';
}

// Fetch the JSON file
fetch('jsonFile_dif')
  .then(response => response.json())
  .then(data => {
    let questions = data.question;
    let currentQuestionIndex = 0;
    let score = 0;

    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const scoreEl = document.getElementById('score');
    const submitBtn = document.getElementById('submit-btn');

    // Display the first question
    displayQuestion();

    // Display the next question when the Submit button is clicked
    submitBtn.addEventListener('click', () => {
      // Check if the selected choice is correct
      let selectedChoice = document.querySelector('input[name="choice"]:checked');
      if (selectedChoice) {
        if (selectedChoice.value === 'true') {
          score++;
        }

        // Move on to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          // Display the final score
          questionEl.textContent = 'Quiz Completed';
          choicesEl.innerHTML = '';
          scoreEl.textContent = `Your Score: ${score} out of ${questions.length}`;
        }
      }
    });

    function displayQuestion() {
      // Display the question
      let question = questions[currentQuestionIndex];
      questionEl.textContent = question.question;

      // Display the choices
      choicesEl.innerHTML = '';
      for (let i = 0; i < question.choices.length; i++) {
        let choice = question.choices[i];
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choice';
        input.value = choice.correct;
        let span = document.createElement('span');
        span.textContent = choice.text;
        li.appendChild(input);
        li.appendChild(span);
        choicesEl.appendChild(li);
      }
    }
  });
>>>>>>> 3729e5e556bb27772558d943ae233731e5b3f70a
