import random
import string

def is_prime(n):
   if n<=1:
       return False
   for i in range(2, int(n/2) + 1):
        if n % i == 0:
            return False
   return True

def factorial(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def random_password(length):
    if length < 4:
        raise ValueError("Password length should be at least 4 characters.")
    all_characters = string.ascii_letters + string.digits + string.punctuation
    password = [
        random.choice(string.ascii_lowercase),
        random.choice(string.ascii_uppercase),
        random.choice(string.digits),
        random.choice(string.punctuation)
    ]
    password += random.choices(all_characters, k=length - 4)
    random.shuffle(password)
    return ''.join(password)


