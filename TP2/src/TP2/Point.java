package TP2;
import java.util.Scanner;
public class Point {
private int x,y;

	public Point() {
		this.x=0;
		this.y=0;
	}
	public Point(int x,int y) {
		this.x=x;
		this.y=y;
	}
	public int getx() {return x;}
	public int gety() {return y;}
	public void setx(int x) {this.x=x;}
	public void sety(int y) {this.y=y;}
	
	public double Norme() {
	        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	    }

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("entrer la valeur de x");
		int x=sc.nextInt();
		
		System.out.println("entrer la valeur de y");
		int y=sc.nextInt();
		Point p=new Point(x,y);
		System.out.println("La norme du point est : " + p.Norme());
	}

}
