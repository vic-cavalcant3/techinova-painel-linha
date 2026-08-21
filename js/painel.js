const TABELA = document.querySelector('#sensores tbody');

async function carregarSensores() {
  const resposta = await fetch('dados/sensores.json');
  const sensores = await resposta.json();
  sensores.forEach(desenharLinha);
}

// o sensor envia em fahrenheit, o painel precisa exibir em celsius
function converterTemperatura(leitura) {
  return (leitura - 32) * 5 / 9;
}

function desenharLinha(sensor) {
  const celsius = converterTemperatura(sensor.valor).toFixed(1);
  const tr = document.createElement('tr');
  tr.innerHTML =
    '<td>' + sensor.codigo + '</td>' +
    '<td>' + sensor.descricao + '</td>' +
    '<td>' + celsius + ' C</td>' +
    '<td>ok</td>';
  TABELA.appendChild(tr);
}

function marcarAtualizacao() {
  document.querySelector('#atualizado').textContent = new Date().toLocaleString('pt-BR');
}


// Alerta crítico de temperatura
function verificarAlertaCritico(temperatura) {
  const LIMITE_CRITICO = 90;
  if (temperatura > LIMITE_CRITICO) {
    document.getElementById("alerta").innerHTML = "ALERTA: Temperatura crítica!";
    document.getElementById("alerta").style.display = "block";
  }
}

verificarAlertaCritico(temp);


carregarSensores();
marcarAtualizacao();
