document.addEventListener("DOMContentLoaded", function(){
    let squares = document.querySelectorAll("#board div");

    for (let i=0; i<squares.length; i++){
        squares[i].classList.add("square");
    }

    let gameState = ["","","","","","","","",""];
    let current = "X";

    function Winner(){
        const wins = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ];
        for (let win of wins){
            const [a,b,c] = win;
            if(gameState[a]!=="" && gameState[a]===gameState[b] && gameState[a]===gameState[c]){
                let status = document.getElementById("status");
                status.textContent=`Congratulations! ${gameState[a]} is the Winner!`;//you stopped here
                status.classList.add("you-won");
            }
        }
    }

    for (let i=0; i<squares.length; i++){
        squares[i].addEventListener("click",function(){
            if (gameState[i] ==""){
                gameState[i] = current;
                squares[i].innerHTML = current;
                squares[i].classList.add(current);
            
                Winner();

                if (current=="X"){
                current="O";
                }else{
                current="X";
                }
            }
        });
        squares[i].addEventListener("mouseover",function(){
            this.classList.add("hover");
        });
        squares[i].addEventListener("mouseout",function(){
            this.classList.remove("hover");
        }); //ee

    }

    document.querySelector(".btn").addEventListener("click",function(){
        for (let i=0;i<squares.length;i++){
            squares[i].innerHTML="";
            squares[i].classList.remove("X","O");
            gameState[i]="";
        }
        current = "X";
        let status = document.getElementById("status");
        status.textContent = "Click to play!"
        status.classList.remove("you-won");
    })

    
});