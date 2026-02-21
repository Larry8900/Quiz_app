import {questions} from "./questions.js";

 let currentIndex = 0;
    let score = 0;
    let timerInterval = null;
    let timeLeft = 15;
    let answered = false;

    // ── ELEMENTS ───────────────────────────────────────────────
    const screens = {
      start:  document.getElementById('start-screen'),
      info:   document.getElementById('info-screen'),
      quiz:   document.getElementById('quiz-screen'),
      result: document.getElementById('result-screen'),
    };

    const startBtn    = document.getElementById('start-btn');
    const continueBtn = document.getElementById('continue-btn');
    const exitBtn     = document.getElementById('exit-btn');
    const nextBtn     = document.getElementById('next-btn');
    const replayBtn   = document.getElementById('replay-btn');
    const quitBtn     = document.getElementById('quit-btn');

    const questionText  = document.getElementById('question-text');
    const optionsList   = document.getElementById('options-list');
    const timerDisplay  = document.getElementById('timer-display');
    const timerPill     = document.getElementById('timer-pill');
    const progressFill  = document.getElementById('progress-fill');
    const qCurrent      = document.getElementById('q-current');
    const qTotal        = document.getElementById('q-total');

    // ── SCREEN SWITCHER ────────────────────────────────────────
    function showScreen(name) {
      Object.values(screens).forEach(s => s.classList.remove('active'));
      screens[name].classList.add('active');
    }

    // ── TIMER ──────────────────────────────────────────────────
    function startTimer() {
      clearInterval(timerInterval);
      timeLeft = 15;
      timerDisplay.textContent = timeLeft;
      timerPill.classList.remove('urgent');

      timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 5) timerPill.classList.add('urgent');

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          if (!answered) timeExpired();
        }
      }, 1000);
    }

    function stopTimer() { clearInterval(timerInterval); }

    function timeExpired() {
      answered = true;
      // Highlight correct answer
      Array.from(optionsList.children).forEach(btn => {
        if (btn.dataset.value === questions[currentIndex].answer) btn.classList.add('correct');
        btn.disabled = true;
      });
      nextBtn.style.display = 'block';
    }

    // ── QUIZ LOGIC ─────────────────────────────────────────────
    function initQuiz() {
      currentIndex = 1;
      score = 0;
      qTotal.textContent = questions.length;
      loadQuestion();
    }

    function loadQuestion() {
      answered = false;
      nextBtn.style.display = 'none';
      optionsList.innerHTML = '';
      timerPill.classList.remove('urgent');

      const q = questions[currentIndex];
      const letters = ['A','B','C','D'];

      qCurrent.textContent = currentIndex + 1;
      progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
      questionText.textContent = q.question;

      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.value = opt;
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span> ${opt}`;
        btn.addEventListener('click', () => selectAnswer(btn, opt));
        optionsList.appendChild(btn);
      });

      startTimer();
    }

    function selectAnswer(selectedBtn, selectedOpt) {
      if (answered) return;
      answered = true;
      stopTimer();

      const correct = questions[currentIndex].answer;
      const isCorrect = selectedOpt === correct;

      if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
      } else {
        selectedBtn.classList.add('wrong');
        // Highlight the right one
        Array.from(optionsList.children).forEach(btn => {
          if (btn.dataset.value === correct) btn.classList.add('correct');
        });
      }

      Array.from(optionsList.children).forEach(btn => btn.disabled = true);
      nextBtn.style.display = 'block';
    }

    // ── RESULT ─────────────────────────────────────────────────
    function showResult() {
      stopTimer();
      progressFill.style.width = '100%';

      const pct = score / questions.length;
      let emoji, title;

      if (pct === 1)         { emoji = '🏆'; title = 'Perfect Score!'; }
      else if (pct >= 0.6)   { emoji = '🎉'; title = 'Well Done!'; }
      else if (pct >= 0.4)   { emoji = '😅'; title = 'Not Bad!'; }
      else                   { emoji = '💪'; title = 'Keep Practising!'; }

      document.getElementById('result-emoji').textContent = emoji;
      document.getElementById('result-title').textContent = title;
      document.getElementById('score-num').textContent = score;
      document.getElementById('score-total').textContent = questions.length;
      document.getElementById('score-label').textContent =
        `out of ${questions.length} questions correct`;

      showScreen('result');
    }

    // ── EVENT LISTENERS ────────────────────────────────────────
    startBtn.addEventListener('click', () => showScreen('info'));

    exitBtn.addEventListener('click', () => showScreen('start'));

    continueBtn.addEventListener('click', () => {
      showScreen('quiz');
      initQuiz();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    });

    replayBtn.addEventListener('click', () => {
      showScreen('quiz');
      initQuiz();
    });

    quitBtn.addEventListener('click', () => showScreen('start'));