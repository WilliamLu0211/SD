to_import = open("cereals.csv", "r")

lines = to_import.readlines()[1:]
cereals = []

i = 0
for line in lines:
    line = line.split(",")
    cereals.append({})
    cereals[i]['name'] = line[0]
    cereals[i]["calories"] = line[3]
    cereals[i]["sodium"] = line[6]
    i += 1

print(cereals)
