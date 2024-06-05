// Insere a coleção de usuários
db.usuarios.insertMany([
    {
        "nome": "João Silva",
        "idade": 30,
        "email": "joao.silva@example.com",
        "jogos": ["The Last of Us", "Grand Theft Auto V"],
        "acessoAntecipado": true,
        "nickname": "jsilva"
    },
    {
        "nome": "Maria Oliveira",
        "idade": 25,
        "email": "maria.oliveira@example.com",
        "jogos": ["Red Dead Redemption 2", "The Witcher 3: Wild Hunt"],
        "acessoAntecipado": false,
        "nickname": "mariaoliveira"
    },
    {
        "nome": "Carlos Souza",
        "idade": 35,
        "email": "carlos.souza@example.com",
        "jogos": ["Half-Life 2", "Portal 2", "The Elder Scrolls V: Skyrim"],
        "acessoAntecipado": true,
        "nickname": "csouza"
    },
    {
        "nome": "John Doe",
        "idade": 28,
        "email": "johndoe@example.com",
        "jogos": ["The Last of Us", "The Last of Us Part II"],
        "acessoAntecipado": false,
        "nickname": "johndoe"
    },
    {
        "nome": "Jane Doe",
        "idade": 26,
        "email": "janedoe@example.com",
        "jogos": ["The Last of Us", "The Last of Us Part II"],
        "acessoAntecipado": true,
        "nickname": "janedoe"
    },
    {
        "nome": "Gabriel Ribeiro",
        "idade": 22,
        "email": "gamer123@example.com",
        "jogos": ["Grand Theft Auto V", "Grand Theft Auto IV"],
        "acessoAntecipado": false,
        "nickname": "gamer123"
    },
    {
        "nome": "Paula Lima",
        "idade": 24,
        "email": "player456@example.com",
        "jogos": ["Red Dead Redemption 2"],
        "acessoAntecipado": true,
        "nickname": "player456"
    },
    {
        "nome": "Washington Luis",
        "idade": 29,
        "email": "witcherfan@example.com",
        "jogos": ["The Witcher 3: Wild Hunt"],
        "acessoAntecipado": false,
        "nickname": "witcherfan"
    },
    {
        "nome": "Renato Livio",
        "idade": 27,
        "email": "rpglover@example.com",
        "jogos": ["The Witcher 3: Wild Hunt"],
        "acessoAntecipado": true,
        "nickname": "rpglover"
    },
    {
        "nome": "Paulo Fagundes",
        "idade": 23,
        "email": "portalplayer@example.com",
        "jogos": ["Portal 2"],
        "acessoAntecipado": false,
        "nickname": "portalplayer"
    },
    {
        "nome": "Fernanda Souza",
        "idade": 32,
        "email": "halflifefan@example.com",
        "jogos": ["Half-Life 2"],
        "acessoAntecipado": true,
        "nickname": "halflifefan"
    },
    {
        "nome": "Cassie Silva",
        "idade": 31,
        "email": "tesfan@example.com",
        "jogos": ["The Elder Scrolls V: Skyrim"],
        "acessoAntecipado": false,
        "nickname": "tesfan"
    },
    {
        "nome": "Oliver Rivera",
        "idade": 33,
        "email": "morrowindlover@example.com",
        "jogos": ["The Elder Scrolls IV: Morrowind"],
        "acessoAntecipado": true,
        "nickname": "morrowindlover"
    }
]);

// Verifica se os dados foram inseridos corretamente
db.usuarios.find().pretty();
