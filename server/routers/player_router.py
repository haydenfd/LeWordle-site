from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.db import player_collection
from schemas.schemas import serialize_all_players_player_record

player_router = APIRouter(prefix='/api/players')


'''
    Necessary routes - 
    (1) Retrieve all players based on first name, last name, player IDs for search bar
'''

@player_router.get("/all-players")
async def get_all_players():
    response_data = []
    cursor = player_collection.find()
    for doc in cursor:
        response_data.append(serialize_all_players_player_record(doc))

    return JSONResponse(
        jsonable_encoder(response_data),
        status.HTTP_200_OK
    )
