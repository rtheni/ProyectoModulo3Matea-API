const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");

app.use(express.json());


app.get("/users/", userRoutes);

app.post("/users/", userRoutes);

app.put("/users/:user", userRoutes);

app.delete("/users/:user", userRoutes);

app.put("/users/addfavsong/:user&:song", userRoutes);


app.get("/songs/", songRoutes);

app.post("/songs/", songRoutes);

app.put("/songs/:song", songRoutes);

app.delete("/songs/:song", songRoutes);

app.listen(port, () => {
    console.log(`API Mateify initialized at http://localhost:${port}`);
    }   
);