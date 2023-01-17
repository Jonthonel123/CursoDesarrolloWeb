# Para este reto tendremos que hacer lo siguiente:

# Ingresar un nombre y su edad.
# Si es menor de edad que indique que dependiendo de la hora (si es mas de las 6pm) debe ir a dormir y si no hacer la tarea.
# Si es mayor de edad que indique que no esta obligado a hacer nada.

nombre = input("Ingresa tu nombre: ")
edad = int(input("Ingrese su edad: "))

if edad <=18:
    hora = int(input("ingrese la hora: "))
    if hora >= 6:
        print("Debe ir a dormir")
else:
    print("No esta obligado ir a dormir")
    
# print(f'Bienvenido, {nombre} y su edad es {edad}')