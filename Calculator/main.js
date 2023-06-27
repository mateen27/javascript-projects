window.onload = ()=>{

    //for the Buttons present on the Screen
    const buttons = document.querySelectorAll('.numbers');
    // console.log(buttons)

    //for the TextField 
    const screen = document.querySelector('.screen');
    // console.log(screen)

    //for equals Button [Result]
    const equals = document.querySelector('#btn-equals');

    //for Clear Button
    const clearButton = document.querySelector('#btn-clear');

    buttons.forEach(button =>{
        button.addEventListener('click' , (e)=>{
            // console.log(e.target.innerHTML)
            //+= used for not replacing the old Values from the screen
            screen.value += e.target.innerHTML
        })
    })

    equals.addEventListener('click' , (e)=>{
        if(!screen.value){
            screen.value = "Enter Value"
        }
        else{
            //eval is a method in JS used for calculating the Mathematical Values
            screen.value = eval(screen.value)
        }
    })

    clearButton.addEventListener('click' , (e)=>{
        screen.value = ""
    })
}