window.onload = ()=>{
    const inputs = document.querySelectorAll("input")
    
    inputs.forEach(input => {
        input.addEventListener("change" , inputHandler);
    })
}

function inputHandler(){
    const principal = document.getElementById("amount").value
    const interestRate = document.getElementById("interest").value
    const tenure = document.getElementById("tenure").value

    if(!principal || !interestRate || !tenure) return ; //there must be some value in these input fields (Validation Check!)

    //calculating monthly interest as interestRate is yearly
    const monthlyInterest = interestRate / 100 / 12

    //calculating the EMI
    const  emi = principal * monthlyInterest * Math.pow(1 + monthlyInterest , tenure) / (Math.pow(1 + monthlyInterest , tenure) - 1)   //formula for calculating Monthly EMI

    //calculating total Amount
    const totalAmount = emi * tenure ;

    //calculating total Interest
    const totalInterest = totalAmount - principal

    document.getElementById("emi").innerText = "EMI : ₹ " + emi.toFixed(2)
    document.getElementById("totalAmount").innerText = "Total Amount is : ₹ " + totalAmount.toFixed(2)
    document.getElementById("totalInterest").innerText = "Total Interest is : " + totalInterest.toFixed(2) + " % "
    
}