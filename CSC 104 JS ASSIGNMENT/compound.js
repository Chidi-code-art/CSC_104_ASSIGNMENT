let principal1 = parseFloat(prompt("Enter the initial pricipal balance", 2))
alert(principal1)

let interest = parseFloat(prompt("Enter the interest rate", 2))
alert(interest)

let number = parseFloat(prompt("Enter the number of times applied per time period", 2))
alert(number)

let time1 = parseFloat(prompt("Enter number of times period elapsed", 2))
alert(time1)


let compund_interest = principal1 * (1 + interest / 100) ** time1 
console.log(compund_interest)

confirm(`Your answer is ${compund_interest}`)