const sensoresIniciais = [
  {
    id: 1,
    nome: "Sensor Galpão A",
    tipo: "Temperatura",
    valor: 24.5,
    unidade: "°C",
    status: "normal",
  },
  {
    id: 2,
    nome: "Sensor Estufa 02",
    tipo: "Umidade",
    valor: 88.0,
    unidade: "%",
    status: "critico",
  },
  {
    id: 3,
    nome: "Sensor Compressor",
    tipo: "Pressão",
    valor: 6.2,
    unidade: "bar",
    status: "normal",
  },

  {
    id: 4,
    nome: "Sensor Câmara Fria",
    tipo: "Temperatura",
    valor: -2.1,
    unidade: "°C",
    status: "normal",
  },
  {
    id: 5,
    nome: "Sensor Almoxarifado",
    tipo: "Umidade",
    valor: 45.5,
    unidade: "%",
    status: "normal",
  },
  {
    id: 6,
    nome: "Sensor Caldeira",
    tipo: "Temperatura",
    valor: 98.4,
    unidade: "°C",
    status: "critico",
  },
];

const dashboard = document.getElementById("dashboard");

function renderizarDashboard() {
  dashboard.innerHTML = "";

  sensoresIniciais.forEach((sensor) => {
    dashboard.innerHTML += `
            <div class="card ${sensor.status}">
                <h3>${sensor.nome}</h3>
                <p><strong>Tipo:</strong> ${sensor.tipo}</p>
                <p><strong>Valor:</strong> ${sensor.valor} ${sensor.unidade}</p>
                <p><strong>Status:</strong> ${sensor.status}</p>
            </div>
        `;
  });
}

renderizarDashboard();

let status = false;

function alterarStatus() {
  const statusSignal = document.getElementById("status-signal");
  const statusText = document.getElementById("status-text");
  if (status == false) {
    statusSignal.classList.remove("offline");
    statusSignal.classList.add("online");
    statusText.classList.remove("offline");
    statusText.classList.add("online");
    statusText.textContent = "Online";
    status = true;
  } else {
    statusSignal.classList.remove("online");
    statusSignal.classList.add("offline");
    statusText.classList.remove("online");
    statusText.classList.add("offline");
    statusText.textContent = "Offline";
    status = false;
  }
}

function atualizarDados() {
  sensoresIniciais.forEach((sensor) => {
    switch (sensor.nome) {
      case "Sensor Galpão A":
        sensor.valor = Number((Math.random() * 15 + 20).toFixed(1)); 
        sensor.status = sensor.valor > 30 ? "critico" : "normal";
        break;

      case "Sensor Estufa 02":
        sensor.valor = Number((Math.random() * 20 + 75).toFixed(1)); 
        sensor.status = sensor.valor > 90 ? "critico" : "normal";
        break;

      case "Sensor Compressor":
        sensor.valor = Number((Math.random() * 2 + 5).toFixed(1)); 
        sensor.status =
          sensor.valor < 5.5 || sensor.valor > 6.8 ? "critico" : "normal";
        break;

      case "Sensor Câmara Fria":
        sensor.valor = Number((Math.random() * 8 - 5).toFixed(1)); 
        sensor.status =
          sensor.valor > 2 || sensor.valor < -3 ? "critico" : "normal";
        break;

      case "Sensor Almoxarifado":
        sensor.valor = Number((Math.random() * 20 + 40).toFixed(1)); 
        sensor.status =
          sensor.valor < 45 || sensor.valor > 55 ? "critico" : "normal";
        break;

      case "Sensor Caldeira":
        sensor.valor = Number((Math.random() * 25 + 85).toFixed(1)); 
        sensor.status = sensor.valor > 100 ? "critico" : "normal";
        break;
    }
  });
  renderizarDashboard();
}
