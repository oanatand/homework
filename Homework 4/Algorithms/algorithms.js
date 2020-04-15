//display in the console the numbers from 1 to 20

var number = 20;
function numbers(n) {
    var i = 1;
    for (i = 1; i <= 20; i++) {
        console.log(i);
    }
}
numbers(number);


//display in the console the odd numbers from 1 to 20

var maxNumber = 20;
function oddNumbers(n) {
    var i = 1;
    for (i = 1; i < n; i = i + 2) {
        console.log(i);
    }
}
oddNumbers(maxNumber);


//compute the sum of the elements of an array and display it in the console

var num = [1, 6, 8, 9, 23, 65, 8, 2, 1];

function sumofNumbers(array) {
    var i = 0;
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;

    // while (i < array.length) {
    //     sum = sum + array[i];
    //     i++;
    // }
    // return sum;
}
console.log(sumofNumbers(num));


//compute the maximum of the elements of an array and display it in the console 

var largest = [34, 65, 87, 98, 3435, 7675, 9, 3, 2, 6];

function maximum(arry, max) {

    max = arry[0];
    for (i = 0; i < arry.length; i++) {
        if (arry[i] > max) {
            max = arry[i];
        }
    }
    return max;
}

console.log(maximum(largest));


// compute how many times a certain element appears in an array

var list = [8, 9, 6, 4, 6, 8, 9, 2, 4, 5, 6, 8, 5, 2,];

function arrayCount(array, n) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            count++;
        }
    }
    return count;
}

console.log(arrayCount(list, 8));


//using nested for generate the following pattern
//0 1 0 1
//1 0 1 0
//0 1 0 1
//1 0 1 0


function pattern() {
    var columns = 4;
    var rows = 4;
    var matrix = [];

    for (var i = 0; i < rows; i++) {
        var currentRow = [];
        for (var j = 0; j < columns; j++) {

            if ((i + j) % 2 == 0) {
                currentRow.push(0);
            }
            else {
                currentRow.push(1);
            }
            console.log("\n")
        }
        matrix.push(currentRow);
    }
   
    return matrix;
}

function printArraysMatrix(matrix) {
    for (var i=0; i<matrix.length; i++) {
        console.log(matrix[i]);
    }
}
console.log(printArraysMatrix(pattern()));


