package TP2;

public class Article {
	private String reference;
	private String designation;
	private double prixHT;
	private static double tauxTVA; 

	// 1️⃣ Constructeur par défaut
	public Article() {
	    this.reference = "";
	    this.designation = "";
	    this.prixHT = 0.0;
	}

	// 2️⃣ Constructeur avec tous les attributs
	public Article(String reference, String designation, double prixHT, double tauxTVA) {
	    this.reference = reference;
	    this.designation = designation;
	    this.prixHT = prixHT;
	    Article.tauxTVA = tauxTVA;
	}

	// 3️⃣ Constructeur avec seulement référence et désignation
	public Article(String reference, String designation) {
	    this.reference = reference;
	    this.designation = designation;
	    this.prixHT = 0.0;
	}

	// 4️⃣ Constructeur de recopie
	public Article(Article autre) {
	    this.reference = autre.reference;
	    this.designation = autre.designation;
	    this.prixHT = autre.prixHT;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
