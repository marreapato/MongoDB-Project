db.jogosVideoGame.insertMany([
    {
        "titulo": "The Last of Us",
        "genero": "Ação e Aventura",
        "plataforma": ["PlayStation"],
        "anoLancamento": 2013,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.7},
            {"site": "IGN", "avaliacao": 10}
        ],
        "quantidadeVendas": 170,
        "preco": 59.99
    },
    {
        "titulo": "The Last of Us Part II",
        "genero": "Ação e Aventura",
        "plataforma": ["PlayStation"],
        "anoLancamento": 2020,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.3}
        ],
        "quantidadeVendas": 40,
        "preco": 69.99
    },
    {
        "titulo": "Grand Theft Auto V",
        "genero": "Ação",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2013,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 10},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeVendas": 110,
        "preco": 29.99
    },
    {
        "titulo": "Grand Theft Auto IV",
        "genero": "Ação",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2008,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.0},
            {"site": "IGN", "avaliacao": 9.2},
            {"site": "GameSpot", "avaliacao": 9.4}
        ],
        "quantidadeVendas": 25,
        "preco": 19.99
    },
    {
        "titulo": "Red Dead Redemption 2",
        "genero": "Ação e Aventura",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2018,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.8},
            {"site": "IGN", "avaliacao": 10},
            {"site": "GameSpot", "avaliacao": 9.7}
        ],
        "quantidadeVendas": 430,
        "preco": 59.99
    },
    {
        "titulo": "The Witcher 3: Wild Hunt",
        "genero": "RPG",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2015,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.3},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeVendas": 3000,
        "preco": 39.99
    },
    {
        "titulo": "Half-Life 2",
        "genero": "FPS",
        "plataforma": ["PC"],
        "anoLancamento": 2004,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.6},
            {"site": "IGN", "avaliacao": 9.8}
        ],
        "quantidadeVendas": 120,
        "preco": 9.99
    },
    {
        "titulo": "Portal 2",
        "genero": "Puzzle",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.5},
            {"site": "IGN", "avaliacao": 9.4},
            {"site": "GameSpot", "avaliacao": 9.6}
        ],
        "quantidadeVendas": 40,
        "preco": 19.99
    },
    {
        "titulo": "The Elder Scrolls V: Skyrim",
        "genero": "RPG",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2011,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.3},
            {"site": "IGN", "avaliacao": 9.1},
            {"site": "GameSpot", "avaliacao": 9.2}
        ],
        "quantidadeVendas": 600,
        "preco": 29.99
    },
    {
        "titulo": "The Elder Scrolls IV: Morrowind",
        "genero": "RPG",
        "plataforma": ["PC", "Xbox"],
        "anoLancamento": 2002,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.1},
            {"site": "IGN", "avaliacao": 8.9}
        ],
        "quantidadeVendas": 400,
        "preco": 9.99
    },
    {
        "titulo": "The Elder Scrolls III: Oblivion",
        "genero": "RPG",
        "plataforma": ["PC", "Xbox", "PlayStation"],
        "anoLancamento": 2006,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 9.2},
            {"site": "IGN", "avaliacao": 9.0},
            {"site": "GameSpot", "avaliacao": 8.8}
        ],
        "quantidadeVendas": 102,
        "preco": 14.99
    },
    {
        "titulo": "The Elder Scrolls II: Daggerfall",
        "genero": "RPG",
        "plataforma": ["PC"],
        "anoLancamento": 1996,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 8.5},
            {"site": "IGN", "avaliacao": 8.7}
        ],
        "quantidadeVendas": 75,
        "preco": 4.99
    },
    {
        "titulo": "The Elder Scrolls",
        "genero": "RPG",
        "plataforma": ["PC"],
        "anoLancamento": 1994,
        "criticas": [
            {"site": "Metacritic", "avaliacao": 7.8},
            {"site": "IGN", "avaliacao": 7.5}
        ],
        "quantidadeVendas": 30,
        "preco": 2.99
    }
]);

    
db.jogosVideoGame.find().pretty();
