//censura classificacao indicativa

//percentual de horas de jogo por usuario
//quantidade de usuarios por jogo
//retornar todas as empresas que obtiveram a indicacao maxima
//Jogos que possuem baixa avaliacao
//queries de insercao
//queries de analise
//queries de extra
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
      avgAvaliacao: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }},{$sort:{ "avgAvaliacao": 1}}
]);

// ponto 44 +
    
db.desenvolvedorasJogosPerfis.find();


db.usuarios.aggregate([{
  $lookup: {
    from: "desenvolvedorasJogosPerfis",
    localField: "jogos.jogo",
    foreignField: "jogosDesenvolvidos.titulo",
    as: "empresaInfo"
  }
},{$unwind:"$empresaInfo"},{$unwind:"$empresaInfo.jogosDesenvolvidos"},{ $match: { "empresaInfo.paisOrigem": "EUA" } },
{$group: { _id: "$nickname",
    totalHoras:{$sum:"$empresaInfo.jogosDesenvolvidos.quantidadeHoras"},
    precoMax:{$max:"$empresaInfo.jogosDesenvolvidos.preco"},
    primeiroJogo: { $first: "$empresaInfo.jogosDesenvolvidos.titulo" }}},{$project:{"totalHoras":1,"precoMax":1,"primeiroJogo":1,
        statusJogador: { $cond: { if: {$gte:["$totalHoras", 200] }, then: "Promissor", else: "Standard"}}}}]);
        
        
        
    
