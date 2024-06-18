//Quais são os usuários que têm acesso antecipado aos jogos?
db.usuarios.aggregate([{$match:{$expr:{$eq:["$acessoAntecipado",true]}}}]);

//Quais são os jogos mais jogados pelos usuários, considerando o percentual de horas jogadas?
db.usuarios.aggregate([{$unwind:"$jogos"},{$group:{_id:{Jogo:"$jogos.jogo",Horas:"$jogos.percentualHoras"},"total":{$sum:1}}},{$sort:{"total":1}}]);
//ou
