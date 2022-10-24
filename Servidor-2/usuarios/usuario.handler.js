const listaUsuarios = [];

async function adicionarUsuario(dados = { CPF: "", Nome: "", Senha: "", Login: "" }) {
    if (!dados.CPF) {
        return {
            error: "0001",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["CPF"]
        }
    }
    if (!dados.Nome) {
        return {
            error: "0002",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["Nome"]
        }
    }
    if (!dados.Senha) {
        return {
            error: "0003",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["Senha"]
        }
    }
    if (!dados.Login) {
        return {
            error: "0003",
            message: "É necessário preencher os parametros da requisição!",
            camposNecessarios: ["Login"]
        }
    }
    const user = listaUsuarios.push(dados);
    return dados;
}

async function login(usuario) {
    console.log("chegou", usuario)
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].Login == usuario.Login) {
            if (listaUsuarios[i].Senha == usuario.Senha) {
                return "Login Efetuado com Sucesso!"
            }
        }
    }
    return "Login e/ou Senha Incorreto"
}

async function mostrarUsuario() {
    return listaUsuarios;
}

module.exports = {
    adicionarUsuario,
    mostrarUsuario,
    login
}