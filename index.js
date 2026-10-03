const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json()); // Permite ler o corpo das requisições em formato JSON

// Ligação à base de dados PostgreSQL
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Shadowrun1!',
  database: 'postgres',
});

// 1. LISTAR TODOS OS PRODUTOS (GET)
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scraped_products ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. INSERIR NOVO PRODUTO (POST)
app.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body;
    const query = 'INSERT INTO scraped_products (name, price) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [name, price]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. APAGAR UM PRODUTO PELO ID (DELETE)
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM scraped_products WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json({ message: 'Produto removido com sucesso', deleted: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. ATUALIZAR PREÇO DE UM PRODUTO PELO ID (PUT)
app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const result = await pool.query(
      'UPDATE scraped_products SET price = $1 WHERE id = $2 RETURNING *',
      [price, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});