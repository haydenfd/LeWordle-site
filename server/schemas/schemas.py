def serialize_user_record(user) -> dict:
    return {
        "id": str(user["_id"]),
        "user_id": int(user["user_id"]),
        "times_played": int(user["times_played"]),
    }

def serialize_all_players_player_record(player) -> dict:
    return {
        "id": int(player["_id"]),
        "first_name": str(player["first_name"]),
        "last_name": str(player["last_name"]),
        "full_name": str(player["full_name"]),
    }