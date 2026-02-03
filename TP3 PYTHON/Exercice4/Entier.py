def entier(n):
    try:
        print("{n}n est un entier ")
    except ValueError:
        print("{n}n n'est pas un entier")

def main():
    n = int(input("Entrez une valeur : "))
    entier(n)
if __name__ == "__main__":
    main()