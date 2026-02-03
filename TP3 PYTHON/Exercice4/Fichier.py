def lire_fichier(nom):
    try:
        with open(nom, 'r') as fichier:
            contenu = fichier.read()
            return contenu
    except FileNotFoundError:
        print("erreur:fichier non trouvé")

def main():
    nom = input("Entrez le nom du fichier à lire : ")
    contenu = lire_fichier(nom)
    if contenu:
        print("Contenu du fichier :")
        print(contenu)
if __name__ == "__main__":
 main()