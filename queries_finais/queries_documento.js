//queries de insercao
//queries de analise
//queries de extra
use project3cin

show collections

db.desenvolvedorasJogosPerfis.find().pretty();

//ponto 33 - criacao de indice de texto + 34 - uso do search para busca + 2 find + 26 pretty + 16 limit + 39 skip

db.desenvolvedorasJogosPerfis.createIndex({ "comentarios.comentario": "text" });
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).count();// total documento que fala de jogos
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).pretty();// restante dos documentos

// ponto 4 + ponto 8 + 9 + 13 media das avaliacoes dos sites por genero de jogo

db.desenvolvedorasJogosPerfis.aggregate([{ $unwind: "$jogosDesenvolvidos"},{ $unwind: "$jogosDesenvolvidos.criticas"},
{$group: {
      _id: "$jogosDesenvolvidos.genero",
      avgAvaliacao: { $avg: "$jogosDesenvolvidos.criticas.avaliacao" }
    }},{$sort:{ "avgAvaliacao": 1}}
]);

//quantidade de usuarios por jogo
    
db.usuarios.aggregate([{
    $lookup:{from: "desenvolvedorasJogosPerfis",
    localField: "jogos.jogo",
    foreignField: "jogosDesenvolvidos.titulo",
    as: "empresaInfo"}
    
    },{$unwind:"$empresaInfo"},{$unwind:"$empresaInfo.jogosDesenvolvidos"},{$sortByCount: "$empresaInfo.jogosDesenvolvidos.titulo"},
    {$project:{"totalUsuarios":"$count"}}]);    
    


//retornar todas as empresas que obtiveram a indicacao maxima

db.desenvolvedorasJogosPerfis.aggregate([
    { $unwind: "$comentarios" },
    {$match: {"comentarios.indicacao": {$gte:10}}},
    {$project: {
            nomeEmpresa: "$nome",
            jogoDesenvolvido: "$jogosDesenvolvidos.titulo",
            indicacao:"$comentarios.indicacao",
            usuario:"$comentarios.usuario"
        }
    },{$group:{_id:"$nomeEmpresa",usuariosQueIndicaram:{$addToSet:"$usuario"}}}
]);

//Jogos que possuem baixa avaliacao fazer
    
db.desenvolvedorasJogosPerfis.find();    
    
//percentual de horas de cada jogo (ou horas jogadas por cada jogo) por usuario

db.usuarios.find();
    
// extra


db.usuarios.aggregate([{
  $lookup: {
    from: "desenvolvedorasJogosPerfis",
    localField: "jogos.jogo",
    foreignField: "jogosDesenvolvidos.titulo",
    as: "empresaInfo"
  }
},{$unwind:"$empresaInfo"},{$unwind:"$empresaInfo.jogosDesenvolvidos"},
{$group: { _id: "$nickname",
    totalGasto:{$sum:"$empresaInfo.jogosDesenvolvidos.preco"},
    precoMax:{$max:"$empresaInfo.jogosDesenvolvidos.preco"},
    primeiroJogo: { $first: "$empresaInfo.jogosDesenvolvidos.titulo" }}},{$project:{"totalGasto":1,"precoMax":1,"primeiroJogo":1,
        statusJogador: { $cond: { if: {$gte:["$totalGasto", 100] }, then: "Promissor", else: "Standard"}}}}]);
        
        
        
    
