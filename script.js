var operator = prompt("Choose your operator: ")
var num1 = parseInt(prompt("Your first number is: "))
var num2 = parseInt(prompt("Your second number is: "))

    if(operator == '+')
    {
        console.log(num1 + num2)
        alert(num1 + num2)
    }
    else if(operator == '-'){
        console.log(num1 - num2)
        alert(num1 - num2)
    }
    else if(operator == '*'){
        console.log(num1 * num2)
        alert(num1 * num2)
    }
    else if(operator == '/') {
        console.log(num1 / num2)
        alert(num1 / num2)
    }