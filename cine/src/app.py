from flask import Flask ,jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)
CORS(app)
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/proyecto'
#                                               user:clave@localhost/nombreBaseDatos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)
# defino la tabla
class favoritos(db.Model):   # la clase Producto hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    valoracion=db.Column(db.Integer)
    
    img=db.Column(db.String(100))
    def __init__(self,nombre,valoracion,img):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.valoracion=valoracion
        
        self.img=img
with app.app_context():
    db.create_all()  # crea las tablas
#  ************************************************************
 
class FavoritoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','valoracion','',"img")
favorito_schema=FavoritoSchema()            # para crear un producto
favoritos_schema=FavoritoSchema(many=True)  # multiples registros
 
 
# crea los endpoint o rutas (json)
@app.route('/favoritos',methods=['GET'])
def get_Favoritos():
    all_favoritos=favoritos.query.all()     # query.all() lo hereda de db.Model
    result=favoritos_schema.dump(all_favoritos)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
 
@app.route('/favoritos/<id>',methods=['GET'])
def get_favorito(id):
    favorito=favoritos.query.get(id)
    return favorito_schema.jsonify(favorito)

@app.route('/favoritos/<id>',methods=['DELETE'])
def delete_favorito(id):
    favorito=favoritos.query.get(id)
    db.session.delete(favorito)
    db.session.commit()
    return favorito_schema.jsonify(favorito)

@app.route('/favoritos', methods=['POST']) # crea ruta o endpoint
def create_favorito():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    valoracion=request.json['valoracion']
    img=request.json['img']
    new_favorito=favoritos(nombre,valoracion,img)
    db.session.add(new_favorito)
    db.session.commit()
    return favorito_schema.jsonify(new_favorito)

@app.route('/favoritos/<id>' ,methods=['PUT'])
def update_favorito(id):
    favorito=favoritos.query.get(id)
   
    nombre=request.json['nombre']
    valoracion=request.json['valoracion']
    img=request.json['img']

    favorito.nombre=nombre
    favorito.valoracion=valoracion
    favorito.img=img
    db.session.commit()
    return favorito_schema.jsonify(favorito)

 
 
# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)  
