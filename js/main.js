let i = 0;
let score = 0;
let pause = false;
let start = false;
let cubId = 0;

function saveScore() {
    document.cookie = $('#nickname').val() + "=" + score;
    getScore();
}

function getScore() {

    function compare(a, b) {
        return b[1] - a[1];
    }

    let players = document.cookie.split("; ");
    console.log(players);
    let res = [];
    for (let k = 0; k < players.length; k++) {
        let [name, score] = players[k].split("=");
        res.push([name, score]);
    }

    res.sort(compare);
    $(".Result").empty();
    for (let j = 0; j < res.length; j++) {
        $(".Result").append(`
        <div class='ResultTableElement'>${res[j][0]} = ${res[j][1]}</div>
        `);
        console.log(document.cookie);
    }
}

$(".StartBut").click(() => {
    i = 0;
    cubId = 0;
    score = 0;
    start = true;
    $(".Game").empty();
    let Timer = setInterval(() => {
        if (i == 3) {
            $('#exampleModal').modal("toggle");
            $(".Score").text("Points");
            $(".Timer").text("Time Left");
            $(".Game").empty();

            clearInterval(Timer);
            pause = false;
            start = false;
        } else {
            // Just for fun
            // for(let t =0; t<cubId;t++){
            //     randomCub(`#cub${t}`);
            // }

            let cubCount = Math.round(Math.random() * 2);
            for (let k = -1; k < cubCount; k++) {
                $(".Game").append(`
                <div class='Cub' id='cub${cubId}'></div>
                `);
                randomCub(`#cub${cubId}`);

                $(`#cub${cubId}`).click(() => {
                    if (!pause && start) {
                        $(`#${event.target.id}`).remove();
                        score++;
                        console.log(`#${event.target.id} ${score}`);
                        $(".Score").text(`Points : ${score}`);
                    }
                });

                cubId++;
            }
            $(".Timer").text(`Time Left : ${60 - i}`);
            i++;
        }
    }, 1000);
});

function randomCub(id) {
    $(`${id}`).css("position", "absolute");
    $(`${id}`).css("left", `${Math.round(Math.random()*760)}px`);
    $(`${id}`).css("top", `${Math.round(Math.random()*360)}px`);
}

$(".PauseBut").click(() => {
    start ? pause = !pause : pause = !pause;
});
$('#saveBut').on('click', () => {
    saveScore();
});
