//Fetch the JSON file
fetch('questionHTML.json')
    .then(response => response.json())
    .then(data => {
        let questions = data.question;
        let currentQuestionIndex = 0;
        let score = 0;

        const difficultybtn = document.getElementById('difficulty')
        const questionEl = document.getElementById('question');
        const choicesEl = document.getElementById('choices');
        const scoreEl = document.getElementById('score');
        const submitBtn = document.getElementById('submit-btn');

        //select language ได้มั้ย กูต้องแก้ตรงไหนอีกมั้ยนิ
        function playGame(language) {
          const selectElement = document.getElementById('select language');
          const selectedLanguage = selectElement.Value;
          console.log('Choose ' + selectedLanguage + 'language');
        }

        // Get the selectDifficulty button element        const selectDifficultyBtn = document.querySelector('#selectDifficulty'); กูปวดขี้ ลองเทสดู

        // Add a click event listener to the button
        selectDifficultyBtn.addEventListener('click', () => {
            // Redirect to the quiz game page
            window.location.href = 'lang_html.html';
        });


    //move to difficult that user select  
    // แสดงผลอยู่หน้า lang.html เด้อ 
});