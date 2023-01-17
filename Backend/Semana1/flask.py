from flask import Flask

app = Flask(__name__)

@app.router('/')
def inicio():
    return 'Hola desde flask'

app.run(debug=True)