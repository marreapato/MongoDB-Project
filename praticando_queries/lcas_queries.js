//usuarios com 1 jogo apenas
db.usuarios.find({'jogos':{$size:1}}).pretty();

//match - empresas localizadas nos EUA

db.empresasProdutorasDeGames.aggregate([{ $match: { paisOrigem: "EUA" } }]);

db.empresasProdutorasDeGames.find();


//jogos com preço maior que 20 reais
db.jogosVideoGame.find({ $where: "this.preco > 20" });
