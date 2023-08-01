from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.connection import user_collection, session_collection
from pydantic import BaseModel  
from datetime import datetime
from schemas.users_schemas import UserStatus

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


@users.post("/init")
async def initialize(req:Request):


    user_id = req.cookies.get("user_id")
    session_id = req.cookies.get("session_id")

    print(user_id)
    print(session_id)
    
    response_status=None

    if not session_id and not user_id:
        response_status = UserStatus.NEW_USER

        pipeline = [{
                "$group": {
                "_id": None,
                "max_user_id": 
                {
                    "$max" : "$user_id"
                }
            }
        }]

        new_id = list(user_collection.aggregate(pipeline))[0]['max_user_id'] + 1

        new_user = dict({
            "user_id": new_id,
            "games_played": 0,
            "games_won": 0, 
            "current_streak": 0, 
            "longest_streak": 0, 
            "guess_distribution": [0,0,0,0,0,0,0],
            "avg_guesses": 0.00,
            "used_hint_count": 0,
        })

        result = user_collection.insert_one(dict(new_user))

        current_date_time = datetime.now()
        new_session_id = str(current_date_time.date()) + str(new_id)

        new_session = dict({
            "session_id": new_session_id,
            "user_id": new_id
        })

        result_second = session_collection.insert_one(dict(new_session))

        return JSONResponse(jsonable_encoder({
            "response_status": response_status,
            "user_data": new_user,
            "session_data": new_session,
        }))
    


    #    new_session_id = 



    elif user_id and not session_id:
        response_status = UserStatus.NEW_SESSION_OLD_USER
    elif user_id and session_id:
        response_status = UserStatus.OLD_SESSION_OLD_USER
  
    return JSONResponse(jsonable_encoder(
        {
            "response_status": response_status
        }
    ), status_code=status.HTTP_200_OK)

    # response = JSONResponse(content=jsonable_encoder({"response_status": response_status, "datestamp": datestamp}), status_code=status.HTTP_200_OK)



