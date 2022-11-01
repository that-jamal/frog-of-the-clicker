let score = 0;
const showScore = document.getElementById("score");

function countCheat() {
    score = 691;
    showScore.textContent = score
}

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
    if (score >= 140) {
        document.body.style.backgroundImage = "url('https://www.thoughtco.com/thmb/NY5k_3slMRttvtS7mA0SXm2WW9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smallerAndromeda-56a8ccf15f9b58b7d0f544fa.jpg')";

    }
    if (score >= 240) {
        document.body.style.backgroundImage = "url('https://images.ctfassets.net/cnu0m8re1exe/1Gq6ruOWkDmcEq4nF9YmfC/7118566d623072231867ee9506c6b1fd/ASY-UG0319_06.png')";

    }
    if (score >= 700) {
        document.body.style.backgroundImage = "url('black.jpg')";

    }



    if (score >= 1000) {
        setTimeout("location.reload(true);", 1500)
        alert("nah bro is done now okey")

    }
}

