const gameBoard = (function()
{
    const arr = [
         [0,0,0],
         [0,0,0],
         [0,0,0]

        ],

    marker = function(e)
        {
           
             if(gameBoard.arr[e.target.getAttribute("data-row")][e.target.getAttribute("data-col")] != 'x' && gameBoard.arr[e.target.getAttribute("data-row")][e.target.getAttribute("data-col")] != 'o')
              {
                 if(turn)
                {
                 e.target.innerHTML = playerOne.symbol;
                 gameBoard.arr[e.target.getAttribute("data-row")][e.target.getAttribute("data-col")] = playerOne.symbol;
                 turn = !turn
                 count = count + 1;
                 gameBoard.checker(playerOne.playerName,playerOne.symbol,e.target.getAttribute("data-row"),e.target.getAttribute("data-col"));
                }else{

                 e.target.innerHTML = playerTwo.symbol;
                 gameBoard.arr[e.target.getAttribute("data-row")][e.target.getAttribute("data-col")] = playerTwo.symbol;
                 turn = !turn
                 count = count + 1;
                 gameBoard.checker(playerTwo.playerName,playerTwo.symbol,e.target.getAttribute("data-row"),e.target.getAttribute("data-col"));
                 }
             }
    
        },



    checker = function(name,symbol,row,col)
    {
   
   
       if(gameBoard.arr[row][0] == symbol &&  gameBoard.arr[row][1] == symbol && gameBoard.arr[row][2] == symbol){
           para.innerHTML = `${name} wins`;
           
       }else if(gameBoard.arr[0][col] == symbol &&  gameBoard.arr[1][col] == symbol && gameBoard.arr[2][col] == symbol)
       {
        para.innerHTML = `${name} wins`;
        
       }else if(gameBoard.arr[0][0] == symbol &&  gameBoard.arr[1][1] == symbol && gameBoard.arr[2][2] == symbol)
       {
        para.innerHTML = `${name} wins`;
        
       }else if(gameBoard.arr[0][2] == symbol && gameBoard.arr[1][1] == symbol && gameBoard.arr[2][0] == symbol){
            para.innerHTML = `${name} wins`;
           
        }
         if(count == 9)
         {
          para.innerHTML = "Its a tie";
         }
   }
    return {arr,checker,marker};
})();

const createPlayer = function(name,symbol){
    playerName = name;
    symbol = symbol;
    return{ playerName , symbol};

};

const playerOne = createPlayer('player 1','x');
const playerTwo = createPlayer('player 2','o');

let count = 0;
const para = document.getElementById("score");
let turn = true;
const blocks = document.querySelectorAll(".block");
blocks.forEach( ele => ele.addEventListener("click",gameBoard.marker));

document.querySelector("#btn").addEventListener("click",refresher);
function refresher()
{
    location.reload();
}





