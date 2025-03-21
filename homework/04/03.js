/*
3. 計算陣列數字總和
實作 sumArray(arr)，計算數字陣列的總和。

console.log(sumArray([1, 2, 3, 4])); 
// 10
*/


function sumArray(arr){
    return arr.reduce((sum,num) => sum + num, 0);
}

console.log(sumArray([1,2,3,4,]));


/*
// 定義 sumArray 函式，計算數字陣列的總和
function sumArray(arr) {
    // 使用 reduce() 方法遍歷陣列並累加每個元素
    // 初始值為 0，累加過程中會將 sum 和 num 相加
    return arr.reduce((sum, num) => sum + num, 0);
}

// 測試 sumArray 函式，並顯示結果
console.log(sumArray([1, 2, 3, 4]));  // 輸出: 10
*/


/*
詳細註解解析
function sumArray(arr)：

定義名為 sumArray 的函式，接受一個數字陣列 arr 作為參數。
arr.reduce((sum, num) => sum + num, 0)：

reduce() 方法對陣列中的所有元素進行累加操作，最終返回累加結果。
sum：這是累加器，表示當前的總和。它會儲存從第一個元素開始的累加結果。
num：這是當前正在處理的陣列元素。
sum + num：在每一次迭代中，將 sum 和 num 相加，並將結果存回 sum。
0：這是 reduce() 的初始值，表示一開始 sum 的值是 0。
console.log(sumArray([1, 2, 3, 4]))：

測試函式 sumArray，並傳入一個數字陣列 [1, 2, 3, 4]。
呼叫後會返回總和 10，並顯示在控制台中。
執行過程
第一輪：sum = 0 + 1 = 1
第二輪：sum = 1 + 2 = 3
第三輪：sum = 3 + 3 = 6
第四輪：sum = 6 + 4 = 10
*/
