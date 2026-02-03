def division(a, b):
   try:
       return a / b
   except ZeroDivisionError:
       return "Error: Division by zero is not allowed."
def main():
    num1 = int(input("Enter first number: ")) 
    num2 = int(input("Enter second number: "))
    result = division(num1, num2)
    print("Division Result:", result)
if __name__ == "__main__":
    main()