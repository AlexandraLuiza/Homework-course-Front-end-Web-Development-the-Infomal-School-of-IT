// max elements of an array

var arr = [1, 5, 3, 2, 7, 9, 6, 8];

function max(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(max(arr))