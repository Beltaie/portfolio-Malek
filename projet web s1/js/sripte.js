const correctAnswers = {
                    q1: "b",
                    q2: "b",
                    q3: "a",
                    q4: "b",
                    q5: "a",
                    q6: "b",
                    q7: "a",
                    q8: "a",
                    q9: "a",
                    q10: "c",
};

function checkQuiz() {
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const userAnswers = new FormData(document.getElementById('quiz-form'));
    const resultDiv = document.getElementById('result');
    const scoreParagraph = document.getElementById('score');
    const correctAnswersDiv = document.getElementById('correctAnswers');

    correctAnswersDiv.innerHTML = '';
    for (let [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = userAnswers.get(question);
        if (userAnswer === correctAnswer) {
            score++;
        } else {
            correctAnswersDiv.innerHTML += `<p>${question}: La bonne réponse est ${correctAnswer.toUpperCase()}</p>`;
        }
    }

    scoreParagraph.textContent = `Votre score est ${score} sur ${totalQuestions}`;
    resultDiv.style.display = 'block';
}


function submitTestimonial(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire
    const name = document.getElementById('name').value;
    const testimonial = document.getElementById('testimonial').value;

    // Crée une nouvelle ligne de témoignage
    const newTestimonialRow = document.createElement('tr');
    newTestimonialRow.classList.add('testimonial');
    newTestimonialRow.innerHTML = `
        <td><p><strong>${name} :</strong></p><br></td>
        <td><p>"${testimonial}"</p><br></td>
    `;

    // Ajoute le nouveau témoignage au tableau
    const testimonialsTable = document.querySelector('#testimonials table tbody');
    testimonialsTable.appendChild(newTestimonialRow);

    // Réinitialise le formulaire
    document.getElementById('testimonial-form').reset();
}
