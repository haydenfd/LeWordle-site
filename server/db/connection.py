from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from config.config import (
    db_cluster,
    db_user,
    db_pass
)

load_dotenv()
print(db_cluster, db_user, db_pass)
uri = "mongodb+srv://" + db_user + ":" + db_pass + "@" + db_cluster + "?retryWrites=true&w=majority"
client = MongoClient(uri)

database = client["LeWordle"]

player_collection = database["player_data"]

user_collection = database["user_data"]

session_collection = database["session_data"]

try:
    client.admin.command('ping')
    print('Connected to MongoDB')
except Exception as e:
    print(e)