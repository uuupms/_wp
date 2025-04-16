import { Application, Router } from "https://deno.land/x/oak/mod.ts";
1. 匯入模組
Application 是 Oak 提供的伺服器應用程式物件。
Router 是負責設定路由（網址對應到的處理方式）的物件。
 Deno 使用 URL 來直接匯入模組，不像 Node.js 是用 npm 安裝。




const books = new Map();
2. 建立書籍資料的 Map
Map 是 JavaScript 的一種資料結構，像是物件但可以保留鍵的順序，並允許任何類型的鍵。


books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});
books.set("2", {
  id: "2",
  title: "The Old Man",
  author: "Lee Ear",
});

把兩本書的資料存進去，key 是書的 id。books.set(key, value) 




const router = new Router();
3. 建立路由器 (Router)
建立一個 Router 用來設定 HTTP 路徑和對應的處理方式。



router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
4. 設定路由規則
當使用者訪問根目錄時，回應 "Hello world!" 字串。GET /：


  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })

GET /book：回傳所有書的資料（用 Array.from 把 Map 的值轉成陣列）。



  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });


GET /book/:id：取得指定 id 的書籍，例如 /book/1。
context.params.id 是從網址取得的 id 參數。
如果找得到該書的 id，就回傳該書的資料。




const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
5. 建立應用程式與啟用路由
app.use(router.routes())：讓 app 使用我們剛剛設定的路由。
app.use(router.allowedMethods())：允許路由支援 GET、POST 等方法。



console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
6. 啟動伺服器
啟動伺服器，監聽在 http://127.0.0.1:8000。
使用 await 是因為 app.listen() 是一個 Promise，會等伺服器關閉才結束。



你可以測試這三個網址：
路徑	    說明
/	        顯示 "Hello world!"
/book	    顯示所有書的清單
/book/1	  顯示第一本書的詳細資料