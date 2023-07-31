from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.connection import user_collection
from enum import Enum
from pydantic import BaseModel


users = APIRouter(prefix="/api/users")


class UserStatus(Enum):
    NEW_USER="NEW_USER"
    NEW_SESSION_OLD_USER="NEW_SESSION_OLD_USER"
    OLD_SESSION_OLD_USER="OLD_SESSION_OLD_USER"

"""
    id
    user_id: int
    games_played: int
    games_won: int
    current_streak: int
    longest_streak: int
    guess_distribution: [0,0,0,0,0,0,0,0]
    created_at: string in ISO8601 format -- done

"""


class DataPayload(BaseModel):
    timestamp: str

@users.post("/init")
async def initialize(req:Request, payload: DataPayload):
    # datestamp = payload.datestamp
    # user_id = req.cookies.get("user_id")
    # session_id = req.cookies.get("session_id")

    # response_status=None


    # if not session_id and not user_id:
    #     response_status = UserStatus.NEW_USER
    # elif user_id and not session_id:
    #     response_status = UserStatus.NEW_SESSION_OLD_USER
    # elif user_id and session_id:
    #     response_status = UserStatus.OLD_SESSION_OLD_USER
  
    # response = JSONResponse(content=jsonable_encoder({"response_status": response_status, "datestamp": datestamp}), status_code=status.HTTP_200_OK)
    return {"Hi": 1}



