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
        mensagem = "Parabéns, sua hidratação está ótima!<br> Continue assim!";
    } else if (pontuacaoTotal >= 12) {
        mensagem = "Você está no caminho certo, mas pode melhorar sua hidratação.";
    } else {
        mensagem = "Cuidado! Você precisa se hidratar mais para evitar problemas de saúde.";
    }

    // Exibe o resultado no popup
    document.getElementById("popupResultado").innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Conclusão:</strong> ${mensagem}</p>
    `;

    // Exibe o modal e o overlay
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("overlay").classList.remove("hidden");

    // Botão para fechar o popup
    const fecharModalBtn = document.getElementById("fecharpopup");
    if (fecharModalBtn) {
        fecharModalBtn.addEventListener("click", function () {
            document.getElementById("popup").classList.add("hidden");
            document.getElementById("overlay").classList.add("hidden");
            document.getElementById("quizForm").reset(); // Reseta o formulário ao fechar o modal
        });
    }

});
