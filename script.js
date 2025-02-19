document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos de informações pessoais
    let nome = document.getElementById("nome").value.trim();
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome || !idade || !peso || !altura) {
        alert("Por favor, preencha todas as informações pessoais antes de enviar!");
        return;
    }

    // Obtém a pontuação das respostas do quiz
    let pontuacaoTotal = 0;
    let perguntas = ["agua", "suco", "fruta", "dores", "saude"];
    let respostasSelecionadas = 0;

    perguntas.forEach((pergunta) => {
        let respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (respostaSelecionada) {
            pontuacaoTotal += parseInt(respostaSelecionada.value);
            respostasSelecionadas++;
        }
    });

    // Verifica se todas as perguntas foram respondidas
    if (respostasSelecionadas !== perguntas.length) {
        alert("Por favor, responda todas as perguntas antes de enviar!");
        return;
    }

    // Gera um feedback com base na pontuação total
    let mensagem = "";
    if (pontuacaoTotal >= 18) {
        mensagem = "Parabéns, sua hidratação está ótima! Continue assim!";
    } else if (pontuacaoTotal >= 12) {
        mensagem = "Você está no caminho certo, mas pode melhorar sua hidratação.";
    } else {
        mensagem = "Cuidado! Você precisa se hidratar mais para evitar problemas de saúde.";
    }

    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML = `
        <h3>Resultado do Quiz Hidrata Aí</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Conclusão:</strong> ${mensagem}</p>
    `;

    // Limpa o formulário após exibir o resultado
    document.getElementById("quizForm").reset();
});
