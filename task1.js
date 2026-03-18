let arr = [23, 45, 67, 89, 12, 90, 44];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }

    else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
    }
}

console.log("Second Largest Number:", secondLargest);