#!flask/bin/python
from flask import Flask, jsonify, request
from flask_cors import CORS
from math import *
import math
app = Flask(__name__)
CORS(app)

def cubrt(x):
    if 0<=x: return x**(1./3.)
    return -(-x)**(1./3.)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/calculator/add', methods=['POST'] ,endpoint='add')
def add():
    data = request.get_json()
    ans = float(data['a'])+ float(data['b']);
    print(ans)
    return jsonify({'solution': ans}) 

@app.route('/calculator/substract', methods=['POST'],endpoint='substract')
def substract():
    data = request.get_json()
    ans = data['a']-data['b'];
    print(ans)
    return jsonify({'solution': ans}) 

@app.route('/calculator/multiply', methods=['POST'],endpoint='multiply')
def multiply():
    data = request.get_json()
    ans = data['a']*data['b'];
    print(ans)
    return jsonify({'solution': ans}) 


@app.route('/calculator/divide', methods=['POST'],endpoint='divide')
def divide():
    data = request.get_json()
    ans = (data['a']/data['b']);
    print(ans)
    return jsonify({'solution': ans}) 

@app.route('/calculator/square_root', methods=['POST'],endpoint='square_root')
def square_root():
    data = request.get_json()
    ans = math.sqrt(data['a']);
    print(ans)
    return jsonify({'solution': ans}) 


@app.route('/calculator/cuberoot', methods=['POST'],endpoint='cuberoot')
def cuberoot():
    data = request.get_json()
    ans = cubrt(data['a'])
    print(ans)
    return jsonify({'solution': ans}) 

@app.route('/calculator/power', methods=['POST'],endpoint='power')
def power():
    data = request.get_json()
    ans = pow(data['a'],data['b'])
    print(ans)
    return jsonify({'solution': ans}) 


@app.route('/calculator/factorial', methods=['POST'],endpoint='factorial')
def factorial():
    data =request.get_json()
    print(data['a'])
    ans = math.factorial(int(data['a']));
    print(ans)
    return jsonify({'solution': ans}) 



if __name__ == '__main__':
    app.run(debug=True)