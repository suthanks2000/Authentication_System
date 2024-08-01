from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import pymysql


app =Flask(__name__)
CORS(app)

SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:@127.0.0.1:3306/wenoxo_task"
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class User(db.Model):
    __tablename__="userdetails"
    ID = db.Column(db.Integer, primary_key=True, autoincrement = True)
    userName= db.Column(db.String)
    email= db.Column(db.String)
    password= db.Column(db.String)


@app.route("/",methods=["GET"])
def Getdata():
    data = User.query.all()
    return jsonify([{"id":i.ID,"userName":i.userName}for i in data])

@app.route('/userRegister', methods=["POST"])
def RegisterUser():
    data = request.form
    reg=User(userName=data["username"],email=data["email"],password=data["password"])
    db.session.add(reg)
    db.session.commit()
    return "user Register"


@app.route('login',methods=["POST"])
def login():
    req = request.form
    data = User.query.filter_by(email=req["email"],password=req["password"]).first()
    if data in None:
        return "Check username and password"
    return "sucessful login"

if __name__ == "__main__":
    app.run(debug=True)