const triangleBtn = document.querySelector(`.triangle`);
const pyramidBtn = document.querySelector(`.pyramid`);
const reverseBtn = document.querySelector(`.reverse-pyramid`);
const clearBtn = document.querySelector(`.clear`);
const result = document.querySelector(`.result`);
const linebreak = document.createElement("br");
let symbol = '';
let size = 5;
let choice = [triangleBtn,pyramidBtn,reverseBtn,clearBtn];
function  trianglePaint() {
    for(let i = 1; i<=5; i++) {
        
        for (let j=1; j<=i; j++) {
            symbol+= "*";
            
            
            
            
        }
        symbol+= '<br/>';
        
            
            
    }
    result.innerHTML = symbol;
}
// trianglePaint();


function  pyramidPaint() {
    for(let i = 1; i<=5; i++) {
        
        for (let k = 1; k <= 5 - i; k++) {
            symbol+= "&nbsp";
        }
        
        for (let j=1; j<=i; j+=1) {
            symbol+= "* ";
            
        }
        symbol+= '<br/>';
        
            
            
    }
    result.innerHTML = symbol;
}
// pyramidPaint();

function  reversePaint() {
    for(let i = 0; i<5; i++) {
        
        for (let k = 1; k <= i; k++) {
            symbol+= "&nbsp";
        }
        
        for (let j=5; j>i; j--) {
            symbol+= "*"; 
        }
        symbol+= '<br/>';
        
            
            
    }
    result.innerHTML = symbol;
}












choice.forEach((element) => {
    element.addEventListener(`click`, (event) => {
switch (element) {
        case triangleBtn:
            trianglePaint();
            break;
        case pyramidBtn:
            pyramidPaint();
            break;
        case reverseBtn:
            reversePaint();
            break;
        case clearBtn:
            result.innerHTML = "";
            break;
            
    default:
            break;
            
}
    });
});


    
