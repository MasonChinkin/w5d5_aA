const readline = require('readline');

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft === 0) {
        return completionCallback();
    }
    
    reader.question("Give number to be added: ", function (input) {
        input = parseInt(input);
        sum += input
        console.log(sum);
        addNumbers(sum, numsLeft - 1, completionCallback)
    })
    console.log("I will not wait for the input")
    console.log("Neither will I")
}

// named functions get hoisted
function completionCallback(sum, input) {    
    reader.close();
}

addNumbers(0, 1000, completionCallback);


function asyncStuff3() {
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
    }, -1)
    console.log("Bye");
}