let music = new Audio("music.mp3")
let turn1 = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let gameOver = false

let turn = "X"

// function to turn 
const changeTurn = ()=>{
    return turn === "X" ? "0": "X"
}

//function check win
const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = "Yeh! " + boxtexts[e[0]].innerText + " Won" 
            gameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px"
            music.play()
            document.querySelector('.line').style.transform = ` rotate(${e[5]}) translate(${e[3]}vw, ${e[4]}vw ) `
        }
    })
}

// Main logic == Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click" , ()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turn1.play();
            checkWin()
            if(!gameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//add onclick listner to button

reset.addEventListener("click" , ()=>{
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element =>{
        element.innerText = ''
    })
    turn = "X"
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0"
    music.pause()
})