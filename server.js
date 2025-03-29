const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota para cadastrar uma nova questão
app.post("/api/questoes", async (req, res) => {
    try {
        const questao = await prisma.questao.create({
            data: req.body
        });
        res.status(201).json(questao);
    } catch (error) {
        console.error("Erro ao cadastrar questão:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
