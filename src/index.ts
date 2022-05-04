import cors from 'cors';
import express from 'express';
import userRouter from './routers/user-router';

// Porta do servidor
const PORT = process.env.PORT || 3001;
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = express();
// Endpoint raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo!');
});
// Cors
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

// JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api', userRouter);

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
  res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
