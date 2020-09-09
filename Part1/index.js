let arr = [];
let gameOver = false;

function resetGame(){
    gameOver = false;
    arr = [];
    const tdList = document.getElementsByTagName('td');
    for(let i = 0; i < tdList.length; i++){
        tdList[i].textContent = '';
    }
}

const play = (id) =>{
    if(gameOver){
        return null;
    }
    let player = document.getElementById('player');
    let char = player.innerText;

    //Change box clicked
    let box = document.getElementById(id);
    if(box.innerText != '')
        return null; //if box is clicked dont let them continue;
    box.innerText = char;

    //Add to array
    arr[id] = char;

    //Change player
    char === 'X' ? player.innerText = 'O' : player.innerText = 'X';

    let win = checkForWinner(arr);
    if(win[0] === true){
        window.alert(`Player ${win[1]} has won the game!`);
        gameOver = true;
    }else{
        //CHECK IF FULL
        if(arr.length === 9){
            let full = true;
            for(let i = 0; i < arr.length; i++){
                arr[i] !== 'X' && arr[i] !== 'O' ? full = false : null;
            }
            if(full){
                window.alert("It's a CAT's game.")
                gameOver = true;
            }
        }
    }
}

const checkForWinner = (arr)=>{
    let possibleWins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winBool = false;
    winner = '';
    possibleWins.forEach(el => {
        if(arr[el[0]] === arr[el[1]] && arr[el[1]] === arr[el[2]] && arr[el[1]] != undefined){
            winBool = true;
            winner = arr[el[0]];
        }
    });
    return [winBool,winner]
}

