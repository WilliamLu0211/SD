# Lusers - William Lu, Bo Hui Lu
# SoftDev2 pd7
# K07 -- Import/Export Bank
# 2019-03-05 T

# The dataset is called "emojis" and has all the emojis on github. It is a dictionary in format { <name_of_emoji>:<url_to_emoji>, ... }
# source: https://api.github.com/emojis
# Import Mechanism:
#     reads the json file in cwd
#     loads into a json object
#     insert the object

import pymongo, json

SERVER_ADDR = "104.248.109.96"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.lusers
collection = db.emojis

with open('emojis.json') as f:
    data = json.load(f)

# print(data)
collection.insert(data)

def search_emoji(keyword):
    all = collection.find()
    l = []
    for key in all[0]:
        if key.find(keyword) != -1:
            l.append(all[0][key])
        # print(key.find(keyword))
    # print(all)
    return l

print(search_emoji("air"))
