// Using control structures, do the following:

// display in the console the numbers from 1 to 20
// display in the console the odd numbers from 1 to 20
// compute the sum of the elements of an array and display it in the console
// compute the maximum of the elements of an array and display it in the console 
// compute how many times a certain element appears in an array
// Challenge

// using nested for generate the following pattern
//            0 1 0 1

//            1 0 1 0

//            0 1 0 1

//            1 0 1 0


var matrix = [];
for (var i = 0; i < 4; i++) {
    matrix[i] = [];
    for (var j = 0; j < 4; j++) {
        matrix[i][j] = (i + j) % 2;
    }
}
console.log(matrix);