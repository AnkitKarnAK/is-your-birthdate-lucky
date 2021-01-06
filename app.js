var btnSubmit=document.querySelector('#btn-submit');
var dobInput=document.querySelector('#dob-input');

var outputDiv=document.querySelector('#output');
var inputText=document.querySelector('#txt-input');
var gifOutput=document.querySelector('#gif-output');





function clickHandler(){
  
 
    var dobYear= dobInput.value.slice(0,4);

    var dobMonth= dobInput.value.slice(5,7);
 
    var dobDate= dobInput.value.slice(8,10);


    var dobInt=parseInt(dobDate+dobMonth+dobYear);


    var dobSum=sumDigits(dobInt);


    var favNo=inputText.value;
    
    var divideModulus=dobSum%favNo;

    outputDiv.innerText="Loading. . .";
    gifOutput.innerHTML="<img src='/images/timer.gif'>";

    if(divideModulus===0){
        var luck="Wohoo! your birthdate is lucky ";
        // var myImage = document.createElement("img");
        // myImage.setAttribute("src", "/images/tada.gif");
        // gifOutput.appendChild(myImage);
        setTimeout(function () {
            gifOutput.innerHTML="<img src='/images/tada.png'>";
            outputDiv.innerText=luck;
        }, 4850);
        


    }else{
        var luck="Your birthdate is not that lucky :(";
        setTimeout(function () {
            gifOutput.innerHTML="<img src='/images/sad.png'>";
            outputDiv.innerText=luck;
        }, 4850);
        
    }

    

    
    
    
    
       
}

function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    console.log(sum)
    return sum;
}




btnSubmit.addEventListener("click", clickHandler)