
use projeto3cin

show collections

db.jogosVideoGame.find();
db.empresasProdutorasDeGames.find();//ano Fundacao
db.usuarios.find();
//uma colecao complexa


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
  
//ponto 24 map reduce -- meda de horas de cada genero de jogo ponto 25 uso de function

db.jogosVideoGame.find();
  
var map = function(){emit(this.genero,this.quantidadeHoras)};
var reduce = function(Genero,Horas){return Array.avg(Horas);};

db.jogosVideoGame.mapReduce(map,reduce,{out:"mediares"});

//ponto 26 pretty

db.mediares.find().pretty();

//ponto 27 uso do all, todos os usuarios que jofaram tlou

db.usuarios.find({ "jogos": { $all: ["The Last of Us"]}});

//ponto 28 - setintersection encontra valores em comum entre documentos e arrays

db.usuarios.aggregate([{ $project: {nome:1, commonGames: { $setIntersection: ["$jogos", ["The Last of Us", "Red Dead Redemption 2"]] } } }]);


//ponto 29 - checa se é subset

db.usuarios.aggregate([{ $project: { isSubset: { $setIsSubset: [["The Last of Us"], "$jogos"] } } }]);

//ponto 30 - combina elemento de arrays sem duplicatas

db.usuarios.aggregate([{ $project: {nome:1,allGames: { $setUnion: ["$jogos", ["The Last of Us"]] } } },{ $out: "usuariosJogos" }]);

//ponto 31 - each faz a adição 

db.usuariosJogos.find();

db.usuariosJogos.updateOne({ "nome": "João Silva" }, { $addToSet: { "allGames": { $each: ["Game1", "Game2"] } } });

db.usuariosJogos.find();

//ponto 32 operador set para modificar um valor, modificar horas

db.jogosVideoGame.find();
db.jogosVideoGame.updateOne({ "titulo": "The Witcher 3: Wild Hunt" }, { $set: { "quantidadeHoras": 300 } });//modific
db.jogosVideoGame.find();

//ponto 33 - criacao de indice de texto

db.empresasProdutorasDeGames.createIndex({ "comentarios.comentario": "text" });

//pomto 34 - uso do search para busca

db.empresasProdutorasDeGames.find({ $text: { $search: "gráficos" } });// documento que fala dos graficos

//ponto 35 - agrupa a contagem em ordem decrescente

db.usuarios.aggregate([{ $sortByCount: "$acessoAntecipado" }]);

//ponto 36 comando filter, utilizado para filtrar em documentos de aninhados


db.jogosVideoGame.aggregate( [
   {
      $project: {
         critica_site: {
            $filter: {
               input: "$criticas",
               as: "critica",
               cond: { $gte: [ "$$critica.avaliacao", 9] }
            }
         }
      }
   }
] );
   
//ponto 37 comando update

db.usuarios.find();
db.usuarios.update({ "nickname": "jsilva" }, { $set: { "email": "joaosilva@hotmail.com" } });
//db.usuarios.updateOne({ "nickname": "jsilva" }, { $set: { "email": "joaosilva@hotmail.com" } }); mais seguro
db.usuarios.find();

//ponto 38 SAVE altera o existente e adiciona o inexistente

db.empresasEUA.find();
db.empresasEUA.save({ "_id": ObjectId("66636a6870e584a47a633b5c"), "nome": "Eletronic Arts", "jogosDesenvolvidos": "FIFA 15" });//atualiza o existente
db.empresasEUA.find();
db.empresasEUA.save({ "_id": ObjectId("66736a6870e584a47a633b5d"), "nome": "SEGA", "jogosDesenvolvidos": "Sonic" });//adiciona o inexistente
db.empresasEUA.find();

//ponto 39 skip pula os 5 primeiros documentos

db.usuarios.find().skip(5);

//ponto 40 - retorna o primeiro documento de cada grupo

db.empresasProdutorasDeGames.aggregate([{ $group: { _id: "$paisOrigem", firstEmpresa: { $first: "$nome" } } }]);

//ponto 41 renameCollection renomeia a colecao

db.empresasEUA.renameCollection("novasEmpresas");
db.novasEmpresas.find();

//ponto 42 compara duas strings para checar se uma tem uma ordem superior a da otura

db.usuarios.find();
db.usuarios.aggregate([{ $project: { comparison: { $strcasecmp: ["$nome", "$nickname"] } } }]);

//ponto 43 faz uma avaliacao condicional

db.jogosVideoGame.find();

db.jogosVideoGame.aggregate([{ $project: { status: { $cond: { if: {$gte:["$preco", 35] }, then: "Caro", else: "Barato" } } } }]);

//ponto 44 faz um letf OUTER join ou seja pega tudo da intercessao de empresas e os valores totais de usuarios

db.usuarios.aggregate([{
  $lookup: {
    from: "empresasProdutorasDeGames",
    localField: "jogos",
    foreignField: "jogosDesenvolvidos",
    as: "empresaInfo"
  }
}]);


//ponto 45 - seleciona uma amostra aleatoria

db.empresasProdutorasDeGames.aggregate([{ $sample: { size: 3 } }]);


//ponto 46 comando set é usado conjuntamente com o update

db.usuarios.updateOne({ "nome": "Carlos Souza" }, { $set: { "email": "carlossouza@example.com" } });

//ponto 47 encontra um uico documento
db.empresasProdutorasDeGames.find();
db.empresasProdutorasDeGames.findOne({ "paisOrigem": "EUA" });

//ponto 48 adiciona um novo item ao array

db.usuarios.find();

db.usuarios.updateOne({ "nickname": "mariaoliveira" }, { $addToSet: { "jogos": "Portal 2" } });
db.usuarios.find();



