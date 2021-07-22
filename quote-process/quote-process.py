import json

file_name = "bezos.txt"
res = []
content = ""
with open(file_name, "r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if len(line) > 0:
            if line[0].isdigit():
                if len(content) > 0:
                    res.append(content)
                    content = ""
            else:
                content += (line + "\n")
if len(content) > 0:
    res.append(content)

with open('bezos.json', 'w', encoding="utf-8") as outfile:
    json.dump(res, outfile, ensure_ascii=False)