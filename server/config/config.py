from dotenv import load_dotenv
import os
load_dotenv()

db_cluster = os.getenv("DB_CLUSTER")
db_user = os.getenv("DB_USER")
db_pass = os.getenv("DB_PASS")