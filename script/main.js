let counter = 0;

function verifyAnswer() {
    counter += 1;
    const answer = document.getElementById('answer').value;
    const message = document.getElementById('message');

    if (answer === '2') {
        document.getElementById('wrog-answer').style.display = 'none';
        document.getElementById('little-chu').style.display = 'block';
        document.body.style.background = "linear-gradient(45deg, #ff69b4, #ffd700)";
    } else {
        document.getElementById('little-chu').style.display = 'none';
        document.getElementById('wrog-answer').style.display = 'block';
        switch (counter) {
            case 2:
                message.innerHTML = 'Respondeu errado novo?? :((';
                break;
            case 3:
                message.innerHTML = 'POR QUE????';
                break;
            default:
            if (counter > 3) {
                message.innerHTML = 'Acho que alguem não me ama mais 😭....';
            }
            break;
        }
    }
}
