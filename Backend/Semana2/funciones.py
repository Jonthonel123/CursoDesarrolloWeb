# def nombreFuncion():
#     pass
# funcion usando parametros (argumentos)

# def saludar(nombre):
#     print(f'Hola {nombre}, como estas?')

# saludar("Jonthonel")

# def operaciones(b,a=10):
#     sumar= a + b
#     if(sumar%2==0):
#         print(f'Si es par {sumar/2}')
#     else:
#         print(f'Suma es {sumar}')
# operaciones(b=20,a=11)

# Funciones con multiparametros
# *args -> nos ayuda a recibir valores infinitos como argumentos,
# retornara o se ontenda una tupla con todos los valores
# ejem: nombreFuncion("v1","v2",...,"vx")

def alumnosInscritos(*args):
    for arg in args:
        print(arg)

alumnosInscritos("alumno1","alumno2","alumno3","alumno4","alumno5")

# **kwargs -> nombreFuncion(v1=1,v2=2,...,vx=x)

def cursosAlumnos(**kwargs):
    print(kwargs)

cursosAlumnos(curso1="java",curso2="python")