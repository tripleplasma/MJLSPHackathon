const express = require('express');
const { Sequelize, Op } = require('sequelize');

const app = express();

// Connect to MySQL database from the server
const sequelize = new Sequelize('mydatabase', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  password: 'keeblis.123'
});

// Define a model
const User = sequelize.define('User', {
  name: Sequelize.STRING,
});

// Sync the model with the database
sequelize.sync();

// Middleware
app.use(express.json());

// Endpoints
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  res.json(user);
});

app.post('/login', async (req, res) => {
    const { name } = req.body;
    const user = await User.create({ name });
    res.json(user);
});

app.post('/del', async (req, res) => {
    const { id } = req.body;
    const num = await User.destroy({
        where:{
            id:id
        },
    });
    res.json(num)
});
// Protection middleware
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (token !== 'secret-token') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});