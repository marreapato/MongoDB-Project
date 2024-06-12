use projeto3cin

// Inserir documentos sem "colecionaveis"

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

db.empresasProdutorasDeGames.find({ nome: "Bethesda" }).pretty();

db.empresasProdutorasDeGames.find().pretty();
