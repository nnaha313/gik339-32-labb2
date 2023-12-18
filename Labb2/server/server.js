// Uppgift 2: Skapa webbserver och första route

const express = require("express"); //importerar modueln express
const server = express(); //webbservern

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
  });

//webbservern startas och port 3000 används.
server.listen(3000, () => {
  console.log("Servern körs på port 3000");
});

//En get-route med endpoint "/users" och en callbackfunktion som tar parametrarna req och res
server.get("/users", (req, res) => {
  //Uppgift 3:
  const db = new sqlite3.Database("./gik339-labb2.db"); //skapar databaskoppling
  const sql = `SELECT * FROM users`; //frågan som skickas in läggs i variabeln sql
  
  //metoden för att köra SQL-frågan.
  db.all(sql, (err, rows) => {
    if (err) {
      //Hanterar fel:
      console.log(err);
      res.status(500).send(err); //500-599 server
    } else {
      //skickar tillbaka hämtade rader
      // console.log(rows);
      res.send(rows);
    }
  });
});

//Uppgift 3: Använd sqlite3 för att kommunicera med databas

const sqlite3 = require("sqlite3").verbose(); //skapar ett databasobjekt

//Uppgift 4: Testa backend

//Gå till http://localhost:3000/users i webbläsaren

//Uppgift 5: Förberedelser, frontend
// ---> mappen client
