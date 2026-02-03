mon_dict={}
a=input("entrer une phrase:")
mon_dict=a.split()
print(mon_dict)
ocurence={}

for m in mon_dict:
 if m in ocurence:
    ocurence[m] += 1
 else:
    ocurence[m] = 1
print("le nombre des ocuurence de chque mot est:",ocurence)
