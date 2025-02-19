// Função genérica para validar campos
function validarCampo(campo, erro, min, max, mensagemErro) {
    const valor = campo.value.trim();
    if (valor === '' || valor < min || valor > max) {
        erro.textContent = mensagemErro;
        campo.classList.add('invalid');
        return false;
    } else {
        erro.textContent = '';
        campo.classList.remove('invalid');
        return true;
    }
}

// Seleciona os elementos do DOM
const nomeInput = document.getElementById('nome');
const nomeError = document.getElementById('nomeError');

const idadeInput = document.getElementById('idade');
const idadeError = document.getElementById('idadeError');

const pesoInput = document.getElementById('peso');
const pesoError = document.getElementById('pesoError');

const alturaInput = document.getElementById('altura');
const alturaError = document.getElementById('alturaError');

// Validação em tempo real
nomeInput.addEventListener('input', () => {
    validarCampo(nomeInput, nomeError, 2, 50, 'Por favor, insira um nome válido.');
});

idadeInput.addEventListener('input', () => {
    validarCampo(idadeInput, idadeError, 1, 120, 'Por favor, insira uma idade válida.');
});

pesoInput.addEventListener('input', () => {
    validarCampo(pesoInput, pesoError, 10, 300, 'Por favor, insira um peso válido.');
});

alturaInput.addEventListener('input', () => {
    validarCampo(alturaInput, alturaError, 0.5, 2.5, 'Por favor, insira uma altura válida (ex: 1.80)');
});

// Validação ao enviar o formulário
const dadosForm = document.getElementById('dados');

dadosForm.addEventListener('submit', (event) => {
    const nomeValido = validarCampo(nomeInput, nomeError, 2, 50, 'Por favor, insira um nome válido.');
    const idadeValida = validarCampo(idadeInput, idadeError, 1, 120, 'Por favor, insira uma idade válida.');
    const pesoValido = validarCampo(pesoInput, pesoError, 10, 300, 'Por favor, insira um peso válido.');
    const alturaValida = validarCampo(alturaInput, alturaError, 0.5, 2.5, 'Por favor, insira uma altura válida.');

    if (!nomeValido || !idadeValida || !pesoValido || !alturaValida) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos corretamente.');
    }
});