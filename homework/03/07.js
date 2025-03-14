/*
for 迴圈計算總和

建立一個陣列 arr = [2, 4, 6, 8, 10]。
使用 for 迴圈計算陣列元素的總和，並輸出結果。
*/

let arr = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

/*
解釋：
let arr = [2, 4, 6, 8, 10]; 定義了一個陣列 arr，包含五個元素。
let sum = 0; 初始化了一個變數 sum，用來存放總和。
for (let i = 0; i < arr.length; i++) { ... } 這個 for 迴圈會從 i = 0 開始，遍歷陣列中的每個元素，直到 i 小於陣列長度為止。
sum += arr[i]; 這行代碼會把陣列中每個元素的值加到 sum 上。
最後，console.log(sum); 會輸出計算出的總和。
執行結果：
這段程式碼會輸出 30，因為 2 + 4 + 6 + 8 + 10 = 30。
*/