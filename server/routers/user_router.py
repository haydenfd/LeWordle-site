from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.db import user_collection
from schemas.schemas import serialize_user_record

user_router = APIRouter(prefix='/api/users')

'''
    Necessary routes - 
    (1) Retrieve user, statistics based on ID
    (2) Added new user
    (3) Update user statistics based on ID - TODO
'''

# defining utils funcs used in the routes


def get_highest_uid():
    highest_user = user_collection.find_one(sort=[("user_id", -1)])
    return highest_user["user_id"] if highest_user else 0


@user_router.get("/{user_id}")
async def test(user_id: int):

    user = user_collection.find_one({"user_id": user_id})
    response_data = serialize_user_record(user) if user else { "User": "DNE"}

    return JSONResponse(
        jsonable_encoder(dict(response_data)), 
        status_code=status.HTTP_200_OK
    )


@user_router.post("/init-user")
async def init_user():

    # assign new user_id to user = highest existing UID + 1
    new_user_id = 1 + get_highest_uid()

    new_user = {
        "user_id": new_user_id,
        "times_played": 0,
        "times_solved": 0,
        "avg_guesses_per_solve": 0.00,
        "current_streak": 0, 
        "max_streak": 0, 
        "correct_player_ids": [],
    }

    res = user_collection.insert_one(dict(new_user))

    return JSONResponse(
        dict(new_user),
        status_code=status.HTTP_201_CREATED
        )

# My dad is from St. Columba's HS, Delhi. He made me add this comment. 


