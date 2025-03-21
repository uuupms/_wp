/*
1.計算字串中字母出現的次數
實作 countLetters(str)，輸入一個字串，回傳一個 Map，其鍵為字母，值為該字母出現的次數。

console.log(countLetters("banana")); 
// Map { 'b' => 1, 'a' => 3, 'n' => 2 }
*/

function countLetters(str){
    let counts = {};

    for (let char of str){
        if(char.match(/[a-zA-Z]/)){
            char = char.toLowerCase();
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    return counts;

}

console.log(countLetters("banana"));


/*
// 定義函式 countLetters，用來計算字串中每個字母的出現次數
function countLetters(str) {
    // 用來儲存字母的頻率的物件
    let counts = {};

    // 使用 for...of 迴圈遍歷字串中的每一個字符
    for (let char of str) {
        // 檢查字符是否為字母 (a-z 或 A-Z)
        if (char.match(/[a-zA-Z]/)) {
            // 將字母轉換為小寫，確保大小寫不區分
            char = char.toLowerCase();
            
            // 如果字符已經在 counts 物件中，則將其數量加 1
            // 否則，初始化為 1
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    // 返回包含字母頻率的物件
    return counts;
}

// 測試函式，計算字串 "banana" 中字母的出現次數
console.log(countLetters("banana"));
*/




/*
步驟解釋
let counts = {};：

創建一個空的物件 counts，用來儲存每個字母及其出現的次數。
for (let char of str)：

使用 for...of 迴圈遍歷 str 字串中的每個字符（char）。
if (char.match(/[a-zA-Z]/))：

使用正則表達式 /[a-zA-Z]/ 檢查字符是否是字母，這樣就能忽略非字母字符（如空格、標點符號等）。
char = char.toLowerCase();：

將每個字母轉換為小寫，這樣就不會區分大小寫（例如 "A" 和 "a" 被視為相同的字母）。
counts[char] = (counts[char] || 0) + 1;：

counts[char] 是物件中存儲當前字母的數量。
(counts[char] || 0) 的作用是檢查 counts[char] 是否已存在。如果已經有這個字母，它就加 1；如果沒有，則初始化為 0，再加 1。
return counts;：

最後返回包含每個字母及其頻率的物件 counts。
*/