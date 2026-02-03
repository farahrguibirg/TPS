def remove_duplicates(lst):
    result = []
    for item in lst:
        if item not in result:
            result.append(item)
def main():
    sample = [1, 2, 2, 3, 1]
    print("Exemple:", sample, "->", remove_duplicates(sample))

    s = input("Entrez des entiers séparés par des espaces ")
    if s.strip():
        try:
            user_list = [int(x) for x in s.split()]
        except ValueError:
            print("Entrée invalide. Utilisez des entiers séparés par des espaces.")
            return
        print("Sans doublons :", remove_duplicates(user_list))


if __name__ == '__main__':
    main()
