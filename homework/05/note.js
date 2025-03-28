import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = `<html>
<body>
<h1>筆記</h1>
<ol>
<li><a href="/a1">import { Application } from "https://deno.land/x/oak/mod.ts";</a></li>
<li><a href="/a2">const app = new Application();</a></li>
<li><a href="/a3">function page(body) </a></li>
</ol>
</body>
</html>
`
  } else if (pathname == '/a1') {
    ctx.response.body = '1️引入 Oak 框架'

  }  else if (pathname == '/a2') {
    ctx.response.body = '2建立 Web 應用'
  } else if (pathname == '/a3') {
    ctx.response.body = '定義 HTML 結構函式'
  }else {
    
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
