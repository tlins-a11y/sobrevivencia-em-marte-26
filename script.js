let oxigenio = Number(prompt ("Insira a quantidade de oxigênio restante (em litros):"));
let pessoas = Number(prompt("Insira a quantidade de pessoas em marte:"));
const consumoDiario = 15; // litros por pessoa.

// consumo total é baseado na quantidade de pessoas multiplicado pelo consumo diário por pessoa.
let consumoTotalBase = pessoas * consumoDiario;
let diasRestantes = oxigenio / consumoTotalBase;

alert(`Relatório de Marte: Restam ${diasRestantes.toFixed(0)} dias de oxigênio!!`);

alert ("oii");
