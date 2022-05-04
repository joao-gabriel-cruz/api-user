import sqlite3 from 'sqlite3'
const DBSOURCE = 'db.sqlite'
const SQL_USUARIO_CREATE = `
    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT
    )`
const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_USUARIO_CREATE, (err) => {
            if (err) {
                console.log('Não foi possivel criar a tabela', err.message)
            } else {
                console.log('Tabela usuario criada com sucesso.')
            }
        })
    }
})
export default database