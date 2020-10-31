//Criamos uma função para o input do valor (inputV).
//Esta função vai criar uma variável (binario) e atribuir a ela o valor do id num em html
//convertido para número.
function inputV(){
    binario = Number(document.getElementById("num").value);
    return binario
};
//criamos outra função para convertero valor binário em decimal.
//a função bin2dec tem como parâmetro bin
function bin2dec(bin){
    //a funço vai retornar o resultado de parseInt do bin na base 2 transformando em string na base 10
    //basicamente o js converte binários em decimasi dessa forma.
    return parseInt(bin,2).toString(10)
};
//o botão de converter no html chama a função abrir() que executa a função inputV() e depois trabalha o DOM com 
//os dados determinados abaixo.
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






