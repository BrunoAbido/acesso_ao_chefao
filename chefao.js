const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

let itemNecessario1 = "machado"

let itemNecessario2 = "comida"

let itemNecessario3 = "sapato"

function podeEnfrentar(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    // Verifica se o jogador coletou todos os itens necessários
    if (itensColetados.includes(itemNecessario1) &&
        itensColetados.includes(itemNecessario2) &&
        itensColetados.includes(itemNecessario3)) {
        return "PODE ENFRENTAR";
    } else {
        return "NAO PODE ENFRENTAR";
    }
}

console.log(
    podeEnfrentar(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3)
)