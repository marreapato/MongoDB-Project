
show collections

db.desenvolvedorasJogosPerfis.find().pretty();

db.desenvolvedorasJogosPerfis.aggregate([{ $unwind: "$jogosDesenvolvidos"},{ $unwind: "$jogosDesenvolvidos.criticas"}]);

db.desenvolvedorasJogosPerfis.aggregate([{ $unwind: "$jogosDesenvolvidos"},{ $unwind: "$jogosDesenvolvidos.criticas"},
{$group: {
      _id: "$jogosDesenvolvidos.genero",
      avgPreco: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }}
]);

db.desenvolvedorasJogosPerfis.aggregate([
  { $unwind: "$comentarios" },
  { 
    $group: {
      _id: "$jogosDesenvolvidos.genero",
      avgPreco: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }
  }
]);
