def chaine():
    ch=input("entrer ta chaine de caractere :")
    mots = ch.split()         
    premier = mots[0].capitalize()  
    print("Premier mot capitalisé :", premier)
chaine()       