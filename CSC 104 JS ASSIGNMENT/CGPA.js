let first = parseFloat(prompt("Please enter your First Semester GPA"))
alert(first)

let second = parseFloat(prompt("Please enter you Second semester GPA"))
alert(second)

let cummulative = first + second

let cummulative_GPA = cummulative / 2

console.log(cummulative_GPA)

confirm(`Your answer is ${cummulative_GPA}`)

