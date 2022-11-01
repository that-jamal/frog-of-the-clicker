let score = 0;
const showScore = document.getElementById("score");


function countScore() {
    score++
    showScore.textContent = score




    if (score >= 11) {
        document.body.style.backgroundImage = "url('b1.webp')";

    }
    if (score >= 22) {
        document.body.style.backgroundImage = "url('B2.jpg')";

    }
    if (score >= 33) {
        document.body.style.backgroundImage = "url('b3s1.jpg')";

    }
    if (score >= 44) {
        document.body.style.backgroundImage = "url('b4.jpg')";

    }
    if (score >= 55) {
        document.body.style.backgroundImage = "url('b5s2.jpg')";

    }
    if (score >= 66) {
        document.body.style.backgroundImage = "url('b6.jpg')";

    }
    if (score >= 77) {
        document.body.style.backgroundImage = "url('b7.jpg')";

    }
    if (score >= 88) {
        document.body.style.backgroundImage = "url('b8.jpg')";

    }
    if (score >= 99) {
        document.body.style.backgroundImage = "url('b9.jpg')";

    }
    if (score >= 111) {
        document.body.style.backgroundImage = "url('b10.webp')";

    }
    if (score >= 122) {
        document.body.style.backgroundImage = "url('black.jpg')";

    }
    if (score >= 124) {
        setTimeout("location.reload(true);", 1500)
        alert("bro did it")

    }
}

