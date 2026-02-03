def fusionner_listes(liste1, liste2):
    liste_fusionnee = liste1.copy()
    for element in liste2:
        if element not in liste_fusionnee:
            liste_fusionnee.append(element)
    return liste_fusionnee

if __name__ == '__main__':
    liste1 = [9, 3, 2, 1]
    liste2 = [6, 7, 8, 5]
    resultat = fusionner_listes(liste1, liste2)
    print('Liste 1 :', liste1)
    print('Liste 2 :', liste2)
    print('Fusion sans doublons :', resultat)
    resultat1=liste1+liste2
    print('Liste fusionnée deuxieme methode :', resultat1)
    sort=sorted(resultat)
    print('Liste triée :', sort)
  
      