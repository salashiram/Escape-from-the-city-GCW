// Inicializar puntuación
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

// Función para aumentar puntuación
function increaseScore(points) {
    score += points;
    localStorage.setItem('score', score);
    updateScoreDisplay();
}

// Función para mostrar la puntuación actual
function updateScoreDisplay() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = `Puntuación: ${score}`;
    }
}

// Resetear puntuación
function resetScore() {
    score = 0;
    localStorage.setItem('score', score);
    updateScoreDisplay();
}

// Llamar la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateScoreDisplay();
});

