/*
4. 物件深度合併
實作 deepMerge(obj1, obj2)，將 obj2 合併到 obj1，如果鍵值是物件則遞迴合併。

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));
*/
/*
{
  a: 1,
  b: { x: 2, y: 5, z: 6 },
  c: 7
}
*/


function deepMerge(obj1, obj2) {
  if (typeof obj1 != 'object') return obj2
  if (typeof obj2 != 'object') return obj1

  let robj = {}

  for (const key in obj1) {
    robj[key] = obj1[key];
  }
  for (const key in obj2) {
    if (robj[key] == null)
        robj[key] = obj2[key]
    else
      robj[key] = deepMerge(obj1[key], obj2[key]);
  }
  return robj;
}

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));


/*
// 定義 deepMerge 函式，將 obj2 合併到 obj1，處理物件內的深度合併
function deepMerge(obj1, obj2) {
    // 如果 obj1 不是物件，則直接返回 obj2
    if (typeof obj1 != 'object') return obj2;

    // 如果 obj2 不是物件，則直接返回 obj1
    if (typeof obj2 != 'object') return obj1;

    // 創建一個新物件 robj 來存儲合併後的結果
    let robj = {};

    // 將 obj1 的所有鍵值對複製到 robj 中
    for (const key in obj1) {
        robj[key] = obj1[key];
    }

    // 遍歷 obj2 的每個鍵
    for (const key in obj2) {
        // 如果 robj 中對應的鍵值是 null，則直接將 obj2 中的值賦給 robj
        if (robj[key] == null)
            robj[key] = obj2[key];
        else
            // 否則，遞迴呼叫 deepMerge 來合併兩個物件
            robj[key] = deepMerge(obj1[key], obj2[key]);
    }

    // 返回合併後的物件 robj
    return robj;
}

// 測試資料
const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };

// 執行 deepMerge 並輸出結果
console.log(deepMerge(obj1, obj2));
*/



/*
詳細註解解析
if (typeof obj1 != 'object') return obj2;：

如果 obj1 不是物件（例如，可能是數字、字串等基本型別），則直接返回 obj2。這樣的設計是避免非物件類型參數的干擾，將物件與基本型別直接合併。
if (typeof obj2 != 'object') return obj1;：

如果 obj2 不是物件，則直接返回 obj1。這同樣避免了非物件類型的干擾。
let robj = {};：

創建一個空物件 robj，用來儲存最終的合併結果。
for (const key in obj1)：

遍歷 obj1 中的每個鍵，並將 obj1 中的值複製到 robj 中。
if (robj[key] == null)：

檢查 robj 中對應的鍵是否為 null 或 undefined，如果是，則將 obj2 中的該鍵值賦給 robj。
這是為了避免覆蓋已經存在的物件或數值。
robj[key] = deepMerge(obj1[key], obj2[key]);：

如果 robj 中對應的鍵已經存在且不是 null，則進行深度合併。遞迴呼叫 deepMerge 函式來處理兩個物件的合併。
return robj;：

返回最終合併後的物件 robj
*/



/*
解釋結果
a: 1 來自 obj1，它在合併後沒有變動。
b: { x: 2, y: 5, z: 6 }：
b 這個鍵在 obj1 和 obj2 中都有，並且它的值是物件，進行了深度合併：
x: 2 來自 obj1。
y: 5 來自 obj2，它覆蓋了 obj1 中的 y: 3。
z: 6 來自 obj2，這個鍵在 obj1 中不存在，所以新增到合併後的物件中。
c: 7 來自 obj2，它會被直接添加到合併後的物件中。
*/
