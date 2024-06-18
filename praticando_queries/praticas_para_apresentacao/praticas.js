//Quais são os usuários que têm acesso antecipado aos jogos?
db.usuarios.aggregate([{$match:{$expr:{$eq:["$acessoAntecipado",true]}}}]);
