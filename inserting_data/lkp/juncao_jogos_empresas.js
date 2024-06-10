// lookup para juncao de jogos e empresas

db.empresasProdutorasDeGames.aggregate([{
  $lookup: {
    from: "jogosVideoGame",
    localField: "jogosDesenvolvidos",
    foreignField: "titulo",
    as: "jogosDesenvolvidos"
  }
},{ $out: "desenvolvedorasJogosPerfis" }]);

db.jogosVideoGame.find()
db.desenvolvedorasJogosPerfis.find().pretty();
