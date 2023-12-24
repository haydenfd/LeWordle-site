# from db.connection import user_collection
# from pydantic import BaseModel


# def user_serializer(user) -> dict:
#     return {
#         "id": str(user["_id"]),
#         "user_id": user["user_id"],
#         "games_played": user["games_played"],
#         "games_won": user["games_won"],
#         "current_streak": user["current_streak"],
#         "avg_guesses": user["avg_guesses"],
#         "used_hint_count": user["used_hint_count"],
#         "longest_streak": user["longest_streak"],
#         "date_created": user["date_created"],
#         "guess_distribution": user["guess_distribution"]
#     }

# async def generate_new_user_id() -> int:
#     pipeline = [{
#                 "$group": {
#                 "_id": None,
#                 "max_user_id": 
#                 {
#                     "$max" : "$user_id"
#                 }
#             }
#         }]

#     return list(user_collection.aggregate(pipeline))[0]['max_user_id'] + 1

# async def create_new_user(date: str):

#     new_id = await generate_new_user_id()

#     new_user_dict = dict({
#         "user_id": new_id,
#         "games_played": 0, 
#         "games_won": 0,
#         "current_streak": 0,
#         "avg_guesses": 0,
#         "used_hint_count": 0,
#         "longest_streak": 0,
#         "date_created": date,
#         "guess_distribution": [0,0,0,0,0,0,0]
#     })

#     new_user = await user_collection.insert_one(dict(new_user_dict))
#     ret = await user_collection.find_one({"_id": new_user.inserted_id})

#     return user_serializer(ret)
    
    
    