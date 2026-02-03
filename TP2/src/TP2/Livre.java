package TP2;
import java.util.Scanner;
public class Livre {

    private String titre;
    private String auteur;
    private double prix;


    public Livre(String titre, String auteur, double prix) {
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public double getPrix() {
        return prix;
    }

  
    public void setPrix(double prix) {
        if (prix >= 0)
            this.prix = prix;
        else
            System.out.println("Le prix doit être positif !");
    }
  
    public void afficher() {
        System.out.println("\n--- Informations du livre ---");
        System.out.println("Titre  : " + titre);
        System.out.println("Auteur : " + auteur);
        System.out.println("Prix   : " + prix + " DH");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Entrez le titre du livre : ");
        String titre = sc.nextLine();

        System.out.print("Entrez le nom complet de l'auteur : ");
        String auteur = sc.nextLine();

        System.out.print("Entrez le prix du livre : ");
        double prix = sc.nextDouble();

        Livre livre1 = new Livre(titre, auteur, prix);

        livre1.afficher();

        sc.close();
    }
}

