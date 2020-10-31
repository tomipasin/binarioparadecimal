function inputV(){
    binario = Number(document.getElementById("num").value);
    return binario
};


function bin2dec(bin){

    return parseInt(bin,2).toString(10)
};

function abrir(){
    let bina = inputV();
    document.getElementById('inicial').innerHTML += `<p class="p-3 mb-2 bg-warning text-dark"> O número que você escolheu é <strong>${bina}</strong></p></br>`;
    document.getElementById('inicial').innerHTML += `<p class="p-3 mb-2 bg-success text-white">O número convertido é <strong>${bin2dec(bina)}</strong></p></br>`;
    document.getElementById('final').innerHTML += ` <h3>Como converter número binário em decimal?</h3></br>`;
    document.getElementById('final').innerHTML += `<p>Essa é uma conversão simples que consiste na divisão de diversos números. Para converter números binários, você deverá identificar as posições dos algarismos. No caso de um número inteiro, as posições são definidas da direita para esquerda, considerando que a primeira posição é a zero. Sendo assim, temos o seguinte número de exemplo: 110101.</p></br>`
    document.getElementById('imagem').innerHTML += `<img src="binário-em-decimal.gif" class="img-fluid rounded mx-auto d-block"/>    </br>`;
    document.getElementById('final').innerHTML += `<p>Resolução do número de acordo com as posições: binario para decimal
    
    Para converter o número binário, devemos multiplicar os algarismos do número pela base que é 2 elevada a posição respectiva do número. Sendo assim, multiplicaremos o número 1 por 2 elevado a 0. Faça isso sucessivamente até obter vários números que deverão ser somados para a conversão completa de binário em decimal. Em nosso exemplo, o resultado final da conversão é 53.</p></br>`;
    };






