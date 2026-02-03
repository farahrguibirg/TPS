import cube , volumeSphere
def main():
    rayon = float(input("Entrez le rayon de la sphère : "))
    volume = volumeSphere(rayon)
    print(f"Le volume de la sphère de rayon {rayon:.2f} est : {volume:.4f}")
if __name__ == "__main__":
    main()