note 
--
oakMe2
--
// 引入 Oak 框架中的 Application 類別，這是 Deno 上的一個 Web 框架
import { Application } from "https://deno.land/x/oak/mod.ts";

// 建立一個新的應用程式實例
const app = new Application();

// 設定應用程式的中介函式 (Middleware)
app.use((ctx) => {
  // 紀錄請求的 URL
  console.log('url=', ctx.request.url);
  
  // 取得請求的路徑名稱
  let pathname = ctx.request.url.pathname;
  
  // 根目錄路由，顯示自我介紹的 HTML 頁面
  if (pathname == '/') {
    ctx.response.body = `<html>
<body>
<h1>自我介紹</h1>
<ol>
<li><a href="/name">姓名</a></li>
<li><a href="/colledge">大學</a></li>
<li><a href="/major">科系</a></li>
</ol>
</body>
</html>`;
  } 
  // /name 路由，回傳姓名
  else if (pathname == '/name') {
    ctx.response.body = 'pms';
  }  
  // /colledge 路由，回傳大學名稱
  else if (pathname == '/colledge') {
    ctx.response.body = '金大';
  } 
  // /major 路由，回傳科系名稱
  else if (pathname == '/major') {
    ctx.response.body = '資工';
  }
  // 其他路徑目前沒有回應內容 (可以加入 404 處理)
  else {
    // ctx.response.status = 404;
    // ctx.response.body = 'Not Found!';
  }
});

// 在主控台輸出伺服器啟動訊息
console.log('start at : http://127.0.0.1:8000');

// 啟動伺服器，監聽 8000 端口
await app.listen({ port: 8000 });

--
oakApp.js
---

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
  return `<html>
  <head>
  <style>
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
  console.log('ctx.request.url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname.startsWith("/login")) {
    ctx.response.body = page(`
       <form action="" method="post">
         <input type="text" name="user" value="" placeholder="User Name"/>
         <input type="password" name="password" value="" placeholder="Password"/>
       </form>
    `)
  } else {
    ctx.response.body = page(`
      <h1>我的網站</h1>
      ....
    `)
  }
  // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });






-
這段程式碼是一個使用 Deno 和 Oak 框架建立的簡單 Web 伺服器，主要功能是處理 HTTP 請求並回應不同的 HTML 頁面。
-
程式碼解析
-

1️⃣ 引入 Oak 框架

import { Application } from "https://deno.land/x/oak/mod.ts";
-
這行程式碼從 Oak 模組（Deno 的 HTTP 框架）匯入 Application 類別，Oak 的作用類似於 Node.js 的 Express 框架。
-

2️⃣ 建立 Web 應用
const app = new Application();
-
建立一個 Oak 應用程式實例，負責管理 HTTP 請求和回應
-

3️⃣ 定義 HTML 結構函式
function page(body) {
    return `<html>
    <head>
    <style>
    </style>
    </head>
    <body>
    ${body}
    </body>
    </html>`
  }
-
這是一個簡單的函式 page(body)，它回傳一個基本的 HTML 頁面，並將 body 參數的內容插入 <body> 標籤內。
-

4️⃣ 定義 Middleware 處理 HTTP 請求
app.use((ctx) => {
    console.log('ctx.request.url=', ctx.request.url)
    let pathname = ctx.request.url.pathname;
-
app.use() 用來註冊一個 中介軟體（Middleware），這裡的 ctx（Context）代表請求與回應的上下文。

ctx.request.url.pathname 取得請求的路徑，例如：

http://127.0.0.1:8000/ → /

http://127.0.0.1:8000/login → /login


5️⃣ 處理不同路徑的請求
  if (pathname.startsWith("/login")) {
    ctx.response.body = page(`
       <form action="" method="post">
         <input type="text" name="user" value="" placeholder="User Name"/>
         <input type="password" name="password" value="" placeholder="Password"/>
       </form>
    `)
  } else {
    ctx.response.body = page(`
      <h1>我的網站</h1>
      ....
    `)
  }

  -
當網址是 /login 時：
回傳一個簡單的 登入表單（HTML <form>）。
其他網址則顯示：
標題 <h1>我的網站</h1>，可以修改為自己的網站內容。


6️⃣ 列印 URL 查詢參數
 // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
這段程式碼試圖從 URL 查詢參數（Query Parameters）中獲取 name 值，例如：
http://127.0.0.1:8000/?name=Tom
這樣 ctx.request.url.searchParams.get('name') 會得到 "Tom"。


7️⃣ 啟動 Web 伺服器
console.log('start at : http://127.0.0.1:8000');
await app.listen({ port: 8000 });
app.listen({ port: 8000 }) 讓應用程式監聽 8000 埠號，開始接收來自用戶的請求。
console.log('start at : http://127.0.0.1:8000') 讓開發者知道伺服器在哪個 URL 運行。

---

oakInfo.js
-
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  console.log('ctx=', ctx)
  console.log('ctx.request=', ctx.request)
  console.log('url=', ctx.request.url)
  ctx.response.body = `
    method=${ctx.request.method}
    url=${ctx.request.url.href}
    protocol=${ctx.request.url.protocol}
    hostname=${ctx.request.url.hostname}
    pathname=${ctx.request.url.pathname}
    hash=${ctx.request.url.hash}
    search=${ctx.request.url.search}
    searchParams=${ctx.request.url.searchParams}
    searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
    headers=${JSON.stringify(Object.fromEntries(ctx.request.headers))}
  `;
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });

-
這段程式碼是一個使用 Deno 和 Oak 框架建立的簡單 HTTP 伺服器，主要作用是 解析並顯示 HTTP 請求的相關資訊。
-
程式碼解析
1️⃣ 引入 Oak 框架
import { Application } from "https://deno.land/x/oak/mod.ts";
從 Deno 的 Oak 框架 匯入 Application，它是 Oak 提供的核心類別，負責管理 HTTP 伺服器。
2️⃣ 建立 Application 物件
const app = new Application();
建立一個 Application 實例，這是 Oak 應用的入口點。
3️⃣ 註冊 Middleware
app.use((ctx) => {
app.use() 註冊一個 Middleware，當收到 HTTP 請求時，會執行這段處理函式。
4️⃣ 輸出請求資訊
console.log('ctx=', ctx);
console.log('ctx.request=', ctx.request);
console.log('url=', ctx.request.url);
列印整個 ctx（請求上下文），以及 ctx.request 和 ctx.request.url，方便開發者查看請求的完整內容。
5️⃣ 設定 HTTP 回應
ctx.response.body = `
  method=${ctx.request.method}
  url=${ctx.request.url.href}
  protocol=${ctx.request.url.protocol}
  hostname=${ctx.request.url.hostname}
  pathname=${ctx.request.url.pathname}
  hash=${ctx.request.url.hash}
  search=${ctx.request.url.search}
  searchParams=${ctx.request.url.searchParams}
  searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
  headers=${JSON.stringify(Object.fromEntries(ctx.request.headers))}
`;

這段程式碼將請求的詳細資訊回應給客戶端：

HTTP 方法（GET、POST 等）

完整 URL

通訊協定（http: 或 https:）

主機名（127.0.0.1 或 localhost）

路徑名稱（/some/path）

Hash 值（#anchor，通常是用戶端導航的一部分）

查詢字串（如 ?name=Tom&age=25）

個別查詢參數（使用 searchParams.get() 來取得）

請求標頭（Headers）（以 JSON 格式顯示）

6️⃣ 啟動伺服器
console.log('start at : http://127.0.0.1:8000');
await app.listen({ port: 8000 });
伺服器監聽 8000 埠

當啟動後，可以用瀏覽器或 Postman 測試
-