def serialize_user_record(user) -> dict:
    return {
        "id": str(user["_id"]),
        "user_id": int(user["user_id"]),
        "times_played": int(user["times_played"]),
    }