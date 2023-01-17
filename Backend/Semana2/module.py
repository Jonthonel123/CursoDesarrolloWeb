# import prueba

# print(prueba.nombre)

from prueba import nombre
from camelcase import CamelCase

instancia = CamelCase()

print(instancia.hump("hola mundo"))
print(nombre)