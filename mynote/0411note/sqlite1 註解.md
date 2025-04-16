import { DB } from "https://deno.land/x/sqlite/mod.ts";
1. 匯入模組
從 Deno 的第三方模組網站匯入 sqlite 模組。
DB 是用來建立和操作資料庫的主要類別。

// Open a database
const db = new DB("test.db");
2. 開啟或建立資料庫
建立一個資料庫連線，檔案名是 test.db。
若該檔案不存在，就會自動建立。

db.query("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
 3. 建立資料表（Table）
 建立名為 people 的資料表。
有兩個欄位：
id: 整數、主鍵，自動遞增。
name: 文字型別。
IF NOT EXISTS 表示：如果這個資料表已經存在，就不會重建。




const names = ["Peter Parker", "Clark Kent", "Bruce Wayne"];
將三個名字插入到 people 資料表中。
使用 ? 作為參數佔位符，避免 SQL injection（安全性更好）。



// Run a simple query
for (const name of names)
  db.query("INSERT INTO people (name) VALUES (?)", [name]);
//將 names 陣列裡的每個名字，逐一插入到 people 資料表中。
//const 是 JavaScript 和 TypeScript 中宣告變數的一種方式，代表這個變數不能被重新指派（reassigned）。
插入資料
這行會把 "Peter Parker" 插入到 people 資料表。
? 是佔位符，用來防止 SQL 注入。
["Peter Parker"] 是傳進去取代 ? 的值。


// Print out data in table 5. 查詢資料並印出來
for (const [id, name] of db.query("SELECT id, name FROM people"))
  console.log(id, name);
查詢 people 資料表中的所有資料。
迴圈中 id 和 name 對應每一列的值。
將它們印出來。
db.query 是什麼？
這是從 Deno 的 SQLite 模組裡 DB 物件提供的一個方法，用來執行 SQL 指令。
這行會：
傳送 SQL 語句給資料庫執行。
如果有結果（像是 SELECT），它會回傳一個可迭代的資料列。
如果是 INSERT、UPDATE 或 DELETE，就只會執行動作，不回傳資料。
//db.query(...) 回傳一個「可以迭代」的結果。
每一筆結果都是一個陣列（這邊是 [id, name]）。
用 for...of 把每一筆拿出來印。
類型	語法範例
建立表格	db.query("CREATE TABLE ...")
插入	db.query("INSERT INTO ... VALUES (?)", [值])
查詢	db.query("SELECT ...")（可搭配迴圈處理結果）
更新	db.query("UPDATE ... SET ... WHERE ...", [新值, 條件])
刪除	db.query("DELETE FROM ... WHERE ...", [條件])



// Close connection
db.close();
