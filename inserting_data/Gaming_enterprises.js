use projeto3cin

show collections

// empresas produtoras de Games

db.empresasProdutorasDeGames.insertOne({
    "nome": "Naughty Dog",
    "paisOrigem": "EUA",
    "fundacao": 1984,
    "jogosDesenvolvidos": [
        "The Last of Us",
        "The Last of Us Part II"
    ],
    "colecionaveis": [
        "Ellie Figure",
        "Joel Figure"
    ]
});


db.empresasProdutorasDeGames.find().pretty();


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
        "colecionaveis": [
            "GTAV Poster",
            "Arthur Morgan Figure"
        ]
    },
    {
        "nome": "CD Projekt Red",
        "paisOrigem": "Polônia",
        "fundacao": 2002,
        "jogosDesenvolvidos": [
            "The Witcher 3: Wild Hunt"
        ],
        "colecionaveis": [
            "Geralt Statue",
            "The Witcher Poster"
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
        "colecionaveis": [
            "Portal Gun Replica"
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
            "The Elder Scrolls II: Daggerfall",
            "The Elder Scrolls"
        ],
        "colecionaveis": [
             "Dragonborn Statue",
        "Neravarine Action Figure",
        "Daedric Sword Replica"
        ]
    }
]);

//db.empresasProdutorasDeGames.remove({});
    
db.empresasProdutorasDeGames.find().pretty();
