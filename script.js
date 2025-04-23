let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newGame");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCon.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;    
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";    
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner} !`;
    msgCon.classList.remove("hide");
    disableBoxes();
}



const checkWin = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!="") {
            if (pos1 === pos2 && pos2===pos3) {
                console.log("WINNER", pos1);
                showWinner(pos1);
            }
        }
    }
}

newGamebtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click", resetGame);


