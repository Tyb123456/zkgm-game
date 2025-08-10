let score = 0;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const gameArea = document.getElementById('game-area');
    const maxTop = gameArea.clientHeight - 50;
    const maxLeft = gameArea.clientWidth - 50;
    bubble.style.top = Math.random() * maxTop + 'px';
    bubble.style.left = Math.random() * maxLeft + 'px';

    bubble.addEventListener('click', () => {
        score++;
        document.getElementById('score').innerText = score;
        bubble.remove();
    });

    document.getElementById('game-area').appendChild(bubble);
    setTimeout(() => bubble.remove(), 2000);
}

function startGame() {
    score = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';

    let gameTime = 60;
    document.getElementById('timer').innerText = gameTime;

    const bubbleInterval = setInterval(createBubble, 800);
    const timerInterval = setInterval(() => {
        gameTime--;
        document.getElementById('timer').innerText = gameTime;

        if (gameTime <= 0) {
            clearInterval(bubbleInterval);
            clearInterval(timerInterval);
            document.getElementById('start-btn').style.display = 'block';
            document.getElementById('game-area').style.display = 'none';
        }
    }, 1000);
}