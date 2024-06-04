use projeto3cin

show collections

// empresas produtoras de Games

db.empresasProdutorasDeGames.insertOne({
    "nome": "Naughty Dog",
    "paisOrigem": "EUA",
    "fundacao": 1984,
    "jogosDesenvolvidos": [
        {
            "titulo": "The Last of Us",
            "vendas": 17.0
        },
        {
            "titulo": "The Last of Us Part II",
            "vendas": 10.0
        }
    ]
});

db.empresasProdutorasDeGames.find().pretty();


db.empresasProdutorasDeGames.insertMany([
    {
        "nome": "Rockstar Games",
        "paisOrigem": "EUA",
        "fundacao": 1998,
        "jogosDesenvolvidos": [
            {
                "titulo": "Grand Theft Auto V",
                "vendas": 140.0
            },{
                "titulo": "Grand Theft Auto IV",
                "vendas": 110.0
            },
            {
                "titulo": "Red Dead Redemption 2",
                "vendas": 50.0
            }
        ]
    },
    {
        "nome": "CD Projekt Red",
        "paisOrigem": "Polônia",
        "fundacao": 2002,
        "jogosDesenvolvidos": [
            {
                "titulo": "The Witcher 3: Wild Hunt",
                "vendas": 28.0
            },
            {
                "titulo": "Cyberpunk 2077",
                "vendas": 13.0
            }
        ]
    },
    {
        "nome": "Valve Corporation",
        "paisOrigem": "EUA",
        "fundacao": 1996,
        "jogosDesenvolvidos": [
            {
                "titulo": "Half-Life 2",
                "vendas": 12.0
            },
            {
                "titulo": "Portal 2",
                "vendas": 4.0
            }
        ]
    },
    {
        "nome": "Bethesda",
        "paisOrigem": "EUA",
        "fundacao": 1986,
        "jogosDesenvolvidos": [
            {
                "titulo": "The Elder Scrolls V: Skyrim",
                "vendas": 43.0
            },
            {
                "titulo": "The Elder Scrolls IV: Morrowind",
                "vendas": 24.0
            },
            {
                "titulo": "The Elder Scrolls III: Oblivion",
                "vendas": 54.0
            },
            {
                "titulo": "The Elder Scrolls II: Daggerfall",
                "vendas": 32.0
            },
            {
                "titulo": "The Elder Scrolls",
                "vendas": 4.0
            }
        ]
    }
]);



db.empresasProdutorasDeGames.find().pretty();
