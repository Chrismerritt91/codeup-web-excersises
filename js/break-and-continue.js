(function(){
    'use strict'

//     var userOdd = prompt('please enter an odd number between 1 and 50')
// while(true){
//  if(userOdd % 2 === 0 || userOdd > 50 || userOdd < 1)
//     {alert(userOdd + ' is invalid number, please try again')
//      prompt(' please enter an odd number between 1 and 50')}
//  else {
//      break;
//  }
// }
function getOddNumber(max){
        var input = prompt('input number less than ' + max);

        var isInputInvalid = true

        while(isInputInvalid){

           if((parseInt(input) % 2 !== 0 && parseInt(input) <= max)) break


            input = prompt('input number less than ' + max);
        }
        return parseInt(input);
}
// getOddNumber(5)
    function outputOddNumbers(max){

        var userInput = getOddNumber(max)

        console.log('number to skip is: ' + userInput)

        for (var i = 1; i < max; i += 2){

            if(i === userInput){
                console.log('yikes skipping number ' + userInput)
                continue;
            }
            console.log('here is an odd number:' + i)
        }
    }
    outputOddNumbers(50)
})();