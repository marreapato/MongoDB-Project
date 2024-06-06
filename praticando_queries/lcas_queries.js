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

