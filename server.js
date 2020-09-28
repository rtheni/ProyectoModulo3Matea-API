const express = require("express");
const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");
const app = express();
const port = 3000;



app.use(express.json());

app.get("/users/", userRoutes);

app.get("/songs/", songRoutes);

app.listen(port, () => {
    console.log(`API Mateify iniciada en http://localhost:${port}`);
    }   
);