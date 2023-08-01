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


def session_serialize(session:dict) -> dict:
    return dict({
        "user_id": session["user_id"],
        "session_id": session["session_id"]
    })

def user_serialize(user:dict) -> dict:
    return dict({
        "user_id": user["user_id"],
        "games_played": user["games_played"],
        "games_won": user["games_won"],
        "current_streak": user["current_streak"],
        "longest_streak": user["longest_streak"],
        "guess_distribution": user["guess_distribution"],
        "avg_guesses": user["avg_guesses"],
        "used_hint_count": user["used_hint_count"]
    })



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

    elif user_id and not session_id:
        response_status = UserStatus.NEW_SESSION_OLD_USER
        user_data = user_serialize(user_collection.find_one({"user_id": int(user_id)},{'_id': 0}))

        current_date_time = datetime.now()
        new_session_id = str(current_date_time.date()) + user_id

        new_session = dict({
            "session_id": new_session_id,
            "user_id": int(user_id)
        })


        result_second = session_collection.insert_one(dict(new_session))

        return JSONResponse(jsonable_encoder({
            "response_status": response_status,
            "user_data": user_data,
            "session_data": new_session,
        }))
    


    elif user_id and session_id:
        response_status = UserStatus.OLD_SESSION_OLD_USER
        user_data = user_serialize(user_collection.find_one({"user_id": int(user_id)}, {'_id': 0}))
        session_data = session_serialize(session_collection.find_one({"session_id": session_id}, {'_id': 0}))

        return JSONResponse(jsonable_encoder({
            "response_status": response_status,
            "user_data": user_data,
            "session_data": session_data,
        })) 

  
    return JSONResponse(jsonable_encoder(
        {
            "response_status": response_status
        }
    ), status_code=status.HTTP_200_OK)

    # response = JSONResponse(content=jsonable_encoder({"response_status": response_status, "datestamp": datestamp}), status_code=status.HTTP_200_OK)



