document.getElementById("questionForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        enunciado: document.getElementById("enunciado").value,
        alternativa_a: document.getElementById("alternativa_a").value,
        alternativa_b: document.getElementById("alternativa_b").value,
        alternativa_c: document.getElementById("alternativa_c").value,
        alternativa_d: document.getElementById("alternativa_d").value,
        alternativa_e: document.getElementById("alternativa_e").value,
        gabarito: document.getElementById("gabarito").value,
        resolucao: document.getElementById("resolucao").value,
        elaborador: document.getElementById("elaborador").value,
        nivel_dificuldade: document.getElementById("nivel_dificuldade").value,
        conhecimentos: document.getElementById("conhecimentos").value,
        referencia_bibliografica: document.getElementById("referencia").value,
        tema: document.getElementById("tema").value,
        status: "Nunca usada",
        validada: 0
    };

    try {
        const response = await fetch("http://localhost:3000/api/questoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Questão cadastrada com sucesso!");
            document.getElementById("questionForm").reset();
        } else {
            alert("Erro ao cadastrar a questão.");
        }
    } catch (error) {
        console.error("Erro ao enviar a requisição", error);
    }
});
