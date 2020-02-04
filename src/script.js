let matterButton = document.querySelectorAll("#matter");
let colorButton = document.querySelectorAll("#color");
let img = document.querySelector(".chinese_mask");
console.log(img);

console.log(matterButton);

for(let i = 0; i < colorButton.length; i++){
    colorButton[i].addEventListener("click", function(){
        console.log("oui");
        if(i === 0){
            img.src("../img/personnalisation5/character_brown");
            console.log("non");
            
        }
    });
}