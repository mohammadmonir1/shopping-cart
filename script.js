const plusBtn = document.getElementById("increase");
plusBtn.addEventListener("click", function(){
    handleProductChange(true);
})
const mainusBtn = document.getElementById("discrease");
mainusBtn.addEventListener("click", function(){
    handleProductChange(false)
})

function handleProductChange(isIncrease){
    const phoneInput = document.getElementById("increaseNumber");
    const count = parseInt(phoneInput.value);
    // const phoneNewCount = count + 1;
    let phoneNewCount = count;
    if(isIncrease == true){
        phoneNewCount = count + 1;
    }
    if(isIncrease == false && phoneNewCount > 0){
        phoneNewCount = count - 1;
    }
    phoneInput.value = phoneNewCount;
    const totalNumber = phoneNewCount * 1219;
    document.getElementById("total").innerText = "$" + totalNumber;
    totalCalculator()
}

// second product
const phoneInscreaeBtn = document.getElementById("phoneIncreaseBtn");
phoneIncreaseBtn.addEventListener("click", function(){
    handlePhoneChange(true);
})
const phoneDiscreaseBtn = document.getElementById("phoneNumberDiscrease");
phoneDiscreaseBtn.addEventListener("click", function(){
    handlePhoneChange(false)
})

function handlePhoneChange(isIncrease){
    const phoneInput = document.getElementById("phoneInput");
    const count = parseInt(phoneInput.value);
    // const phoneNewCount = count + 1;
    let phoneNewCount = count;
    if(isIncrease == true){
        phoneNewCount = count + 1;
    }
    if(isIncrease == false && phoneNewCount > 0){
        phoneNewCount = count - 1;
    }
    phoneInput.value = phoneNewCount;
    const total = phoneNewCount * 59;
    document.getElementById("secondTotal").innerText = "$" + total;
    totalCalculator()
}


function totalCalculator(){
    const getInput = document.getElementById("increaseNumber");
    const countInput = parseInt(getInput.value);

    const secondGetInput = document.getElementById("phoneInput");
    const countSecondInput = parseInt(secondGetInput.value);

    const subTotal = countInput * 1219 + countSecondInput * 59;
    document.getElementById("subtotalDollar").innerText = "$" + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById("totalTex").innerText = "$" + tax;

    const toralGrand = subTotal + tax;
    document.getElementById("totalGrand").innerText = "$" + toralGrand;
}



// Proti function chara
// Plus button handler
// const plusBtn = document.getElementById("increase");
// plusBtn.addEventListener("click", function(){
//     const phoneInput = document.getElementById("increaseNumber");
//     const count = parseInt(phoneInput.value);
//     const plusCount = count + 1;
//     phoneInput.value = plusCount;
//     const totalNumber = plusCount * 1219;
//     document.getElementById("total").innerText = "$" + totalNumber;
// })

// mainus button event handler
// const mainusBtn = document.getElementById("discrease");
// mainusBtn.addEventListener("click", function(){
//     const discreaseInput = document.getElementById("increaseNumber");
//     const discreaseCount = parseInt(discreaseInput.value);
//     const mainusCount = discreaseCount - 1;
//     discreaseInput.value = mainusCount;
//     const totalNum = mainusCount * 1219;
//     document.getElementById("total").innerText = "$" + totalNum;
// })

// second

// document.getElementById("secondinc").addEventListener("click", function(){
//     const secondInput = document.getElementById("secondInpt");
//     const seconduNumberCount = parseInt(secondInput.value);
//     const secondphoneNewCount = seconduNumberCount + 1;
//     secondInput.value = secondphoneNewCount;
//     const secondTotal = secondphoneNewCount * 59;
//     document.getElementById("secTotal").innerText = "$" + secondTotal;
// })

// mainus
// document.getElementById("seconddisc").addEventListener("click", function(){
//     const secondMainusInput = document.getElementById("secondInpt");
//     const secondMainusNumber = parseInt(secondMainusInput.value);
//     const secondMainusCount = secondMainusNumber - 1;
//     secondMainusInput.value = secondMainusCount;
//     const secondMainusTotal = secondMainusCount * 59;
//     document.getElementById("secTotal").innerText = "$" + secondMainusTotal;
// })