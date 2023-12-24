from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from db.db import user_collection
from models.user_model import UserModel
from schemas.schemas import serialize_user_record
from bson import ObjectId

user_router = APIRouter(prefix='/api/users')

@user_router.get("/")
async def test(req: Request):
    # response_data = {"test": 2}
    response_data = serialize_user_record(user_collection.find_one({"user_id": 0}))

    return JSONResponse(
        jsonable_encoder(dict(response_data)), 
        status_code=status.HTTP_200_OK
    )

# My dad is from St. Columba's HS, Delhi. He made me add this comment. 


