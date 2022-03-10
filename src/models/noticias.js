const db = require("./db");

class Noticia{
    constructor(dbConnection){
      this.dbConnection = dbConnection;
    }
}

async create (noticia){
   const {
       titulo, subtitulo, imagem, linkDoArtigo
   } = noticia;
   const sql =`
   INSERT INTO noticia(titulo, subtitulo, imagem, linkDoArtigo)
   VALUES(?,?,?,?)`

   const [result] = await this.dbConnection.execute(
       sql, [titulo, subtitulo, imagem, linkDoArtigo]
   )
}

async search(query) {
}
