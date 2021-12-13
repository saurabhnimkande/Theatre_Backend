const express= require('express');

const { login,register } = require("./controllers/auth.controller");

const registerController= require("./controllers/register.controller");

const userController= require("./controllers/user.controller");

const movieController= require("./controllers/movie.controller");

const showController= require("./controllers/show.controller");

const theaterController= require("./controllers/theater.controller")

const screenController= require("./controllers/screen.controller");

const app = express();
app.use(express.json());

app.use("/register", registerController);
app.use("/login", login);
app.use("/users",userController);
app.use("/movies", movieController);
app.use("/shows",showController);
app.use("/theaters",theaterController);
app.use("/screens",screenController);

module.exports= app;