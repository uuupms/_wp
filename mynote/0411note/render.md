 layout(title, content)
建立整體 HTML 結構，帶入標題和主內容。
layout產生整個 HTML 網頁的外框樣板
- export：
代表這個函式可以在其他 JS 模組中引入使用（例如你主程式 import * as render from './render.js' 就會引入這個函式）。

- function layout(title, content)：
定義一個函式名稱為 layout，有兩個參數：

title：用來放在 <title> 標籤內（顯示在瀏覽器標題列）。

content：放在 <body> 主要內容的位置。

它回傳一段 HTML 字串（用反引號 ``` 包起來的 template string）：

裡面有 ${title} 和 ${content}：
這是 JS 的「字串插值」語法，把參數插進 HTML 裡：

${title} → 放進 <title> 和 <h1> 的位置。

${content} → 放進 <section> 裡，作為網頁的主要內容。

export function layout(title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>
      body {
        padding: 80px;元素內容與邊框之間的距離為 80 像素
        font: 16px Helvetica, Arial;字體大小為 16px，使用 Helvetica 或 Arial 字型
      }

      內距（padding）與字型樣式（font）
      padding 是 元素內容與邊框（border）之間的空白。
      padding: 80px;
      上、右、下、左 四個方向的內距都設定為 80px。
      font: 16px Helvetica, Arial;
      這是設定字型大小與字體，是 CSS 的簡寫（shorthand）語法。
      等同於：
      font-size: 16px;
      font-family: Helvetica, Arial;
      16px：字體大小為 16 像素。

        Helvetica：首選字體。

        Arial：若裝置沒有 Helvetica，則使用 Arial。

        若都沒有，瀏覽器會用預設的無襯線字體（sans-serif）。







  
      h1 {
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }
    </style>
  </head>
  <body>
    <section id="content">
      ${content}
    </section>
  </body>
  </html>
  `
}



 list(posts)
輸出所有文章清單，包含標題與連結。
export function list(posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${ post.title }</h2>
      <p><a href="/post/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a href="/post/new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return layout('Posts', content)
}


 newPost()
輸出新增文章表單頁面。
這樣 newPost() 就會回傳一整頁 HTML，包括：

標題是 New Post

內容是一個表單

export function newPost() {
  return layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form action="/post" method="post">

  /*
HTML 中的 <form> 標籤是「表單」的開始，它包住使用者要填寫的欄位（像是輸入框、按鈕等）。

使用者在表單中輸入資料後，按下「送出（submit）」按鈕，資料會依照設定送出給伺服器。


action="/post" 是什麼意思？
action 是這個表單資料 送出到哪裡 的網址（URL）。

在這裡，它是 /post，代表會送到網站的 /post 路徑（也就是這段程式配合的路由）：router.post('/post', create);
也就是說：使用者填完表單送出後，資料會傳給 create() 這個函式來處理！


method 決定表單用什麼 HTTP 方法送出資料。
常見有兩種：
GET：把資料加在網址上（例如：/search?keyword=xxx）
POST：把資料藏在請求的 body 裡，安全性高，不會顯示在網址列中（也適合寫入資料）。
使用者輸入標題（name="title"）與內文（name="body"）。
按下 Create 送出按鈕時，這些欄位的值會送到 /post，用 POST 方法送出。

伺服器端程式（create(ctx)）就會收到這些資料並處理它。
屬性	功能
action="/post"	資料要送到哪個伺服器路徑（URL）
method="post"	送資料的方式是 POST（通常用來新增資料）
<form> 包裹	所有要一起送出的欄位（input、textarea、button 等）*/


    <p><input type="text" placeholder="Title" name="title"></p>
    
    /*placeholder 是一種提示文字，當輸入框是空的時候，會顯示在輸入框內。它的作用是：提示使用者這個欄位要輸入什麼內容。
    當畫面顯示時，輸入框會出現這樣的提示文字（灰色的）：一旦使用者開始輸入，這個文字就會消失。使用者看到第一個輸入框時，會被提示要輸入「Title」*/

<p><textarea placeholder="Contents" 

/*看到文字區塊時，會被提示要輸入「Contents」*/
屬性	作用
placeholder="文字"	顯示在輸入欄中作為提示，幫助使用者知道要輸入什麼內容
特性	只在欄位是空的時候顯示，輸入後就會消失



name="body"></textarea></p>
    <p><input type="submit" value="Create"></p>
    /*這是表單中最常見的一個按鈕元素，用來送出整個表單的資料。
    屬性	說明
<input>	HTML 表單輸入元素
type="submit"	指這是「送出按鈕」
value="Create"	按鈕上顯示的文字是「Create」
按下 Create 按鈕後，表單就會把 title 和 body 的值送到伺服器 /post 路徑去。
*/
  </form>
  `)

/*textarea 是 HTML 中非常重要的表單元件之一，用來讓使用者輸入多行文字，例如留言、文章、描述等等。
基本語法：<textarea placeholder="請輸入內容" name="body"></textarea>
部分	說明
<textarea>	開始標籤，表示「多行輸入框」的開始
placeholder="請輸入內容"	顯示提示文字（只在輸入框是空的時候顯示）
name="body"	欄位的名稱，會成為送出表單資料時的「key」
</textarea>	結束標籤，不能像 <input> 那樣自我結束
跟 <input type="text"> 不同的是：

<input> 適合單行輸入（像是名字、標題）

<textarea> 適合多行輸入（像是留言、內容、描述）

元素	功能
<textarea>	多行文字輸入欄位
placeholder	提示文字（只有沒輸入時才顯示）
name	送出表單時欄位的名稱（Key）
</textarea>	結束標籤，內容可以寫在兩個標籤中間
*/



}


show(post)
輸出單篇文章的內容。
export function show(post) {
  return layout(post.title, `
    <h1>${post.title}</h1>
    <pre>${post.body}</pre>
  `)
}




語法	意義
export function layout(...)	
定義一個可以被外部使用的函式

title	
頁面的標題

content	
頁面的主要 HTML 內容

return \...``	
回傳整個 HTML 字串，當作頁面內容