//text areas
let inputArea = document.getElementById("inputString");
let outputArea = document.getElementById("outputString");

//get buttons
let basic_button = document.getElementById('basic');
let stack_button = document.getElementById('stack');


//click events
basic_button.addEventListener('mouseup', function (input) {
    outputArea.value = basicForLoop(inputArea.value);
});

stack_button.addEventListener('mouseup', function (input) {
    outputArea.value = stackReverse(inputArea.value);
});


//types of reversing
//string reversing
//stack

/**
 * Basic for loop for reversing a string
 * @param Input {string}
 * @returns {string}
 */
function basicForLoop(Input) {
    let output = "";

    //loop thru the string a add the character to the beginning of the output string
    for(let i = 0; i < Input.length; i += 1){
        output = Input[i] + output;
    }

    return output;
}


/**
 * This converts the input string into an array then pops the end of the array and adds
 * it to the output
 *
 * @param Input {string}
 * @returns {string}
 */
function stackReverse(Input) {
    //normally you add the string to a stack
    //but converting the string to an array basically
    //turns it into a stack

    let input = Input.split("");

    let output = "";

    while(input.length !== 0){
        output += input.pop();
    }

    return output;

}


/**
 * this method uses 2 pointers and swaps the characters between them
 *
 * @param Input {string}
 * @returns {string}
 */
function swapReverse(Input) {

    //create temp var outside loop to prevent creating it each loop
    let temp;

    for(let i = 0, h = Input.length; i < h; i += 1, h -= 1){
        temp = Input[i];
        Input[i] = Input[h];
        Input[h] = temp;
    }

    return Input;
}



