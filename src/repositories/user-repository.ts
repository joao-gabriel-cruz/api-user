import User from "../../models/user";
import database from "./database";


const userRepository = {

  criar :(user: User, callback:(id?:number) => void) => {

    const sql = 'INSERT INTO user (nome, email) VALUES (?, ?)'
    const params = [user.nome, user.email]

    database.run(sql, params, function(_err){
      callback(this?.lastID)
    }) 
  },
  lerTodos: (callback: (user: User[]) => void) => {
    const sql = 'SELECT * FROM user'
    const params: any[] = []
    database.all(sql, params, (_err, rows) => callback(rows))
},

}

export default userRepository