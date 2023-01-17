class persona:
    def __init__(self,nombre,sexo,fechaNac):
        self.nombre = nombre
        self.sexo = sexo
        self.fechaNac = fechaNac

    def saludar(self):
        print(f"Buen dia soy {self.nombre} ")

class profesor(persona):
    def __init__(self, curso):
        self.curso = curso
    def materia(self):
        print(f"Soy profesor del curso de {self.curso} ")
    def materia_public(self):
        return self.materia()

class alumno(persona):
    def __init__(self, ciclo):
        self.ciclo = ciclo
    def nivel(self):
        print(f"Soy alumno del {self.ciclo} ciclo ")
    def nivel_public(self):
        return self.nivel()

persona_uno = profesor("JavaScript")
persona_uno.nombre = "Manuel"
persona_uno.saludar()
persona_uno.materia_public()

persona_dos = alumno("Primer")
persona_dos.nombre = "Carlos"
persona_dos.saludar()
persona_dos.nivel_public()
