import express from 'express'
import User from '../../models/user'
import userRepository from '../repositories/user-repository'

const userRouter = express.Router()

userRouter.post('/criar', (req, res) => {
   const user: User = req.body
   userRepository.criar(user, (id) =>{
     if(id){
       res.status(201).send('criado com sucesso')
     }else{
       res.status(400).send()
     }
   } )
})

userRouter.get('/user', (req, res) => {
    userRepository.lerTodos((user) => res.json(user))
 
})

export default userRouter