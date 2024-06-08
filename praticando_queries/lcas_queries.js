
use projeto3cin

show collections

// find e pretty sem o id (procurando jogos de ação sem o id)

db.jogosVideoGame.find({'genero':'Ação'},{_id:false}).pretty();


// usuarios com 2 jogos e com acesso antecipado a compras

db.usuarios.find({ "jogos": { $size: 2 } , 'acessoAntecipado':true});

//aggregate e match empresas sediadas nos EUA

db.empresasProdutorasDeGames.aggregate([{$match:{"paisOrigem": "EUA"}}]).pretty();


//aggregate e match para empresas que foram fundadas apos 1990 ponto 5 da lista

db.empresasProdutorasDeGames.aggregate([{ $match: { "fundacao": { $gte: 1990 } } }]).pretty();
//equivale 

db.empresasProdutorasDeGames.find({"fundacao":{$gte:1990}}).pretty();

//projecao operador de agregacao esconde o id pont 6

db.usuarios.aggregate([{$project:{"nome":1,"jogos":1,"_id":0}}]).pretty();

//equivale A

db.usuarios.find({},{"nome":true,"jogos":true,_id:false}).pretty();

// operador de maior ponto 7

db.jogosVideoGame.find({"quantidadeHoras":{$gte:40}}).pretty();

//operador unwind ponto 8
db.empresasProdutorasDeGames.find();//tinha 5
db.empresasProdutorasDeGames.aggregate([{ $unwind: "$jogosDesenvolvidos" }]);//fica com 13

db.empresasProdutorasDeGames.aggregate([{ $unwind: "$jogosDesenvolvidos" },{$match:{"nome":"Bethesda"}}]).pretty();


//operador de agrupamento ponto 9 contagem de paises das empresas

db.empresasProdutorasDeGames.aggregate([{ $group: { _id: "$paisOrigem", count: { $sum: 1 } } }]);

//operador sum ponto 10

db.jogosVideoGame.aggregate([{ $group: { _id: "$genero", valorPreco: { $sum: "$quantidadeHoras" } } }]);

//Count ponto 11 (usuarios com mais de 31 anos)

db.usuarios.find({"idade":{$gte:32}}).pretty().count();

//usando max ponto 12 (idade maxima)

db.usuarios.aggregate([{ $group: { _id: null, maxIdade: { $max: "$idade" } } }]).pretty();

//ponto 13 avg - media

db.jogosVideoGame.aggregate([{$group:{_id:"$genero",avgPreco:{$avg:"$preco"}}}]).pretty();

//ponto 14 documentos em que o campo email naop existe

db.usuarios.find({ "email": { $exists: false } });

//pontos 15 (sort) e 16 (limit)

db.usuarios.find().sort({"idade":1}).limit(5).pretty(); // 5 usuarios mais novos

//multiply ponto 17 quantidade de horas (considerando cada possibilidade de idioma)

db.jogosVideoGame.aggregate([{$project:{horasPorIdioma:{$multiply:[{$size:"$idiomasDisponiveis"},"$quantidadeHoras"]}}}]);
// uma mais complexa (preco por horas de cada jogo)

db.jogosVideoGame.aggregate([{$project:{"titulo":1,horasPorIdioma:{$multiply:["$preco",{$divide:[1,"$quantidadeHoras"]}]}}}]).pretty();

//push colocar jogo em usuario ponto 18

db.usuarios.updateOne({ "nome": "João Silva" }, { $push: { "jogos": "The Witcher 3: Wild Hunt" } });

db.usuarios.find();

//operador out para criar uma colecao com a agregacao ponto 19

db.empresasProdutorasDeGames.aggregate([{ $match: { "paisOrigem": "EUA" } }, { $out: "empresasEUA" }]);

db.empresasEUA.aggregate([
  { $unwind: "$jogosDesenvolvidos" },
  { $project: { _id: 0, jogosDesenvolvidos: 1, nome: 1 } },// necessario para nao ter id duplicado
  { $out: "empresasEUA" }
]);

db.empresasEUA.find().pretty();

//ponto 20 e 21 4 letras iniciais do nome em maiusculo (poderia ser usado paraconstruir um codigo,etc)

db.usuarios.aggregate([{ $project: { CodName: { $toUpper:{$substr: ["$nome", 0, 4] } } }}]);

//ponto 22 - concatenation a criacao de um id de usuario com base no nome e nickname

db.usuarios.aggregate([{ $project: { fullName: { $concat: ["$nome", " ", "$nickname"] } } }]);

db.usuarios.aggregate([{ $project: { CodName: {$concat:[{$toUpper:{$substr: ["$nome", 0, 4] }},"-",{$toUpper:"$nickname"}] } }}]);

//ponto 23 usando o where - empresa fundada apos o ano 2000

db.empresasProdutorasDeGames.find({$where:"this.fundacao>2000"});
  
//ponto 24 map reduce -- meda de horas de cada genero de jogo

db.jogosVideoGame.find();
  
var map = function(){emit(this.genero,this.quantidadeHoras)};
var reduce = function(Genero,Horas){return Array.avg(Horas);};

db.jogosVideoGame.mapReduce(map,reduce,{out:"mediares"});

db.mediares.find().pretty();
db.paisOrigemCounts.find();


//ponto 25
