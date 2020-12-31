//  how many times a certain element appears in an array

var arr = [1, 3, 4, 8, 20, 87, 55, 35, 24, 53, 25, 25, 69, 90];

function manyTimes(arr, num) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            counter++
        }
    }
    return counter;
}
console.log(manyTimes(arr, 25))