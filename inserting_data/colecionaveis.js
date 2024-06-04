
db.produtosColecionaveis.insertMany([
    {
        "titulo": "Ellie Figure",
        "marca": "Naughty Dog",
        "tipoColecionavel": "Action Figure",
        "anoLancamento": 2020,
        "edicao": "Limited Edition",
        "disponibilidade": true,
        "preco": 59.99
    },
    {
        "titulo": "Joel Figure",
        "marca": "Naughty Dog",
        "tipoColecionavel": "Action Figure",
        "anoLancamento": 2013,
        "edicao": "Standard Edition",
        "disponibilidade": true,
        "preco": 49.99
    },
    {
        "titulo": "GTAV Poster",
        "marca": "Rockstar Games",
        "tipoColecionavel": "Poster",
        "anoLancamento": 2013,
        "edicao": "Standard Edition",
        "disponibilidade": true,
        "preco": 14.99
    },
    {
        "titulo": "Arthur Morgan Figure",
        "marca": "Rockstar Games",
        "tipoColecionavel": "Action Figure",
        "anoLancamento": 2018,
        "edicao": "Limited Edition",
        "disponibilidade": true,
        "preco": 79.99
    },
    {
        "titulo": "Geralt Statue",
        "marca": "CD Projekt Red",
        "tipoColecionavel": "Statue",
        "anoLancamento": 2015,
        "edicao": "Collector's Edition",
        "disponibilidade": true,
        "preco": 89.99
    },
    {
        "titulo": "The Witcher Poster",
        "marca": "CD Projekt Red",
        "tipoColecionavel": "Poster",
        "anoLancamento": 2015,
        "edicao": "Standard Edition",
        "disponibilidade": true,
        "preco": 12.99
    },
    {
        "titulo": "Portal Gun Replica",
        "marca": "Valve Corporation",
        "tipoColecionavel": "Replica",
        "anoLancamento": 2011,
        "edicao": "Collector's Edition",
        "avaliacoes": 4.8,
        "preco": 99.99
    },
    {
        "titulo": "Dragonborn Statue",
        "marca": "Bethesda",
        "tipoColecionavel": "Statue",
        "anoLancamento": 2011,
        "edicao": "Collector's Edition",
        "disponibilidade": true,
        "preco": 89.99
    },
    {
        "titulo": "Neravarine Action Figure",
        "marca": "Bethesda",
        "tipoColecionavel": "Action Figure",
        "anoLancamento": 2002,
        "edicao": "Limited Edition",
        "disponibilidade": false,
        "preco": 69.99
    },
    {
        "titulo": "Daedric Sword Replica",
        "marca": "Bethesda",
        "tipoColecionavel": "Replica",
        "anoLancamento": 2011,
        "edicao": "Limited Edition",
        "disponibilidade": true,
        "preco": 129.99
    }
]);
    
db.produtosColecionaveis.find().pretty();
