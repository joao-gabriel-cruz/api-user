import express from 'express';
import Produto from '../../models/produto';
import User from '../../models/user';
import userRepository from '../repositories/user-repository';

const userRouter = express.Router();

userRouter.get('/produto', (req, res) => {
  const produtos: Produto[] = [
    {
      id: 1,
      nome: 'Hambúrguer',
      descricao: 'Pão, bife de hambúrguer 90g, salada e batata.',
      preco: 8.5,
      categoria_id: 1,
    },
    {
      id: 2,
      nome: 'X-Búrguer',
      descricao:
        'Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.',
      preco: 10.5,
      categoria_id: 1,
    },
    {
      id: 3,
      nome: 'X-Bacon',
      descricao:
        'Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.',
      preco: 12.5,
      categoria_id: 1,
    },
    {
      id: 4,
      nome: 'X-Tudo',
      descricao:
        'Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.',
      preco: 14.5,
      categoria_id: 1,
    },
  ];
  res.json(produtos);
});

userRouter.post('/criar', (req, res) => {
  const user: User = req.body;
  userRepository.criar(user, (id) => {
    if (id) {
      res.status(201).send('criado com sucesso');
    } else {
      res.status(400).send();
    }
  });
});

userRouter.get('/user', (req, res) => {
  userRepository.lerTodos((user) => res.json(user));
});

export default userRouter;
