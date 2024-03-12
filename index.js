
function easySort(arr) {
    let b = arr.length;
    for (let elemBegin = 0; elemBegin < b; elemBegin++) {
        let minIndex = elemBegin;
        for (let elemNext = elemBegin + 1; elemNext < b; elemNext++) {
            if (arr[elemNext] < arr[minIndex]) {
                minIndex = elemNext;
            }

        }

        let x = arr[elemBegin];
        arr[elemBegin] = arr[minIndex];
        arr[minIndex] = x;
    }
    return arr;
}


function binary_search(arr, a) {
    easySort(arr);
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (arr[middle] === a) {
            return middle;
        }
        else if (arr[middle] > a) { high = middle - 1; }
        else {
            low = middle + 1;
        }
    }
    return null;
};

const arr = [2, 56, 43, 21, 100, 1, 78, 8, 11, 90, 23, 2];

console.log(binary_search(arr, 56));



