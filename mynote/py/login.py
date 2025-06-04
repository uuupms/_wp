# 匯入需要的工具
from fastapi import FastAPI, Form # Form 用來接收前端表單資料
#from從哪裡匯入
#fastapi：一個幫你做網頁伺服器的 Python 套件
#import：匯入（引進）
#FastAPI：建立網站主體用的工具
#Form：幫你接收表單輸入的工具（例如使用者填的帳號密碼）
from fastapi.responses import HTMLResponse # 用來回傳 HTML 網頁
#匯入 HTMLResponse，讓你可以「回傳 HTML 頁面」，不只是 JSON 資料。

# 建立一個 FastAPI 應用程式（相當於網站主體）
app = FastAPI()
#app：我們自己取的變數名稱（網站主體）
#=：設定
#FastAPI()：建立一個 FastAPI 應用（網頁伺服器）

# 建立一個路由（網址處理函式）：
# 當使用者打開根目錄 `/`，就顯示登入表單
@app.get("/", response_class=HTMLResponse)
#@：是「裝飾器」，意思是「接下來這個函數要處理某個網址的請求」
#get("/")：當有人用瀏覽器打開 / 這個網址（根目錄），就會執行下面這個函數
# response_class=HTMLResponse：回傳的內容是 HTML，不是純文字或 JSON

async def read_form():
#async：讓這個函數可以「非同步」執行（先不用管，這是 FastAPI 標準寫法）
#def：定義函數
#read_form：函數名字，自訂
#():：括號裡是參數，這裡沒參數
    return """
    #return：回傳資料  這裡回傳的是一段「HTML 網頁內容」
    <html>
        <body>
            <h2>請輸入帳號密碼</h2>
            <!-- 建立一個表單，使用 POST 方法送到 /submit -->
            <!-- 表單開始，method 設為 POST，會送到 /submit -->
            <form action="/submit" method="post">
            <!-- 
            使用者帳號欄位 
            form 是一個表單 讓使用者輸入帳號密碼並提交 
            method="post" 表示這些資料會用 POST 方法送出去 
            action="/submit" 表示送到 /submit 這個網址去處理 
            <form>	表單的開始，用來包住使用者輸入資料的區塊
            action="/submit"	當使用者按下「提交」時，
            資料會送到「/submit」這個網址（通常是後端伺服器的一個功能）
            method="post"	用「POST 方法」傳送資料。POST 是一種 HTTP 的傳送方式，
            會把資料放在「內部」，不像 GET 會顯示在網址列上
            </form>	表單的結束
            -->

                <!-- 使用者帳號欄位 -->
                <label for="username">帳號:</label>
                <input type="text" id="username" name="username"><br><br>
                
                <!-- 使用者密碼欄位 -->
                <label for="password">密碼:</label>
                <input type="password" id="password" name="password"><br><br>
                
                <!-- 提交按鈕 -->
                <input type="submit" value="提交">
            </form>
        </body>
    </html>
    """

# 當表單送出後（POST 到 /submit），就執行這個函式來處理資料
@app.post("/submit")
# 這是一個「裝飾器（decorator）」，意思是：
# 「當有人用 POST 方法請求 /submit 這個網址，就執行下面那個函式handle_login()」
# （對應 HTML 裡的：<form action="/submit" method="post">）

async def handle_login(username: str = Form(...), password: str = Form(...)):
    # 接收使用者輸入的帳號與密碼，回傳確認訊息
    # 這是定義一個非同步函式，名叫 handle_login。
    # 非同步（async）的意思是：這個函式可以在等待時不會卡住整個伺服器（例如讀資料庫時）。
    # username: str = Form(...) 從表單中接收一個「文字欄位」，名叫 username
    # password: str = Form(...)  同上，接收一個名叫 password 的欄位
    # Form(...) 是 FastAPI 提供的功能，代表「這是從前端表單來的欄位」
    # handle_login 是 你自己定義的一個函式的名稱
    # 接收使用者透過表單送過來的帳號和密碼，並處理它們（例如顯示或驗證）
    # handle_login: 函式的名字，你取的名字，這裡是「處理登入」的意思（也可以叫別的名字，但這名字比較清楚）


    # 從表單中接收使用者輸入的帳號與密碼
    return {"message": f"帳號: {username}, 密碼: {password}"}
    # 這行是回傳一個字典（JSON 物件），格式是：
    # "message": "帳號: ben, 密碼: 1234"
    # 用 f"..." 是 Python 的格式化寫法，可以把變數插進字串中。


"""
什麼是 Form(...)？
在 FastAPI 裡，當你想要「接收使用者從 HTML 表單送出的資料」，
你就要使用 Form(...)，這樣 FastAPI 才知道要去哪裡找這些資料。

你問的這行程式碼：

```python
async def handle_login(username: str = Form(...), password: str = Form(...)):
```

我來幫你**逐字**拆解解釋：

---

### 🔹 `async def`：非同步函式的定義

* `def`：定義一個函式（function）。
* `async`：讓這個函式變成「非同步函式」，意思是：

  > ⚡ 它可以同時處理很多請求，不會因為等待（例如：資料庫或網路）就卡住整個系統。

在 FastAPI 裡，**非同步函式是標準寫法**，不管你用不用到 await，都會先這樣寫。

---

### 🔹 `handle_login`：函式名稱（你取的）

這是你自己幫這個函式取的名字，代表它是「處理登入」的功能。

你也可以改叫別的名字，例如 `process_form`、`submit_login`，只要呼叫時一致即可。

---

### 🔹 `(username: str = Form(...), password: str = Form(...))`

這一整段是 **參數列表**，意思是：這個函式預期會收到兩個值：

| 名稱         | 型別    | 來源               | 意思           |
| ---------- | ----- | ---------------- | ------------ |
| `username` | `str` | `Form(...)` 表單欄位 | 使用者輸入的帳號（字串） |
| `password` | `str` | `Form(...)` 表單欄位 | 使用者輸入的密碼（字串） |

#### 🔸 `Form(...)` 是什麼？

它是 FastAPI 提供的工具，用來：

> ✅ 告訴 FastAPI：「這個值要從 HTML 表單裡抓出來」

你有這樣的 HTML 表單欄位時：

```html
<input name="username">
<input name="password">
```

FastAPI 就會把它們自動對應到上面的 `username` 和 `password`。

---

### ✅ 小結整理（白話版）

這行在說：

🗣️「定義一個叫 `handle_login` 的函式，它會接收從表單送來的帳號和密碼（兩個字串），然後你可以用這兩個值來處理登入。」

---
很好，讓我們來解釋 `str` 是什麼。

---

### 🔹 `str` 是 Python 的資料型別，意思是「**字串**」

📘 **字串（string）** 就是文字，例如：

```python
"Hello"
"apple"
"1234"
"帳號123"
```

在 Python 中，這些文字都是屬於 `str` 類型。

---

### 🔍 在這段程式中：

```python
async def handle_login(username: str = Form(...), password: str = Form(...)):
```

這裡的 `username: str` 表示：

🔸「`username` 這個變數應該是個 **字串**」

🔸 `password: str` 也是一樣，表示密碼也是字串。

這個語法叫做 **型別標註**（type hint），意思是：

> ✨ 告訴 Python（和人）：「這個變數應該要是這種類型」

---

### ✅ 類似例子：

```python
age: int = 25         # int：整數
name: str = "Ben"     # str：字串
pi: float = 3.14      # float：小數
is_ok: bool = True    # bool：布林值（True 或 False）
```

---

### 🧠 小提醒：

雖然你寫 `username: str`，但 Python 不會強制你只能傳字串（它不像 Java 或 C++ 那樣嚴格），這是給你自己和編輯器看的「型別說明」，有助於避免錯誤。

---






"""