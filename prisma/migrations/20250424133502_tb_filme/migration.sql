-- CreateTable
CREATE TABLE "Filme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "data_lancamento" DATETIME NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
