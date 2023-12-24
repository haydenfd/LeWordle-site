from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

load_dotenv()

db_user = os.getenv("CLUSTER_USER")
db_pwd = os.getenv("CLUSTER_PASS")
db_url = os.getenv("CLUSTER_URL")

def generate_uri(user, pwd, url):
    return str(f"mongodb+srv://{user}:{pwd}@{url}?retryWrites=true&w=majority")    

uri = generate_uri(db_user, db_pwd, db_url)

db_client = MongoClient(uri, server_api = ServerApi('1'))
db = db_client["LeWordle"]

# fetch all the collections
player_collection = db['player_data']
user_collection = db['user_data']
session_collection = db['session_data']

try:
    db_client.admin.command("ping")
    print("Pinged successfully")
except Exception as err:
    print(f"Failed ping. {err}")


