# FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import players, users

app = FastAPI()

origins = ['http://localhost:3000', 'http://127.0.0.1:3000',
           'https://localhost:3000', 'https://127.0.0.1:3000'] 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(players.players)
app.include_router(users.users)




