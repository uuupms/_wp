/*
物件遍歷

建立一個物件 scores = { Alice: 85, Bob: 92, Charlie: 78 }。
使用 for...in 迴圈遍歷 scores 物件，輸出 "Alice 的分數是 85" 這樣的資訊。
*/

let scores = { Alice: 85, Bob: 92, Charlie: 78 }
for (let name in scores) {
    console.log(name + " 的分數是 " + scores[name]);
  }

/*
for...in 迴圈是一個遍歷物件屬性名稱（鍵）的方法。
迴圈中的變數 name 會依次取得物件的每一個屬性名稱，你可以使用 scores[name] 來獲取該屬性名稱對應的值。

程式碼解釋：
let scores = { Alice: 85, Bob: 92, Charlie: 78 }; 定義了一個 scores 物件，包含三個屬性：Alice、Bob 和 Charlie，以及它們對應的分數。
for (let name in scores) 開始迴圈，name 會依次被賦值為 scores 物件中的每個屬性名稱：
第一次迴圈時，name 會是 "Alice"。
第二次迴圈時，name 會是 "Bob"。
第三次迴圈時，name 會是 "Charlie"。
console.log(name + " 的分數是 " + scores[name]); 這行代碼會輸出每個學生的名字和對應的分數：
第一輪輸出 Alice 的分數是 85。
第二輪輸出 Bob 的分數是 92。
第三輪輸出 Charlie 的分數是 78。

for...in 迴圈基本語法：
for (let key in object) {
  // 每次迴圈，key 會是物件的一個屬性名稱
}
解釋：
let key in object：這行表示在物件 object 中，變數 key 會依次代表每一個屬性名稱（屬性的鍵）。
object[key]：當你有了 key，你可以使用這個 key 來訪問物件中對應屬性名稱的值。

*/
