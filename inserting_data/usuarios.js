// Insere a coleção de usuários
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

// Verifica se os dados foram inseridos corretamente
db.usuarios.find().pretty();

// Verifica se os dados foram inseridos corretamente
db.usuarios.find().pretty();
