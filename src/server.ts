import express from "express";
import router from "./routes/routes";

const app = express();
const port = 3333;
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
