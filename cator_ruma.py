from flask import Flask, render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/careers.html')
def careers():
    return render_template('careers.html')
