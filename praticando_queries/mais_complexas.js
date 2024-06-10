
show collections

db.desenvolvedorasJogosPerfis.find().pretty();

// media das avaliacoes dos sites por genero de jogo

db.desenvolvedorasJogosPerfis.aggregate([{ $unwind: "$jogosDesenvolvidos"},{ $unwind: "$jogosDesenvolvidos.criticas"},
{$group: {
      _id: "$jogosDesenvolvidos.genero",
      avgPreco: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }}
]);
