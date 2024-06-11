use projeto3cin

use project3cin

show collections

db.desenvolvedorasJogosPerfis.find().pretty();
//busca em pela palavra jogos nos comentarios das empresas
//ponto 33 - criacao de indice de texto + 34 - uso do search para busca + 2 find + 26 pretty + 16 limit + 39 skip

db.desenvolvedorasJogosPerfis.createIndex({ "comentarios.comentario": "text" });
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).limit(1).pretty();// primeiro documento que fala de jogos
db.desenvolvedorasJogosPerfis.find({ $text: { $search: "jogos" } }).skip(1).pretty();// restante dos documentos

