import { DB } from "https://deno.land/x/sqlite/mod.ts";
1. 匯入模組
從 Deno 的第三方模組網站匯入 sqlite 模組。

DB 是用來建立和操作資料庫的主要類別。
從 Deno 的第三方模組匯入 DB 類別，用來建立與操作 SQLite 資料庫。

// Open a database
const db = new DB("test.db");

建立資料表（Table）
如果 people 這個表格不存在，就建立它，欄位有：

id: 主鍵，自動遞增。

name: 文字欄位。


建立名為 people 的資料表。

有兩個欄位：

id: 整數、主鍵，自動遞增。

name: 文字型別。

IF NOT EXISTS 表示：如果這個資料表已經存在，就不會重建。






db.query("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");


 
const names = ["Peter Parker", "Clark Kent", "Bruce Wayne"];
用迴圈將三個名字插入資料表，透過參數化查詢 (?) 防止 SQL 注入。
4. 插入資料（Insert）將三個名字插入到 people 資料表中。

使用 ? 作為參數佔位符，避免 SQL injection（安全性更好）。



// Run a simple query5. 
for (const name of names)
  db.query("INSERT INTO people (name) VALUES (?)", [name]);
  查詢資料並印出來
查詢 people 資料表中的所有資料。
迴圈中 id 和 name 對應每一列的值。
將它們印出來。

db.query(...)
這是呼叫資料庫物件 db 的 query 方法，用來執行 SQL 指令。這裡執行的是一個 INSERT 指令，意思是要新增一筆資料。
"INSERT INTO people (name) VALUES (?)"
這是 SQL 指令，意思是：

INSERT INTO people：要插入的表格名稱是 people。

(name)：要插入的欄位是 name。

VALUES (?)：問號 ? 是參數佔位符，代表這裡要放入一個實際的值。
[name]
這是一個參數陣列，用來對應上面 SQL 指令中的問號 ?。例如如果 name = "Alice"，實際執行時就會變成：這種寫法稱為「參數化查詢」，可以防止 SQL injection（SQL 注入攻擊），讓資料庫更安全。


// Print out data in table
for (const [id, name] of db.query("SELECT id, name FROM people"))
  console.log(id, name);
  🔹 查詢並列出資料
  從資料表中讀出所有 id 和 name，並列印出來。

// Close connection
db.close();
 關閉資料庫連線
 確保程式結束前釋放資源。