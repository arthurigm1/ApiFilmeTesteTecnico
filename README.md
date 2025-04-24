
# 🎬 API de Gerenciamento de Filmes

API RESTful desenvolvida como parte de um teste técnico para vaga de Estágio Backend. O sistema permite cadastrar, editar, listar, buscar e deletar filmes, utilizando arquitetura MSC (Model-Service-Controller), banco de dados SQLite, e Prisma ORM.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **SQLite**
- **Zod** (validação de dados)


---

## 🛠 Funcionalidades

- ✅ Criar um novo filme
- ✅ Listar todos os filmes
- ✅ Buscar filme por **ID**
- ✅ Buscar filme por **título** (ou parte dele)
- ✅ Atualizar filme existente
- ✅ Deletar filme por ID

---
## Endpoints da API

| Método | Endpoint                  | Descrição                          |
|--------|---------------------------|-----------------------------------|
| POST   | `/filme`                  | Cria um novo filme                |
| GET    | `/filme`                  | Lista todos os filmes             |
| GET    | `/filme/:id`              | Busca filme por ID                |
| GET    | `/filme/titulo/:titulo`   | Busca filme por título            |
| PUT    | `/filme/:id`              | Atualiza um filme                 |
| DELETE | `/filme/:id`              | Remove um filme                   |

### 📌 Criar Filme
```http
POST /filme
```
#### Body:
```json
{
  "titulo": "Matrix",
  "genero": "Ação",
  "duracao": 136,
  "data_lancamento": "1999-03-31"
}
```

### 📌 Listar todos os filmes
```http
GET /filme
```
#### Resposta:
```json
[
  {
    "id": "uuid",
    "titulo": "Matrix",
    "genero": "Ação",
    "duracao": 136,
    "data_lancamento": "1999-03-31T00:00:00.000Z",
    "criado_em": "2025-04-22T00:00:00.000Z"
  }
]
```

### 📌 Buscar filme por ID
```http
GET /filme/:id
```
#### Exemplo:
```http
GET /filme/2b147c42-12e3-49b9-9b4e-123456abcdef
```

### 📌 Buscar filme por título
```http
GET /filme/titulo/:titulo
```
#### Exemplo:
```http
GET /filme/titulo/matrix
```

### 📌 Atualizar filme por ID
```http
PUT /filme/:id
```
#### Body:
```json
{
  "titulo": "Matrix Reloaded",
  "genero": "Ação",
  "duracao": 138,
  "data_lancamento": "2003-05-15"
}
```

### 📌 Deletar filme por ID
```http
DELETE /filme/:id
```
#### Exemplo:
```http
DELETE /filme/2b147c42-12e3-49b9-9b4e-123456abcdef
```

---

## 📂 Organização do Projeto

```
src/
├── controller/
│   └── filmeController.ts
├── service/
│   └── filmeService.ts
├── models/
│   └── filmeModel.ts
├── schema/
│   └── filme.schema.ts
├── routes/
│   └── routes.ts
├── database/
│   └── prismaClient.ts
└── server.ts
```

---

## 👤 Autor

**Arthur Martins**  
📧 arthurigm1@gmail.com
