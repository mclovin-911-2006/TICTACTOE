const cells = document.querySelectorAll(".cell");
const result = document.querySelector("#statu");
const restart = document.querySelector("#restartbtn");
const condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let option = ["","","","","","","","",""];
let currentplayer = "X";
let running = false ;
startgame();
function startgame(){
cells.forEach(cell => cell.addEventListener("click",cellclicked))
    restart.addEventListener("click",restartgame);
    result.textContent = `${currentplayer} turn`
    running = true;
}
function cellclicked(){
    const cellindex = this.getAttribute("cellindex");
     if(option[cellindex] != "" || running == false){
        return;
     }
     updatecell(this,cellindex);
     
     winner();
}
function updatecell(cell,index){
    option[index] = currentplayer;
    cell.textContent = currentplayer;
}
function changeplayer(){
    if(currentplayer == "X"){
        currentplayer = "O"
    } else {
        currentplayer = "X"
    }
    result.textContent = `${currentplayer} turn`
}
function winner (){
    let roundwon = false;
    for(let i = 0; i <condition.length; i++){
      const [a,b,c] = condition[i];
    
    if(option[a] === "" || option[b] === "" || option[c] === "") {
        continue;
    }
    if(option[a] === option[b] && option[c] === option[b]){
        roundwon = true;
        break;
    } }
if (roundwon == true){
    result.textContent = `${currentplayer} wins`
    
    running = false;
    
}
else if (!option.includes("")){
    result.textContent = "DRAW"
    running = false;
}
else{
    changeplayer();
}

}
function restartgame (){
    currentplayer = "X";
     option = ["","","","","","","","",""];
    result.textContent = `${currentplayer} turn`;
    cells.forEach(cell => cell.textContent ="");
    running = true;
}