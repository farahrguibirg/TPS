def adress():
    adresse=input("entrer ton adresse :")
    mots=""
    for c in  adresse:
        if c == '@':
            index=adresse.index('@')
            mots = adresse[index+1:]   
            break                     
    print(mots)
adress()
                         

