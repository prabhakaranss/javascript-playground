// https://www.hackerrank.com/challenges/2d-array/problem

let hourglassSum = (arr) => {
    let sumList = [];
    for (let row = 0; row <= arr.length -3 ; row++) {
        for (let column = 0; column <= arr.length -3; column++ ) {
            let top = arr[row][column] + arr[row][column+1] + arr[row][column+2];
            let mid = arr[row+1][column+1];
            let bottom = arr[row+2][column] + arr[row+2][column+1] + arr[row+2][column + 2];

            sumList.push(top + mid + bottom);

        }
    }
    sumList.sort((a, b) => a-b);
    return  sumList.pop();
};
