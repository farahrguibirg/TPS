def tuple_pair():
    elements = []
    for i in range(7):
        element = int(input("Entrez un élément pour la tuple: "))
        elements.append(element)
    tpl = tuple(elements)
    print("La tuple des éléments est :", tpl)

    print("Les éléments d'indice pair sont :")
    for i in range(len(tpl)):
        if i % 2 == 0:
            print(tpl[i])
if __name__ == '__main__':
    tuple_pair()