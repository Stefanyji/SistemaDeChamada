var dadosLista = [];
function salvarUser() {

    let nomeDoUser = document.getElementById("nomeUser").value;

    if(nomeDoUser){
    dadosLista.push(nomeDoUser);
    formularioExibe();
    document.getElementById("nomeUser").value = "";
    } else {
        alert("Usuário favor preencher o campo nome");
    }
}

function formularioExibe() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome do Aluno</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
 
function acessar() {
    let loginDoEmail = document.getElementById("loginEmail").value;
    let loginDaSenha = document.getElementById("loginSenha").value;
 
    if(!loginDoEmail || !loginDaSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "login";
    }
}
function excluir(i) {
    dadosLista.splice((i -1), 1);
    document.getElementById("tabela").deleteRow(i);
}
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i -1)];
    dadosLista.splice(dadosLista[(i -1)], 1);
}
