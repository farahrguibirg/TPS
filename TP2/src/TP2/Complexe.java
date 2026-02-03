package TP2;
import java.util.Scanner;
public class Complexe {
	private double reel,imaginaire;
	
public Complexe() {
    this.reel = 0;
    this.imaginaire = 0;
}
public Complexe(double reel,double imaginaire){
	this.reel=reel;
	this.imaginaire=imaginaire;
}
public double getReel() {return reel;}
public void setReel(double reel) {this.reel=reel;}
public double getImag() {return imaginaire;}
public void setImag(double imaginaire) {this.imaginaire=imaginaire;}

public Complexe Plus(Complexe A) {
    double re = this.reel + A.reel;
    double im = this.imaginaire + A.imaginaire;
    return new Complexe(re, im);
}

public Complexe Moins(Complexe A) {
    double re = this.reel - A.reel;
    double im = this.imaginaire - A.imaginaire;
    return new Complexe(re, im);
}
public void Afficher() {
    if (reel >= 0)
        System.out.println(reel + " + " + imaginaire + "i");
    else
        System.out.println(reel + " - " + (-imaginaire) + "i");
}

// 🔹 Programme principal (main)
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // --- Premier nombre complexe
    System.out.println("Entrez la partie réelle du premier nombre : ");
    double re1 = sc.nextDouble();
    System.out.println("Entrez la partie imaginaire du premier nombre : ");
    double im1 = sc.nextDouble();
    Complexe z1 = new Complexe(re1, im1);

    // --- Deuxième nombre complexe
    System.out.println("Entrez la partie réelle du deuxième nombre : ");
    double re2 = sc.nextDouble();
    System.out.println("Entrez la partie imaginaire du deuxième nombre : ");
    double im2 = sc.nextDouble();
    Complexe z2 = new Complexe(re2, im2);

    // --- Affichage des deux nombres
    System.out.print("Premier nombre complexe : ");
    z1.Afficher();
    System.out.print("Deuxième nombre complexe : ");
    z2.Afficher();

    // --- Somme
    Complexe somme = z1.Plus(z2);
    System.out.print("Somme : ");
    somme.Afficher();

    // --- Différence
    Complexe diff = z1.Moins(z2);
    System.out.print("Différence : ");
    diff.Afficher();

    sc.close();
}
}

