mon_dict={
    "nom":"creme","prix":100,
    "nom":"ecran solaire","prix":150,
    "nom":"parfum","prix":300,
    "nom":"gel douche","prix":80,
    "nom":"gel nettoyant","prix":120
}
print("le prix le plus eleve est:",max(mon_dict.values()))
print("le prix l plus bas est :",min(mon_dict.values()))
somme=sum(mon_dict.values())
moyenne=somme/len(mon_dict)
print("la somme des prix est:",somme)
print("la moyenne des prix est:",moyenne)