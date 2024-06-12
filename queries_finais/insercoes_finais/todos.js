// Insere a coleção de usuários
db.usuarios.insertMany([
    {
        "nome": "João Silva",
        "idade": 30,
        "email": "joao.silva@example.com",
        "jogos": [
            {"jogo": "The Last of Us", "percentualHoras": 0.4}, 
            {"jogo": "Grand Theft Auto V", "percentualHoras": 0.3}
        ],
        "acessoAntecipado": true,
        "nickname": "jsilva"
    },
    {
        "nome": "Maria Oliveira",
        "idade": 25,
        "email": "maria.oliveira@example.com",
        "jogos": [
            {"jogo": "Red Dead Redemption 2", "percentualHoras": 0.5}, 
            {"jogo": "The Witcher 3: Wild Hunt", "percentualHoras": 0.5}
        ],
        "acessoAntecipado": false,
        "nickname": "mariaoliveira"
    },
    {
        "nome": "Carlos Souza",
        "idade": 35,
        "email": "carlos.souza@example.com",
        "jogos": [
            {"jogo": "Half-Life 2", "percentualHoras": 0.4}, 
            {"jogo": "Portal 2", "percentualHoras": 0.3}, 
            {"jogo": "The Elder Scrolls V: Skyrim", "percentualHoras": 0.3}
        ],
        "acessoAntecipado": true,
        "nickname": "csouza"
    },
    {
        "nome": "John Doe",
        "idade": 28,
        "email": "johndoe@example.com",
        "jogos": [
            {"jogo": "The Last of Us", "percentualHoras": 0.5}, 
            {"jogo": "The Last of Us Part II", "percentualHoras": 0.5}
        ],
        "acessoAntecipado": false,
        "nickname": "johndoe"
    },
    {
        "nome": "Jane Doe",
        "idade": 26,
        "email": "janedoe@example.com",
        "jogos": [
            {"jogo": "The Last of Us", "percentualHoras": 0.5}, 
            {"jogo": "The Last of Us Part II", "percentualHoras": 0.5}
        ],
        "acessoAntecipado": true,
        "nickname": "janedoe"
    },
    {
        "nome": "Gabriel Ribeiro",
        "idade": 22,
        "email": "gamer123@example.com",
        "jogos": [
            {"jogo": "Grand Theft Auto V", "percentualHoras": 0.6}, 
            {"jogo": "Grand Theft Auto IV", "percentualHoras": 0.4}
        ],
        "acessoAntecipado": false,
        "nickname": "gamer123"
    },
    {
        "nome": "Paula Lima",
        "idade": 24,
        "email": "player456@example.com",
        "jogos": [
            {"jogo": "Red Dead Redemption 2", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": true,
        "nickname": "player456"
    },
    {
        "nome": "Washington Luis",
        "idade": 29,
        "email": "witcherfan@example.com",
        "jogos": [
            {"jogo": "The Witcher 3: Wild Hunt", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "witcherfan"
    },
    {
        "nome": "Renato Livio",
        "idade": 27,
        "email": "rpglover@example.com",
        "jogos": [
            {"jogo": "The Witcher 3: Wild Hunt", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": true,
        "nickname": "rpglover"
    },
    {
        "nome": "Paulo Fagundes",
        "idade": 23,
        "email": "portalplayer@example.com",
        "jogos": [
            {"jogo": "Portal 2", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": false,
        "nickname": "portalplayer"
    },
    {
        "nome": "Fernanda Souza",
        "idade": 32,
        "email": "halflifefan@example.com",
        "jogos": [
            {"jogo": "Half-Life 2", "percentualHoras": 1.0}
        ],
        "acessoAntecipado": true,
        "nickname": "halflifefan"
    },
    {
        "nome": "Cassie Silva",
        "idade": 31,
        "email": "tesfan@example.com",
        "jogos": [
            {"jogo": "The Elder Scrolls V: Skyrim", "percentualHoras": 0.8}
        ],
        "acessoAntecipado": false,
        "nickname": "tesfan"
    },
    {
        "nome": "Oliver Rivera",
        "idade": 33,
        "email": "morrowindlover@example.com",
        "jogos": [
            {"jogo": "The Elder Scrolls IV: Morrowind", "percentualHoras": 0.9}
        ],
        "acessoAntecipado": true,
        "nickname": "morrowindlover"
    }
]);
    
//update com $push
db.usuarios.updateOne(
    { "nickname": "jsilva" },
    { 
        $push: { 
            "jogos": { 
                "jogo": "Sonic", 
                "percentualHoras": 0.2 
            } 
        } 
    }
);


// Jogos

db.jogosVideoGame.insertMany([
    {
        "titulo": "The Last of Us",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2013,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.7},
            {"site": "IGN", "avaliacao": 10}
        ],
        "quantidadeHoras": 170,
        "preco": 59.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "The Last of Us Part II",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2020,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.3}
        ],
        "quantidadeHoras": 40,
        "preco": 69.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Grand Theft Auto V",
        "genero": "Ação",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2013,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 10},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeHoras": 110,
        "preco": 29.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Grand Theft Auto IV",
        "genero": "Ação",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2008,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.0},
            {"site": "IGN", "avaliacao": 9.2},
            {"site": "GameSpot", "avaliacao": 9.4}
        ],
        "quantidadeHoras": 25,
        "preco": 19.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Red Dead Redemption 2",
        "genero": "Ação e Aventura",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2018,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.8},
            {"site": "IGN", "avaliacao": 10},
            {"site": "GameSpot", "avaliacao": 9.7}
        ],
        "quantidadeHoras": 430,
        "preco": 59.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "The Witcher 3: Wild Hunt",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Polonês", "Francês"],
        "anoLancamento": 2015,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.3},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeHoras": 3000,
        "preco": 39.99,
        "classificacaoIndicativa": "18+"
    },
    {
        "titulo": "Half-Life 2",
        "genero": "FPS",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
        "anoLancamento": 2004,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.6},
            {"site": "IGN", "avaliacao": 9.8}
        ],
        "quantidadeHoras": 120,
        "preco": 9.99,
        "classificacaoIndicativa": "16+"
    },
    {
        "titulo": "Portal 2",
        "genero": "Puzzle",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.4},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeHoras": 40,
        "preco": 19.99,
        "classificacaoIndicativa": "10+"
    },
    {
        "titulo": "The Elder Scrolls V: Skyrim",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.3},
            {"site": "IGN", "avaliacao": 9.1},
            {"site": "GameSpot", "avaliacao": 9.2}
        ],
        "quantidadeHoras": 600,
        "preco": 29.99,
        "classificacaoIndicativa": "17+"
    },
    {
        "titulo": "The Elder Scrolls IV: Morrowind",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português"],
        "anoLancamento": 2002,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.1},
            {"site": "IGN", "avaliacao": 8.9}
        ],
        "quantidadeHoras": 400,
        "preco": 9.99,
        "classificacaoIndicativa": "17+"
    },
    {
        "titulo": "The Elder Scrolls III: Oblivion",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês"],
        "anoLancamento": 2006,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.2},
            {"site": "IGN", "avaliacao": 9.0},
            {"site": "GameSpot", "avaliacao": 8.8}
        ],
        "quantidadeHoras": 102,
        "preco": 14.99,
        "classificacaoIndicativa": "17+"
    },
    {
        "titulo": "The Elder Scrolls II: Daggerfall",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês"],
        "anoLancamento": 1996,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 8.5},
            {"site": "IGN", "avaliacao": 8.7}
        ],
        "quantidadeHoras": 75,
        "preco": 4.99,
        "classificacaoIndicativa": "13+"
    },
    {
        "titulo": "The Elder Scrolls",
        "genero": "RPG",
        "idiomasDisponiveis": ["Inglês"],
        "anoLancamento": 1994,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 7.8},
            {"site": "IGN", "avaliacao": 7.5}
        ],
        "quantidadeHoras": 30,
        "preco": 2.99,
        "classificacaoIndicativa": "13+"
    }
]);
    

db.jogosVideoGame.save({
    "_id": ObjectId("6669d860e4b7044b12c9eb5e"),
    "titulo": "Sonic",
    "genero": "Plataforma",
    "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
    "anoLancamento": 1991,
    "criticas": [
        {"site": "Metacritic", "avaliacao": 8.8},
        {"site": "IGN", "avaliacao": 8.5}
    ],
    "quantidadeHoras": 20,
    "preco": 14.99,
    "classificacaoIndicativa": "L"
});


db.jogosVideoGame.updateOne(
    { titulo: "The Witcher 3: Wild Hunt" },
    { $set: { quantidadeHoras: 200 } }
);


//empresas

db.empresasProdutorasDeGames.insertOne({
    "nome": "Naughty Dog",
    "paisOrigem": "EUA",
    "fundacao": 1984,
    "jogosDesenvolvidos": [
        "The Last of Us",
        "The Last of Us Part II"
    ],
    "comentarios": [
        {
            "usuario": "johndoe",
            "comentario": "Excelente empresa com jogos emocionantes!",
            "indicacao": 10
        },
        {
            "usuario": "janedoe",
            "comentario": "Os gráficos dos jogos são incríveis.",
            "indicacao": 9
        }
    ]
});

db.empresasProdutorasDeGames.insertMany([
    {
        "nome": "Rockstar Games",
        "paisOrigem": "EUA",
        "fundacao": 1998,
        "jogosDesenvolvidos": [
            "Grand Theft Auto V",
            "Grand Theft Auto IV",
            "Red Dead Redemption 2"
        ],
        "comentarios": [
            {
                "usuario": "gamer123",
                "comentario": "Adoro a série GTA!",
                "indicacao": 10
            },
            {
                "usuario": "player456",
                "comentario": "RDR2 é um dos melhores jogos que já joguei.",
                "indicacao": 9
            }
        ]
    },{
        "nome": "SEGA",
        "paisOrigem": "Japão",
        "fundacao": 1988,
        "jogosDesenvolvidos": [
            "Sonic"
        ],
        "comentarios": [
            {
                "usuario": "jsilva",
                "comentario": "Nostalgia Pura!",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "CD Projekt Red",
        "paisOrigem": "Polônia",
        "fundacao": 2002,
        "jogosDesenvolvidos": [
            "The Witcher 3: Wild Hunt"
        ],
        "comentarios": [
            {
                "usuario": "witcherfan",
                "comentario": "The Witcher 3 tem uma história incrível.",
                "indicacao": 10
            },
            {
                "usuario": "rpglover",
                "comentario": "Melhor RPG de todos os tempos.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Valve Corporation",
        "paisOrigem": "EUA",
        "fundacao": 1996,
        "jogosDesenvolvidos": [
            "Half-Life 2",
            "Portal 2"
        ],
        "comentarios": [
            {
                "usuario": "portalplayer",
                "comentario": "Portal 2 é genial!",
                "indicacao": 10
            },
            {
                "usuario": "halflifefan",
                "comentario": "Ainda espero pelo Half-Life 3.",
                "indicacao": 8
            }
        ]
    },
    {
        "nome": "Bethesda",
        "paisOrigem": "EUA",
        "fundacao": 1986,
        "jogosDesenvolvidos": [
            "The Elder Scrolls V: Skyrim",
            "The Elder Scrolls IV: Morrowind",
            "The Elder Scrolls III: Oblivion",
        ],
        "comentarios": [
            {
                "usuario": "tesfan",
                "comentario": "Skyrim é um jogo que sempre volto a jogar.",
                "indicacao": 10
            },
            {
                "usuario": "morrowindlover",
                "comentario": "Morrowind tem uma nostalgia especial.",
                "indicacao": 9
            }
        ]
    }
]);

//mais dois jogos de elder scrolls

db.empresasProdutorasDeGames.updateOne(
    { nome: "Bethesda" },
    { $addToSet: { jogosDesenvolvidos: { $each: ["The Elder Scrolls II: Daggerfall", "The Elder Scrolls"] } } }
);
