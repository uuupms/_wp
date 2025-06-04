from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from typing import List
import datetime

app = FastAPI()

# 加這段：讓 "/" 自動跳轉到 /login.html
@app.get("/")
def root():
    return RedirectResponse(url="/login.html")


# 儲存所有連線中的 websocket 與使用者名稱
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.usernames = {}

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        self.usernames.pop(websocket, None)

    async def receive_login(self, websocket: WebSocket, username: str):
        self.usernames[websocket] = username
        await websocket.send_text(f"[系統] 歡迎加入聊天室，{username}！")

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

    def get_username(self, websocket: WebSocket):
        return self.usernames.get(websocket, "匿名")

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            if data["type"] == "login":
                await manager.receive_login(websocket, data["name"])
            elif data["type"] == "message":
                name = manager.get_username(websocket)
                time = datetime.datetime.now().strftime("%H:%M:%S")
                full_message = f"[{time}] {name}: {data['text']}"
                await manager.broadcast(full_message)
    except WebSocketDisconnect:
        manager.disconnect(websocket)

# 設定靜態檔案（前端 HTML/CSS）
app.mount("/", StaticFiles(directory="static", html=True), name="static")

print("FastAPI 聊天伺服器已啟動！請打開 http://localhost:8000/login.html 測試")
