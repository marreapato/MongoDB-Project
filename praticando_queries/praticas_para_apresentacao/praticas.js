//Quais são os usuários que têm acesso antecipado aos jogos?
db.usuarios.aggregate([{$match:{$expr:{$eq:["$acessoAntecipado",true]}}}]);

//Quais são os jogos mais jogados pelos usuários, considerando o percentual de horas jogadas?
db.usuarios.aggregate([{$unwind:"$jogos"},{$group:{_id:{Jogo:"$jogos.jogo",Horas:"$jogos.percentualHoras"},"total":{$sum:1}}},{$sort:{"total":1}}]);
//ou considerando percentual medio de horas
db.usuarios.aggregate([{$unwind:"$jogos"},{$group:{_id:"$jogos.jogo","mediaPercent":{$avg:"$jogos.percentualHoras"}}},{$sort:{"mediaPercent":1}}]);

//Quais são os usuários que jogam "The Witcher 3: Wild Hunt"?
db.usuarios.aggregate([{$unwind:"$jogos"},{$match:{$expr:{$eq:["$jogos.jogo","The Witcher 3: Wild Hunt"]}}},{$project:{nickname:1,jogo:"$jogos.jogo",nome:1}}]);

//Quais são os usuários que têm mais de 30 anos?
db.usuarios.aggregate([{$match:{$expr:{$gt:["$idade",30]}}}]);
