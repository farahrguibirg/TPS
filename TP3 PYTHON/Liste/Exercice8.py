liste=[]
for i in range (7):
 a=int(input("Entrez le nombre d'éléments de la liste: "))
 a.append(liste)
print("La liste des éléments est :", liste)

for i in range(7):
    if i %2==0:
        print("Les éléments d'indice pair sont :", liste[i])
    else:
        print("Les éléments d'indice impair sont :", liste[i])