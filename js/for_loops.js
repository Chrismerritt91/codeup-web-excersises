(function(){
    'use strict'
    // question 2
    function showMultiplicationTable(num, limit) {
        for(var i = 1; i < limit; i++) {
            var total = num * i
             console.log(num + 'x' + i + ' = ' + total)
        }
    }showMultiplicationTable(7, 10)
// question 3
for(var i = 1;i <= 10; i++){
    var random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if(random % 2 === 0){
        console.log(random + ' is even')}
    if(random % 2 !== 0){
        console.log(random + ' is odd')
    }
}
// question 4
    function showDigitsMultipleTimes(max) {
        for (var i = 1; i < 10; i++) {
            var string = i.toString().repeat(i)
            console.log(string)
        }
    }
showDigitsMultipleTimes(9)
// question 5
    function subtractValueFromMax(max, subtract) {
        for (var x = max; x >= 0; x -= subtract) {
            console.log(x)
        }
    }
subtractValueFromMax(100, 5)

})();