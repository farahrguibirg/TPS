def reverse_tuple(tpl):
    return tpl[::-1]

tpl = (1, 2, 3, 4, 5)
reversed_tpl = reverse_tuple(tpl)
print("Tuple d'origine :", tpl)
print("Tuple inversée :", reversed_tpl)

if __name__ == '__main__':
  reverse_tuple()