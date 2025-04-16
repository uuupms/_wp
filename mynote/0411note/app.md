import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'

//
Application：建立一個 web 應用伺服器。

Router：用來定義路由（URL 對應的行為）。

render：引入自己寫的 render.js 檔案（後面那段程式），裡面有幾個 HTML 畫面生成函式。
//


這是模擬的文章資料，用陣列保存。
const posts = [
  {id:0, title:'aaa', body:'aaaaa'},
  {id:1, title:'bbb', body:'bbbbb'}
];




const router = new Router();

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);

  //
這裡設定四個路由：

/：顯示所有文章

/post/new：顯示新增文章的表單

/post/:id：顯示特定文章內容（用 :id 取代變數）

/post：接收表單送出的 POST 請求，新增文章

//





const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

建立 app 實體。

.use() 是 Oak 的中介函式機制，用來載入路由和處理方法。




async function list(ctx) {
  ctx.response.body = await render.list(posts);
}

ctx 是 context，代表請求與回應的上下文。

回傳文章清單的 HTML。




async function add(ctx) {
  ctx.response.body = await render.newPost();
}

顯示新增文章的表單。
async 是 JavaScript（還有 Deno）裡一個非常重要的關鍵字，它跟「非同步程式設計」有關，也就是讓程式可以不會卡住地去等待一個操作（像是讀資料、寫檔案、等待網路結果）完成。
async 的作用是：

告訴 JavaScript：「這是一個非同步函式，可以使用 await 關鍵字來等待一個非同步操作完成。」

await fetch(...) 表示「等 fetch 資料抓完再繼續往下做」。

整個函式用 async 包住，是為了讓你可以用 await。

render.list(posts) 是一個回傳 Promise 的非同步函式（可能是讀檔案、產生 HTML 等）。

用 await 等待 HTML 組好，再把它放進 ctx.response.body 回傳給使用者。

因為用了 await，函式必須加上 async。

非同步的好處？
假設你要從硬碟讀一個檔案，或者從網路抓資料，這些操作都會「花時間」。

用同步方式：整個程式要等你資料抓回來，才繼續執行（會卡住）。

用非同步方式 + async/await：你可以「等資料回來的同時，程式繼續做別的事」，更有效率、不會卡住伺服器。

關鍵字	用途	需要搭配什麼？
async	宣告一個非同步函式	裡面可使用 await
await	等待 Promise 結果	只能在 async 函式中使用
Promise	一種「未來會完成」的非同步值	比如：fetch()、Deno.readTextFile()



async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.response.body = await render.show(post);
}

顯示單篇文章內容。






async function create(ctx) {
  const body = ctx.request.body
  if (body.type() === "form") {
    const pairs = await body.form() // body.value
    const post = {}
    for (const [key, value] of pairs) {
      post[key] = value
    }
    console.log('post=', post)
    const id = posts.push(post) - 1;
    post.created_at = new Date();
    post.id = id;
    ctx.response.redirect('/');
  }
}

這是處理表單送出，將文章加入 posts 陣列中，然後重新導向回 /。





console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });

伺服器啟動，監聽在 8000 埠口。