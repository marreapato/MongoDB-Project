//usuarios com 1 jogo apenas
db.usuarios.find({'jogos':{$size:1}}).pretty();


//jogadores com mais de 27 anos
db.usuarios.find({ $where: "this.idade > 27" });

