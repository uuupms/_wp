import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
  return `<html>
<head>
<style>

        /* 單一顏色的漸層動畫（Lavender #E6E6FA） */
        @keyframes gradientBackground {
            0% {
                background: linear-gradient(45deg, #E6E6FA, #D8BFD8); /* 薰衣草到淡紫 */
            }
            50% {
                background: linear-gradient(45deg, #D8BFD8, #E6E6FA); /* 反轉 */
            }
            100% {
                background: linear-gradient(45deg, #E6E6FA, #D8BFD8);
            }
        }

        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #E6E6FA, #D8BFD8);
            animation: gradientBackground 10s ease infinite; /* 柔和背景變換 */
            color: #333;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        h1 {
            color: #4B0082; /* 深紫色標題 */
            text-align: center;
            margin-bottom: 20px;
            font-size: 2.5em;
        }

        .button-container {
            display: flex;
            gap: 15px;
        }

        .btn {
            background-color: #fff;
            border: 2px solid #4B0082; /* 深紫色邊框 */
            color: #4B0082;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 25px;
            cursor: pointer;
            transition: 0.3s;
        }

        .btn:hover {
            background-color: #4B0082; /* 懸停時變成深紫色 */
            color: #fff;
        }
    
</style>
</head>
<body>
${body}

</body>
</html>
`
}

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = page(`
<h1>自我介紹</h1>

<div class="button-container">
        <button class="btn" onclick="location.href='/name'">姓名</button>
        <button class="btn" onclick="location.href='/colledge'">大學</button>
        <button class="btn" onclick="location.href='/major'">科系</button>
    </div>
`)
} else if (pathname == '/name') {
  ctx.response.body = page('pms')
}  else if (pathname == '/colledge') {
  ctx.response.body = page('金大')
} else if (pathname == '/major') {
ctx.response.body = page('資工')
} else {
    
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
