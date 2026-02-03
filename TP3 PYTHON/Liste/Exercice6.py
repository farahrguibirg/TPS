liste=[]
for i in range(5):
    nombre=int(input("Entrez un nombre entier: "))
    liste.append(nombre)
    
sum=sum(liste)
print("La somme des nombres dans la liste est:", sum)
moyenne=sum/len(liste)
print("La moyenne des nombres dans la liste est:", moyenne)
plus_grand=max(liste)
print("Le plus grand nombre dans la liste est:", plus_grand)
plus_petit=min(liste)
print("Le plus petit nombre dans la liste est:", plus_petit)

    