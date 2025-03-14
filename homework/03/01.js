/*
1.變數與型態轉換
宣告一個字串變數 num，內容為 "42"，請將其轉換為數字，並加上 8，使其結果為 50。 (字串轉數字可以用 parseInt )
在 console 輸出結果。
*/

let num = "42";
let result = parseInt(num) + 8;
console.log(result);

/*
解釋：
let num = "42"; 宣告了一個字串變數 num，其內容是 "42"。
parseInt(num) 將字串 "42" 轉換為數字 42。
然後，將轉換後的數字 42 加上 8，得到 50。
最後，console.log(result) 會在控制台輸出結果 50。
*/
