var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var output = document.querySelector('#output');

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value); 
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial=="" || quantity=="" || current==""){
        showOutput("Please enter all the fields 😠")
    }
    else if(initial > current){
        // var loss = (initial-current) * quantity;
        // var lossPercentage = (loss/initial)*100;

        var loss = parseFloat((initial - current) * quantity).toFixed(2);  
        var lossPercentage = parseFloat(((initial-current) *100)/initial).toFixed(2);
      
        if(lossPercentage > 50){
             document.body.style.backgroundImage = "url('photo/loss.png')";
        }else{
             document.body.style.backgroundImage = "url('photo/loss-2.png')";
        }

        showOutput(`The loss is ${loss} and the absolute Loss percent is ${lossPercentage}% 😱📉`)
    }else if(current > initial){
        // var profit = (current - initial) * quantity;
        // var profitPercentage = (profit/initial)*100;

        var profit = parseFloat((current - initial) * quantity).toFixed(2);  
        var profitPercentage = parseFloat(((current-initial) * 100)/initial).toFixed(2);
        
        document.body.style.backgroundImage = "url('photo/profit.png')";
        showOutput(`Yay! You had absolute profit of ${profit} and the absolute Profit percent is ${profitPercentage}% 🤑📈`)
    }else if(initial == current){
        document.body.style.backgroundImage = "url('photo/img-1.jpg')";
        showOutput("No pain no gain and no gain no pain 🤷")
    }
    
}

function showOutput(message){
    output.innerText = message;
}