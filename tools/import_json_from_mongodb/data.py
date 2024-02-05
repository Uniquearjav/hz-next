import pymongo
import json
from bson import json_util

# Connect to the MongoDB database
client = pymongo.MongoClient("mongodb+srv://uniquearjav:arjav%4012345@horizaura.lxt8cvd.mongodb.net/")
db = client["horizaura"]
collection = db["store_product"]

# Find all documents in the collection
cursor = collection.find({})

# Convert the documents to JSON
json_data = []
for document in cursor:
    json_data.append(json_util.dumps(document))

# Write the JSON data to a file
with open("data.json", "w") as f:
    f.write(json.dumps(json_data, indent=2))