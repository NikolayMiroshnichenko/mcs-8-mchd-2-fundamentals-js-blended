// Знайти спільні елементи в масивах:
// Напиши функцію, яка приймає два масиви і повертає масив, що містить спільні елементи обох масивів.

function findCommonElements(arr1, arr2) {
    const resultArr = [];

    for (const item of arr1) {
        // if (arr2.includes(item)) {
        if (includes(arr2, item)) {
            resultArr.push(item);
        }
    }

    return resultArr;
}

function includes(arr, searchItem) {
    for (const item of arr) {
        if (item === searchItem) {
            return true;
        }
    }

    return false;
}

console.log(findCommonElements([1, 2, 3], [2, 5, 3, 4])); // [2, 3]
console.log(findCommonElements([1, 2, 6, 3], [2, 5, 3, 1, 6, 4])); // [2, 3, 1, 6]