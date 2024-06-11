
use project3cin

show collections

db.desenvolvedorasJogosPerfis.find().pretty();

//ponto 33 - criacao de indice de texto + 34 - uso do search para busca + 2 find + 26 pretty + 16 limit + 39 skip

db.desenvolvedorasJogosPerfis.createIndex({ "comentarios.comentario": "text" });
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).count();// total documento que fala de jogos
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).limit(1).pretty();// primeiro documento que fala de jogos
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).skip(1).pretty();// restante dos documentos

// ponto 4 + ponto 8 + 9 + 13 media das avaliacoes dos sites por genero de jogo

db.desenvolvedorasJogosPerfis.aggregate([{ $unwind: "$jogosDesenvolvidos"},{ $unwind: "$jogosDesenvolvidos.criticas"},
{$group: {
      _id: "$jogosDesenvolvidos.genero",
      avgAvalicao: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }}
]);

// ponto 44 +
    
db.usuarios.aggregate([{
  $lookup: {
    from: "desenvolvedorasJogosPerfis",
    localField: "jogos",
    foreignField: "jogosDesenvolvidos.titulo",
    as: "empresaInfo"
  }
},{$unwind:"$empresaInfo"},{$unwind:"$empresaInfo.jogosDesenvolvidos"},
{$group: { _id: "$nickname",
    totalHoras:{$sum:"$empresaInfo.jogosDesenvolvidos.quantidadeHoras"}}}]);
