class Compte:
  def __init__(self,nom,numero,balance):
      self.nom=nom
      self.numero=numero
      self.balance=balance
  def deposer(self,montant):
       self.balance += montant
       return self.balance
  def retirer(self,montant):
       if montant > self.balance:
           return "Fonds insuffisants"
       else:
           self.balance -= montant
           return self.balance
  def afficher(self):
        return f"Compte de {self.nom}, Numéro: {self.numero}, Solde: {self.balance} EUR"
    
if __name__ == "__main__":
    compte1 = Compte("Asmaa", 12345, 20000)
    print(compte1.afficher())
    compte1.deposer(30000)
    print(compte1.afficher())
    compte1.retirer(800)
    print(compte1.afficher())   