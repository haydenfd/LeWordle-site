from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.connection import user_collection

users = APIRouter(prefix="/api/users")

"""
    id
    user_id: int
    games_played: int
    games_won: int
    current_streak: int
    longest_streak: int
    guess_distribution: [0,0,0,0,0,0,0,0]

"""

@users.get("/")
async def get_users():
    return { "Hi": "Hayden"}

