from db.db import player_collection, session_collection
from schemas.schemas import serialize_all_players_player_record
import random
from fastapi import status, HTTPException


async def get_random_player_id():
    player_list_length = player_collection.count_documents({})
    random_idx = random.randint(0, player_list_length - 1)
    random_correct_player = player_collection.find_one(skip=random_idx)
    return serialize_all_players_player_record(random_correct_player)["id"]

async def generate_new_session_id(user_id:int):
    try:
        highest_session = session_collection.find({"user_id": user_id}).sort("session_id", -1).limit(1)
        new_session_id = highest_session[0]["session_id"] + 1
        return new_session_id
    
    except Exception as err:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, str(err))
    
async def create_new_session(user_id:int, is_new_user:bool):

    new_session = {
        "status": 0,
        "user_id": user_id,
        "session_id": await generate_new_session_id(user_id) if not is_new_user else 0,
        "correct_player_id": await get_random_player_id(),
    }

    res = session_collection.insert_one(dict(new_session))
    return new_session