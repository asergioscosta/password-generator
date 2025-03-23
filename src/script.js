document.addEventListener("DOMContentLoaded", () => {
    const lblSenhaSorteada = document.getElementById("lbl-senha-sorteada");
    const txtTamanhoSenha = document.getElementById("input-tamanho-senha");
    const btnGerar = document.getElementById("btn-gerar");
    const btnCopiar = document.getElementById("btn-copiar");

    function gerarSenha(tamanho) {
        if (tamanho < 6 || tamanho > 20) {
            alert("O tamanho da senha deve estar entre 6 e 20 caracteres.");
            return null;
        }
        const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let senha = "";

        for (let i = 0; i < tamanho; i++) {
            senha += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        return senha;
    }

    btnGerar.addEventListener("click", () => {
        const tamanho = parseInt(txtTamanhoSenha.value, 10);
        const senhaSorteada = gerarSenha(tamanho);
        if (senhaSorteada) {
            lblSenhaSorteada.innerText = senhaSorteada;
        }
    });

    btnCopiar.addEventListener("click", () => {
        if (lblSenhaSorteada.innerText !== "") {
            navigator.clipboard.writeText(lblSenhaSorteada.innerText);
            alert("Senha copiada com sucesso!");
        } else {
            alert("Não há senha para ser copiada!");
        }
    });
});
