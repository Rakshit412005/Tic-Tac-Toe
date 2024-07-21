let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame_btn=document.querySelector("#newGame");
let msg=document.querySelector("#msg");
let msgBox=document.querySelector(".msg-box");
let turnO=true;
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabled_boxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText= `Winner is Player ${winner}`; 
    msgBox.classList.remove("hide");
    disabled_boxes();

}
const checkWinner = () => {
    for(patterns of winPatterns){
        let posval1=boxes[patterns[0]].innerText;
        let posval2=boxes[patterns[1]].innerText;
        let posval3=boxes[patterns[2]].innerText;
        if(posval1!=="" && posval2!=="" && posval3!==""){
            if(posval1===posval2 && posval2===posval3){
                console.log("winner");
                showWinner(posval1);
            }

        }
    }
}
const reset_Btn=()=>{
    turnO=true;
    enable_boxes();
    msgBox.classList.add("hide");
    

}
const enable_boxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newGame_btn.addEventListener("click",reset_Btn);
resetBtn.addEventListener("click",reset_Btn);

