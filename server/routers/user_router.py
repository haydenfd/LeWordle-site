from fastapi import APIRouter, status, HTTPException
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.db import user_collection, session_collection
from schemas.schemas import serialize_user_record

user_router = APIRouter(prefix='/api/users')

async def find_latest_session_id(user_id:int):
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
        "session_id": find_latest_session_id() if not is_new_user else 0,
    }

    res = session_collection.insert_one(dict(new_session))
    return new_session


'''
    Necessary routes - 
    (1) Retrieve user, statistics based on ID
    (2) Added new user
    (3) Update user statistics based on ID - TODO


    What's in a session?
    - Correct player ID
    - Session ID
    - User ID playing the session
    - Current guess count
    - Status? of game (active, concluded)

'''

# defining utils funcs used in the routes


def get_highest_uid():
    highest_user = user_collection.find_one(sort=[("user_id", -1)])
    return highest_user["user_id"] if highest_user else 0


'''
    - Fetches user info for existing users

'''
@user_router.get("/{user_id}")
async def test(user_id: int):

    user = user_collection.find_one({"user_id": user_id})
    response_data = serialize_user_record(user) if user else { "User": "DNE"}

    return JSONResponse(
        jsonable_encoder(dict(response_data)), 
        status_code=status.HTTP_200_OK
    )



'''
    - Creates new user and initializes a new session
'''
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
        "guess_distribution": [0,0,0,0,0,0],
    }

    res = user_collection.insert_one(dict(new_user))

    new_session = await create_new_session(new_user_id, True)
    print(new_session)
    # create a new session for user

    return JSONResponse(
        dict({
            "user": new_user,
            "session": new_session,
        }),
        status_code=status.HTTP_201_CREATED
        )

# My dad is from St. Columba's HS, Delhi. He made me add this comment. 


