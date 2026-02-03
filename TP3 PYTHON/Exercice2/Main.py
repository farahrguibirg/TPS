from addition import addition, soustraction, multiplication, division
def main():
    num1 = int(input("Enter first number: ")) 
    num2 = int(input("Enter second number: "))
    print("Addition:", addition(num1, num2))
    print("Subtraction:", soustraction(num1, num2))
    print("Multiplication:", multiplication(num1, num2))
    print("Division:", division(num1, num2))
if __name__ == "__main__":
    main()