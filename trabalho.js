function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade,porte) {
    if (idade == 1 && porte == 'M') {
        return true
    } else
        return false
}

function calcularConsumoDeRacao(nome, idade, peso) {
    return (peso * 300)
}

function decidirTipoDeAtividadePorPorte(porte) {
    if (porte === 'pequeno') {
        return 'brincar dentro de casa'
    } else if (porte === 'médio') {
        return 'dar uma volta na quadra'
    } else if (porte === 'grande') {
        return 'dar 5 voltas na quadra'
    } else
        return "Digite apenas uma das opções: 'pequeno', 'médio' ou 'grande'"
}

async function buscarDadoAsync() {
    return 'Pipoca'
} 

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}