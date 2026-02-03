mon_dict={
    "jvm": "Java Virtual Machine",
    "cpu": "Central Processing Unit",
    "ram" :"Random Access Memory",
    "ssd": "Solid State Drive",
    "hdd": "Hard Disk Drive"
}
chaine=input("entrer une chaine de caractere:")
if chaine in mon_dict:
    print(f"L'acronyme {chaine} signifie : {mon_dict[chaine]}")
else:
    print("acronyme non trouve")