function javaScriptQuiz() {
  
  let correctAnswers = 0;
  let currentStep = 0;
  let sections = document.querySelectorAll('section');

  let correctAnswersObj = {
      0: 'onclick',
      1: 'JSON.stringify()',
      2: 'A programming API for HTML and XML documents'
  };

  let handler = (e) => {
      if (correctAnswersObj[currentStep] === e.target.textContent) {
          correctAnswers++;
      }

      sections[currentStep].style.display = 'none';
      if (sections[currentStep + 1] !== undefined) {
          sections[currentStep + 1].style.display = 'block';
      } else {
          document.querySelector('#results').style.display = 'block';
          document.querySelector('#results > li > h1').textContent = correctAnswers === 3
              ? 'You are recognized as top JavaScript fan!'
              : `You have ${correctAnswers} right answers`;
      }

      currentStep++;
  };

  [...document.querySelectorAll('.quiz-answer')]
      .map((x) => x.addEventListener('click', handler));
}