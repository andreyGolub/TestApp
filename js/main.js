let i=0;
let score=0;
let pause=false;
let start=false;

function saveScore(score){
    document.cookie = `${$("#nickname").val()}=${score}`;
    alert(document.cookie);
}

$(".StartBut").click(()=>{
    start=true;
    $(".Game").empty();
        let Timer = setInterval(()=>{
                $(".Game").append(`
                <div class='Cub' id='cub${i}'></div>
                `);
                //$(`#${i}`).css("color", `#${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`);
                $(`#cub${i}`).css("position","absolute");
                $(`#cub${i}`).css("left",`${Math.round(Math.random()*760)}px`);
                $(`#cub${i}`).css("top",`${Math.round(Math.random()*360)}px`);
                $(".Cub").click(()=>{
                    if(!pause&&start){
                        $(`#${event.target.id}`).remove();
                        score++;
                        $(".Score").text(`Points : ${score}`);
                    }
                });
                $(".Timer").text(`Time Left : ${60 - i}`);
                i++;
                if(i==5){
                    alert(score);
                    $('#exampleModal').modal("show");
                    $(".Score").text("Points");
                    $(".Timer").text("Time Left");
                    $(".Game").empty();
                    //$('#saveBut').click(saveScore(score));
                    $('#exampleModal').on('shown.bs.modal',()=>{
                        $('#exampleModal').on('hidden.bs.modal',saveScore(score));
                    });
                    score = 0;
                    i=0;
                    clearInterval(Timer);
                    pause=false;
                    start= false;
                }
        },1000);
    
});



$(".PauseBut").click(()=>{
    if(start){
        if(pause){
            pause=false;
        }else{
            pause=true;
        }
    }
});


