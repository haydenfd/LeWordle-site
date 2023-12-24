from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder


user_router = APIRouter(prefix='/api/users')

@user_router.get("/")
async def test(req: Request):
    response_data = {"test": 123}
    return JSONResponse(
        jsonable_encoder(response_data), 
        status_code=status.HTTP_200_OK
    )



