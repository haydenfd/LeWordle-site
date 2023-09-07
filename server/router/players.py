from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from db.connection import player_collection
from utils.guess_helpers import map_team_to_conf_div

class ActivePlayerDataModel(BaseModel):
    id: int = Field(..., alias='_id')
    first_name: str
    last_name: str
    full_name: str

class Player(BaseModel):
    id: int = Field(..., alias='_id')
    first_name:str
    last_name:str
    full_name:str
    image_url:str
    years_experience:int
    college: str
    draft_number:int
    draft_round:int
    draft_year:int
    is_00: bool
    jersey_number:int
    from_year:int
    current_team:str
    position:str
    height_feet:int
    height_inches:int
    weight:int
    all_teams:list
    average_3ptpct:float
    average_assists:float
    average_minutes:float
    average_fgpct: float
    games_played:int
    games_started:int
    team_count:int
    age:int
    average_points:float
    average_rebounds:float

players = APIRouter(prefix="/api/players")

@players.get("/all")
async def get_all_player_data():
    data = []
    cursor = player_collection.find({})
    for document in cursor:
        data.append(ActivePlayerDataModel(**document))
    
    response = JSONResponse(content=jsonable_encoder(data), status_code=status.HTTP_200_OK)
    return response

@players.get("/guess_player/{id}")
async def guess_player(id):
    id = int(id)
    player_data = player_collection.find_one({"_id": id})
    if player_data:
        eval_team = map_team_to_conf_div(player_data['current_team'])
        player_data['conference'] = eval_team['conference']
        player_data['division'] = eval_team['division']
        return jsonable_encoder(player_data)
    else:
        return None
    
    # return JSONResponse(content=jsonable_encoder(dict({
    #     "Message": 'Hello'
    # })), status_code=status.HTTP_200_OK)