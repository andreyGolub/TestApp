let i=0;
let score=0;
let pause=false;
let start=false;
let cubId=0;
let players = [];

function compare(a, b) {
    if(a.score > b.score) return -1;
    if(a.score < b.score) return 1;
}

function saveScore(){
    let player={
        nick:$("#nickname").val(),
        score:score
    }
    player[length]=player;
    players.sort(compare);
    $(".Result").empty();
    for(let j=0;j<players.length;j++){
        $(".Result").append(`
        <div>${players[j].nick} = ${players[j].score}</div>
        `);
    }
}

$(".StartBut").click(() => {
    i=0;
    score = 0;
    start = true;
    $(".Game").empty();
    let Timer = setInterval(() => {
        if (i == 5) {
            $('#exampleModal').modal("toggle");
            $(".Score").text("Points");
            $(".Timer").text("Time Left");
            $(".Game").empty();
            
            clearInterval(Timer);
            pause = false;
            start = false;
        }else{

            let cubCount = Math.round(Math.random()*2);
            for(let k = -1; k < cubCount;k++){
                $(".Game").append(`
                <div class='Cub' id='cub${cubId}'></div>
                `);
                randomCub(`#cub${cubId}`);
                cubId++;
            }
            

            $(".Cub").click(() => {
                if (!pause && start) {
                $(`#${event.target.id}`).remove();
                score++;
                $(".Score").text(`Points : ${score}`);
                }
            });

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

$('#exampleModal').on('hidden.bs.modal', ()=>{
    saveScore();
});
