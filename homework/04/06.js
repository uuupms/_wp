/*
6. 用函數作為參數來實現自訂過濾
實作 filterArray(arr, predicate)，回傳符合條件的陣列。

console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
// [2, 4]
*/


function filterArray(arr, predicate){
    return arr.filter(predicate);
}
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 

/*
程式碼解析
function filterArray(arr, predicate)：

arr 是需要進行過濾的陣列。
predicate 是一個函數，用來判斷每個元素是否符合條件。這個函數會接收陣列中的每個元素並返回 true 或 false，如果返回 true，則這個元素會被保留下來。
arr.filter(predicate)：

filter() 是陣列的方法，它會遍歷陣列中的每個元素，並使用 predicate 函數進行判斷。
只有當 predicate 函數返回 true 時，該元素才會包含在結果陣列中。
n => n % 2 === 0：

這是一個箭頭函數，作為 predicate 參數傳遞給 filterArray 函數，用來檢查數字是否是偶數（即 n % 2 === 0）。
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0));：

我們將 [1, 2, 3, 4, 5] 陣列和條件 n => n % 2 === 0 傳遞給 filterArray，篩選出符合偶數條件的元素，最終返回 [2, 4]。





// 定義 filterArray 函式，接收一個陣列和條件函式 predicate 作為參數
function filterArray(arr, predicate) {
    return arr.filter(predicate); // 使用 filter 方法來篩選符合條件的元素
}

// 呼叫 filterArray，並傳入一個條件函數 n => n % 2 === 0
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0));





逐步解釋
1. filterArray(arr, predicate)
arr：代表要進行篩選的 陣列。
predicate：是一個 函數，用來決定每個元素是否應該被保留。
2. .filter(predicate)
filter() 是 JavaScript 陣列的內建方法，會遍歷陣列中的每個元素，並把 回傳值為 true 的元素保留下來。
predicate 這個函數會被應用到陣列中的每個元素，並決定該元素是否應該被包含在結果陣列中。





filterArray 會收到 arr = [1, 2, 3, 4, 5] 和 predicate = n => n % 2 === 0。
.filter(n => n % 2 === 0) 會逐一檢查陣列中的每個數字：
1 % 2 === 0 → false，不保留。
2 % 2 === 0 → true，保留 2。
3 % 2 === 0 → false，不保留。
4 % 2 === 0 → true，保留 4。
5 % 2 === 0 → false，不保留。
filter() 最後回傳 [2, 4]，因為這些數字符合條件（為偶數）。

*/
