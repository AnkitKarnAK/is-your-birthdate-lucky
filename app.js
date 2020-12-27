var btnSubmit=document.querySelector('#btn-submit');
var dobInput=document.querySelector('#dob-input');
var dobResult=document.querySelector('#dob-result');
var outputDiv=document.querySelector('#output');
var inputText=document.querySelector('#txt-input')





function clickHandler(){
  
 
    var dobYear= dobInput.value.slice(0,4);

    var dobMonth= dobInput.value.slice(5,7);
 
    var dobDate= dobInput.value.slice(8,10);


    var dobInt=parseInt(dobDate+dobMonth+dobYear);


    var dobSum=sumDigits(dobInt);
    dobResult.innerText=dobSum;

    var favNo=inputText.value;
    
    var divideModulus=dobSum%favNo;
    if(divideModulus===0){
        var luck="your birthdate is lucky ";
        var myImage = document.createElement("img");
        myImage.setAttribute("src", "/images/tada.gif");
        document.querySelector('#gif-output').appendChild(myImage);
    }else{
        var luck="your birthdate is not that lucky :("
    }

    outputDiv.innerText=luck;


    
    
    
    
       
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