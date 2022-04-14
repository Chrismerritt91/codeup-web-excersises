(function(){
    'use strict'
var i = 2;
    while(i <= 65536){
        console.log(i)
        i *= 2
    }


//     // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
//     console.log(i)
//     do{
// // // This expression will generate a random number between 1 and 5
//       var conesBought = Math.floor(Math.random() * 5) + 1;
//       if(i >= 0){return console.log(i - conesBought)}
//         i--
//     }
//     while(i >= 0)
    function randomSales(){
        return  Math.floor(Math.random() * 5) + 1;
    }
    function calculateCones(totalCones) {
        do {
            var totalToSell = Math.floor(Math.random() * 50) + 50;

            var actualSoldAmount = (totalCones >= totalToSell) ? totalToSell : totalCones;

            if (totalToSell === actualSoldAmount) {
                console.log(actualSoldAmount + ' cones sold...')
            } else {
                console.log('cannot sell you ' + totalToSell + ' cones I only have ' + actualSoldAmount + '...')
            }
            totalCones -= actualSoldAmount

        } while (totalCones > 0)
        console.log('yay i sold them all!')
    }
    calculateCones(allCones)
})();