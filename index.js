function validarCartao(numeroCartao) {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/; // Começa com 4
    const masterCardRegex = /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[0-1][0-9]{12}|720[0-9]{12}))$/; // 51-55 ou 2221-2720
    const eloRegex = /^(4011|4312|4389|5041|5066|5090|6277|6362|6504|6505|6506|6550)[0-9]*$/; // Intervalos Elo
    const amexRegex = /^3[47][0-9]{13}$/; // Começa com 34 ou 37
    const discoverRegex = /^(6011[0-9]{12}|65[0-9]{14}|64[4-9][0-9]{13})$/; // 6011, 65 ou 644-649
    const hipercardRegex = /^6062[0-9]{12}$/; // Começa com 6062

    if (visaRegex.test(numeroCartao)) {
        return "Visa";
    } else if (masterCardRegex.test(numeroCartao)) {
        return "MasterCard";
    } else if (eloRegex.test(numeroCartao)) {
        return "Elo";
    } else if (amexRegex.test(numeroCartao)) {
        return "American Express";
    } else if (discoverRegex.test(numeroCartao)) {
        return "Discover";
    } else if (hipercardRegex.test(numeroCartao)) {
        return "Hipercard";
    } else {
        return "Bandeira desconhecida ou número inválido";
    }
}

// Exemplo de uso:
const numeroCartao = "4111111111111111"; // Substitua pelo número do cartão para teste
console.log(validarCartao(numeroCartao));