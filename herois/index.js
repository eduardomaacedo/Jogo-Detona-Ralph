function classificarNivel(pontuacao) {
    let nivel;
const pontuacao = "2500";
const nivelClassificado = classificarNivel(pontuacao);

    if (pontuacao <= 1000) {
        nivel = "Ferro";
    } else if (pontuacao >= 1001 && pontuacao <= 2000) {
        nivel = "Bronze";
    } else if (pontuacao >= 2001 && pontuacao <= 5000) {
        nivel = "Prata";
    } else if  (pontuacao >= 5001 && pontuacao <= 7000) {
        nivel = "Ouro";
    } else if  (pontuacao >= 7001 && pontuacao <= 8000) {
        nivel = "Platina";
    }  else if  (pontuacao >= 8001 && pontuacao <= 9000) {
        nivel = "Ascendente";
    } 

    return nivel;
}

// Exemplo de uso:
const pontuacao = 2500;
const nivelClassificado = classificarNivel(pontuacao);
console.log(`A pontuação ${pontuacao} corresponde ao nível: ${nivelClassificado}`);
