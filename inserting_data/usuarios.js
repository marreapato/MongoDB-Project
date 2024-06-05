// Insere a coleção de usuários
db.usuarios.insertMany([
    {
        "nome": "João Silva",
        "idade": 30,
        "email": "joao.silva@example.com",
        "endereco": "Rua A, 123, São Paulo, SP",
        "jogos": ["The Last of Us", "Grand Theft Auto V"],
        "acessoAntecipado": true,
        "nickname": "JSilva"
    },
    {
        "nome": "Maria Oliveira",
        "idade": 25,
        "email": "maria.oliveira@example.com",
        "endereco": "Rua B, 456, Rio de Janeiro, RJ",
        "jogos": ["Red Dead Redemption 2", "The Witcher 3: Wild Hunt"],
        "acessoAntecipado": false,
        "nickname": "MariaOliveira"
    },
    {
        "nome": "Carlos Souza",
        "idade": 35,
        "email": "carlos.souza@example.com",
        "endereco": "Rua C, 789, Belo Horizonte, MG",
        "jogos": ["Half-Life 2", "Portal 2", "The Elder Scrolls V: Skyrim"],
        "acessoAntecipado": true,
        "nickname": "CSouza"
    },
    {
        "nome": "John Doe",
        "idade": 28,
        "email": "johndoe@example.com",
        "endereco": "Rua D, 321, São Paulo, SP",
        "jogos": ["The Last of Us", "The Last of Us Part II"],
        "acessoAntecipado": false,
        "nickname": "johndoe"
    },
    {
        "nome": "Jane Doe",
        "idade": 26,
        "email": "janedoe@example.com",
        "endereco": "Rua E, 654, Rio de Janeiro, RJ",
        "jogos": ["The Last of Us", "The Last of Us Part II"],
        "acessoAntecipado": true,
        "nickname": "janedoe"
    },
    {
        "nome": "Gamer 123",
        "idade": 22,
        "email": "gamer123@example.com",
        "endereco": "Rua F, 987, Belo Horizonte, MG",
        "jogos": ["Grand Theft Auto V", "Grand Theft Auto IV"],
        "acessoAntecipado": false,
        "nickname": "gamer123"
    },
    {
        "nome": "Player 456",
        "idade": 24,
        "email": "player456@example.com",
        "endereco": "Rua G, 159, São Paulo, SP",
        "jogos": ["Red Dead Redemption 2"],
        "acessoAntecipado": true,
        "nickname": "player456"
    },
    {
        "nome": "Witcher Fan",
        "idade": 29,
        "email": "witcherfan@example.com",
        "endereco": "Rua H, 753, Rio de Janeiro, RJ",
        "jogos": ["The Witcher 3: Wild Hunt"],
        "acessoAntecipado": false,
        "nickname": "witcherfan"
    },
    {
        "nome": "RPG Lover",
        "idade": 27,
        "email": "rpglover@example.com",
        "endereco": "Rua I, 246, Belo Horizonte, MG",
        "jogos": ["The Witcher 3: Wild Hunt"],
        "acessoAntecipado": true,
        "nickname": "rpglover"
    },
    {
        "nome": "Portal Player",
        "idade": 23,
        "email": "portalplayer@example.com",
        "endereco": "Rua J, 135, São Paulo, SP",
        "jogos": ["Portal 2"],
        "acessoAntecipado": false,
        "nickname": "portalplayer"
    },
    {
        "nome": "Half-Life Fan",
        "idade": 32,
        "email": "halflifefan@example.com",
        "endereco": "Rua K, 864, Rio de Janeiro, RJ",
        "jogos": ["Half-Life 2"],
        "acessoAntecipado": true,
        "nickname": "halflifefan"
    },
    {
        "nome": "TES Fan",
        "idade": 31,
        "email": "tesfan@example.com",
        "endereco": "Rua L, 975, Belo Horizonte, MG",
        "jogos": ["The Elder Scrolls V: Skyrim"],
        "acessoAntecipado": false,
        "nickname": "tesfan"
    },
    {
        "nome": "Morrowind Lover",
        "idade": 33,
        "email": "morrowindlover@example.com",
        "endereco": "Rua M, 468, São Paulo, SP",
        "jogos": ["The Elder Scrolls IV: Morrowind"],
        "acessoAntecipado": true,
        "nickname": "morrowindlover"
    }
]);

// Verifica se os dados foram inseridos corretamente
db.usuarios.find().pretty();
