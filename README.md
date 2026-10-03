# 🛒 Product Management REST API

API REST desenvolvida em Node.js e Express integrada com banco de dados relacional PostgreSQL para gerenciamento completo (CRUD) de produtos.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor
- **Express**: Framework web minimalista para construção das rotas da API
- **PostgreSQL**: Banco de dados relacional para persistência dos dados
- **node-postgres (pg)**: Driver oficial do PostgreSQL com Connection Pool
- **Postman**: Validação, requisições HTTP e testes de endpoints
- **DBeaver**: Administração e inspeção visual do banco de dados

## 📌 Rotas da API (Endpoints)

| Método | Rota | Descrição | Status de Sucesso |
|---|---|---|---|
| `GET` | `/products` | Lista todos os produtos cadastrados | `200 OK` |
| `POST` | `/products` | Insere um novo produto | `201 Created` |
| `PUT` | `/products/:id` | Atualiza o preço de um produto existente | `200 OK` |
| `DELETE` | `/products/:id` | Remove um produto do banco pelo ID | `200 OK` |

### Exemplo de Payload (POST):
```json
{
  "name": "Headset Gamer 7.1",
  "price": 279.90
}