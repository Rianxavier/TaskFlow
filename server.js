require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Conectei a base de dados");
    app.emit("pronto");
  })
  .catch((e) => console.error(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  express.static(path.resolve(__dirname, "frontend"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);
const sessionOptions = session({
  secret: "dasdasdasdkkldasd+ldalskdldk qwf qwer qwee rqksjdkasdkaj aj()",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
// Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

const port = process.env.PORT || 3000;

app.on("pronto", () => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log(`Servidor executando na porta ${port}`);
  });
});
