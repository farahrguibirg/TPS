package TP2;
import java.util.Scanner;
public class Rectangle {
	private double Largeur,Longueur;
	
	public Rectangle() {
		this.Largeur=0;
		this.Longueur=0;	
	}
	
	public Rectangle(double largeur,double longeur) {
		this.Largeur=largeur;
		this.Longueur=longeur;	
	}

	public double getlarg() {
		return Largeur;
	}
	
	public double getlong() {
		return Longueur;
	}
	
	public void setlarg(double largeur) {
		this.Largeur=largeur;
	}
	
	public void setlong(double longeur) {
		this.Longueur=longeur;
	}
	public double perimetre() {
		return 2*(Longueur+Largeur);
	}
	public double aire() {
		return Longueur*Largeur;
	}
	public boolean EstCarre() {
        return Longueur == Largeur;
    }
	public void AfficherRectangle() {
		System.out.println("la longeur du rectange est "+ Longueur);
		System.out.println("la Largeur du rectange est "+ Largeur);
		System.out.println("la perimetre du rectange est "+ perimetre());
		System.out.println("l'aire du rectange est "+ aire());
		if (EstCarre()) {
		    System.out.println("Il s’agit d’un carré");
		} else {
		    System.out.println("Il ne s’agit pas d’un carré");
		}
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("entrer la valeur de largeur");
		double largeur=sc.nextDouble();
		System.out.println("entrer la valeur de longueur");
		double longueur=sc.nextDouble();
		Rectangle R=new Rectangle(largeur,longueur);
		R.AfficherRectangle();

	}

}
