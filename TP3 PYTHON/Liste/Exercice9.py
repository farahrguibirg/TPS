def reverseliste(lst):
    result = []
    for i in range(5):
        a=int(input("Entrez le nombre d'éléments de la liste: "))
        lst.append(a)
    for i in range(len(lst)-1,-1,-1):
        result.append(lst[i])
    return result
print("La liste inversée est :", reverseliste([]))
if __name__ == '__main__':
    reverseliste() 