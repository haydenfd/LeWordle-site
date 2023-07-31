from fastapi import APIRouter
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from db.connection import player_collection

class ActivePlayerDataModel(BaseModel):
    id: int = Field(..., alias='_id')
    first_name: str
    last_name: str
    full_name: str

players = APIRouter(prefix="/api/players")

@players.get("/all")
async def get_all_player_data():
    data = []
    cursor = player_collection.find({})
    for document in cursor:
        data.append(ActivePlayerDataModel(**document))
    
    response = JSONResponse(content=jsonable_encoder(data))
    return response
