def Voyelle():
 texte = input("Entrer une phrase : ")
 for voyelle in "aeiou":
    texte = texte.replace(voyelle, "*")
 print("Texte modifié :", texte)
Voyelle()