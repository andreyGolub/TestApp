
let i=0;
let score=0;
let flag=true;
$(".StartBut").click(()=>{
    $(".Game").empty();
    alert("Game has begun!");

        let Timer = setInterval(()=>{
            if(flag){
                $(".Game").append(`
                <div class='Cub' id='cub${i}'></div>
                `);
                //$(`#${i}`).css("color", `#${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`);
                $(`#cub${i}`).css("position","relative");
                $(`#cub${i}`).css("left",`${Math.round(Math.random()*760)}px`);
                $(`#cub${i}`).css("top",`${Math.round(Math.random()*360)}px`);
                $(".Cub").click(()=>{
                    if(flag){
                        $(`#${event.target.id}`).remove(); 
                        // $(`#${i}`).css("background-color", `#${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`);
                        
                        score++;
                        $(".Score").text(`Points : ${score}`);
                    }
                });
                $(".Timer").text(`Time Left : ${60 - i}`);
                i++;
                if(i==5){
                    flag=false;
                }
            }else{
                if(i==5){
                    let nickName = prompt("Enter your nickname, please","");
                    $(".Score").text("Points");
                    $(".Timer").text("Time Left");
                    document.cookie = `${nickName}=${score}`;
                    score = 0;
                    i=0;
                    clearInterval(Timer);
                    flag=true;
                }
            }
        },1000);
});

$(".PauseBut").click(()=>{
    if(flag){
        flag=false;
    }else{
        flag=true;
    }
});

$(".NewGame").click(()=>{
    i=0;
    score=0;
    $(".Score").text("Points");
    $(".Timer").text("Time Left");
    $(".Game").empty();
});


