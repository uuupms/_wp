/*
 陣列去重並排序
實作 uniqueSorted(arr)，移除陣列重複的元素並從小到大排序。

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 
// [1, 3, 5, 8]
*/


function uniqueSorted(arr){
    const uniqueArr = [...new Set(arr)];
    return uniqueArr.sort((a,b)=>a-b);
}

console.log(uniqueSorted([5,3,8,3,1,5,8]));

/*
// 定義函式 uniqueSorted，用來去除陣列中的重複元素並進行排序
function uniqueSorted(arr) {
    // 使用 Set 去重，並使用擴展運算符將其轉換為陣列
    const uniqueArr = [...new Set(arr)];
    
    // 使用 sort() 方法將陣列進行排序
    // 比較函式 (a, b) => a - b 會將陣列從小到大排序
    return uniqueArr.sort((a, b) => a - b);
}

// 測試 uniqueSorted 函式，並顯示結果
console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8]));
// 輸出: [1, 3, 5, 8]
*/


/*
詳細註解解析
function uniqueSorted(arr)：

定義了名為 uniqueSorted 的函式，接收一個陣列 arr 作為參數。
const uniqueArr = [...new Set(arr)]：

new Set(arr)：將陣列 arr 傳入 Set，Set 會自動去除重複的元素，返回一個不包含重複元素的 Set 物件。
[...new Set(arr)]：使用 擴展運算符（...）將 Set 轉換回陣列形式，這樣就得到了去重後的陣列 uniqueArr。
return uniqueArr.sort((a, b) => a - b)：

使用 sort() 方法對 uniqueArr 進行排序。sort() 預設是按照字串順序排序的，但我們需要按照數字的大小排序，因此使用了自定義的比較函式 (a, b) => a - b。
a - b 如果結果是負數，表示 a 排在 b 前面。
a - b 如果結果是正數，表示 a 排在 b 後面。
a - b 如果結果是 0，表示 a 和 b 相等，順序不變。
console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8]))：

測試函式，傳入一個有重複元素的陣列 [5, 3, 8, 3, 1, 5, 8]，並顯示去重並排序後的結果。
*/
