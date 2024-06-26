//queries de insercao
//queries de analise
//queries de extra
use project3cin

show collections

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


//todos usuarios que jogam Grand Theft Auto IV
    
db.usuarios.find({ "jogos.jogo": { $all: ["Grand Theft Auto IV"]}});

//quantidade de usuarios por jogo    
    
db.usuarios.aggregate([
    {
        $unwind: "$jogos"
    },{$sortByCount: "$jogos.jogo"},{$project:{"totalUsuarios":"$count"}}]);

    
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

//Jogos que possuem baixa avaliacao  

db.desenvolvedorasJogosPerfis.aggregate([
   { $unwind: "$jogosDesenvolvidos" },
   { $project: {_id: "$jogosDesenvolvidos.titulo",
         critica_site: {
            $filter: {
               input: "$jogosDesenvolvidos.criticas",
               as: "critica",
               cond: { $lt: [ "$$critica.avaliacao", 8] }
            }
         }
      }
   },{ $match: { "critica_site.0": { $exists: true } } }
]);

// total de jogos por classificacao indicativa
   
db.desenvolvedorasJogosPerfis.aggregate([{$unwind:"$jogosDesenvolvidos"},
{$group:{_id:"$jogosDesenvolvidos.classificacaoIndicativa",
    totalJogos:{$sum:1}}},{$sort:{"totalJogos":1}}]);

//percentual de horas de cada jogo (ou horas jogadas por cada jogo) por usuario
//parte um apenas dados que deram certo
    
db.usuarios.aggregate([{$unwind: "$jogos"},
    {
        $lookup: {
            from: "desenvolvedorasJogosPerfis",
            let: { jogo: "$jogos.jogo" },
            pipeline: [//retorna apenas os dados que deram match
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
       as: "detalhesDoJogo"}}])
       
//parte dois tira o Array

db.usuarios.aggregate([{$unwind: "$jogos"},
    {
        $lookup: {
            from: "desenvolvedorasJogosPerfis",
            let: { jogo: "$jogos.jogo" },
            pipeline: [//retorna apenas os dados que deram match
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
       as: "detalhesDoJogo"}},{$unwind: "$detalhesDoJogo"}])
       

//parte 3 correcao  

db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},
  // Projeta os campos desejados
  {
    $project: {
      _id: "$nickname",
      nome: 1,
      jogo: "$jogos.jogo",
      percentualHoras: "$jogos.percentualHoras",
      quantidadeHoras: "$detalhesDoJogo.jogosDesenvolvidos.quantidadeHoras",
      horasJogadas:{$multiply:["$detalhesDoJogo.jogosDesenvolvidos.quantidadeHoras","$jogos.percentualHoras"]}
    }
  }
]);


//parte 4 finalizacao e agrupamento de resultados


db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},
  // Projeta os campos desejados
  {
    $project: {
      _id: "$nickname",
      nome: 1,
      jogo: "$jogos.jogo",
      percentualHoras: "$jogos.percentualHoras",
      quantidadeHoras: "$detalhesDoJogo.jogosDesenvolvidos.quantidadeHoras",
      horasJogadas:{$multiply:["$detalhesDoJogo.jogosDesenvolvidos.quantidadeHoras","$jogos.percentualHoras"]}
    }
  },{$group: {
      _id: "$nome", // Agrupa por nome de usuário
      jogos: {
        $addToSet: {
          jogo: "$jogo",
          percentualHoras: "$percentualHoras",
          quantidadeHoras: "$quantidadeHoras",
          horasJogadas: "$horasJogadas"
        }
      }
    }}
]);
    
// estatisticas de usuarios

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


//faturamento de cada empresa e quantidade vendida

db.desenvolvedorasJogosPerfis.find();


db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},{$group: { _id: "$detalhesDoJogo.nome",
    totalFaturado:{$sum:"$detalhesDoJogo.jogosDesenvolvidos.preco"},quantidadeVendida:{$sum:1}}}])
    
//outra maneira
    
db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},{$group: { _id: "$detalhesDoJogo.jogosDesenvolvidos.titulo",empresa:{$first:"$detalhesDoJogo.nome"},
    totalFaturado:{$sum:"$detalhesDoJogo.jogosDesenvolvidos.preco"},quantidadeVendida:{$sum:1}}},
    {$group: { _id: "$empresa",
    totalFaturado:{$sum:"$totalFaturado"},quantidadeVendida:{$sum:"$quantidadeVendida"}}}])

//valor arrecadado por jogo
    
db.usuarios.aggregate([
  { $unwind: "$jogos" },
    {
    $lookup: {
      from: "desenvolvedorasJogosPerfis",
      let: { jogo: "$jogos.jogo" },
      pipeline: [
        { $unwind: "$jogosDesenvolvidos" },
        { $match: { $expr: { $eq: ["$jogosDesenvolvidos.titulo", "$$jogo"] } } }
      ],
      as: "detalhesDoJogo"
    }
  },  {$unwind: "$detalhesDoJogo"},{$group: { _id: "$detalhesDoJogo.jogosDesenvolvidos.titulo",
    totalFaturado:{$sum:"$detalhesDoJogo.jogosDesenvolvidos.preco"},quantidadeVendida:{$sum:1}}}])
