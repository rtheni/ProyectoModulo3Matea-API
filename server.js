const express = require("express");
const app = express();
const port = process.env.PORT;

const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");

app.use(express.json());


app.get("/users/", userRoutes);

app.post("/users/add", userRoutes);

app.put("/users/modify/:user", userRoutes);

app.delete("/users/delete/:user", userRoutes);

app.put("/users/favsong/add/:user&:song", userRoutes);

app.delete("/users/favsong/delete/:user&:song", userRoutes);


app.get("/songs/", songRoutes);

app.post("/songs/add", songRoutes);

app.put("/songs/modify/:song", songRoutes);

app.delete("/songs/delete/:song", songRoutes);

app.listen(port, () => {
    console.log(`API Mateify initialized at ${port}`);
    }   
);