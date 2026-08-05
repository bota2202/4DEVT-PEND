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
  {
    id: 7,
    nome: "Sensor Tanque Principal",
    tipo: "Pressão",
    valor: 5.8,
    unidade: "bar",
    status: "normal",
  },
  {
    id: 8,
    nome: "Sensor Laboratório",
    tipo: "Temperatura",
    valor: 22.7,
    unidade: "°C",
    status: "normal",
  },
  {
    id: 9,
    nome: "Sensor Estufa 03",
    tipo: "Umidade",
    valor: 91.4,
    unidade: "%",
    status: "critico",
  },
  {
    id: 10,
    nome: "Sensor Reservatório",
    tipo: "Pressão",
    valor: 7.3,
    unidade: "bar",
    status: "normal",
  },
  {
    id: 11,
    nome: "Sensor Câmara Fria 02",
    tipo: "Temperatura",
    valor: -4.6,
    unidade: "°C",
    status: "critico",
  },
  {
    id: 12,
    nome: "Sensor Linha de Produção",
    tipo: "Temperatura",
    valor: 36.9,
    unidade: "°C",
    status: "normal",
  },
  {
    id: 13,
    nome: "Sensor Depósito",
    tipo: "Umidade",
    valor: 58.2,
    unidade: "%",
    status: "normal",
  },
  {
    id: 14,
    nome: "Sensor Compressor 02",
    tipo: "Pressão",
    valor: 8.5,
    unidade: "bar",
    status: "critico",
  },
  {
    id: 15,
    nome: "Sensor Torre de Resfriamento",
    tipo: "Temperatura",
    valor: 31.8,
    unidade: "°C",
    status: "normal",
  },
  {
    id: 16,
    nome: "Sensor Estufa 04",
    tipo: "Umidade",
    valor: 76.3,
    unidade: "%",
    status: "normal",
  },
  {
    id: 17,
    nome: "Sensor Tubulação Norte",
    tipo: "Pressão",
    valor: 4.9,
    unidade: "bar",
    status: "normal",
  },
  {
    id: 18,
    nome: "Sensor Caldeira 02",
    tipo: "Temperatura",
    valor: 105.7,
    unidade: "°C",
    status: "critico",
  },
  {
    id: 19,
    nome: "Sensor Galpão B",
    tipo: "Umidade",
    valor: 49.8,
    unidade: "%",
    status: "normal",
  },
  {
    id: 20,
    nome: "Sensor Linha de Vapor",
    tipo: "Pressão",
    valor: 9.1,
    unidade: "bar",
    status: "critico",
  },
];

const dashboard = document.getElementById("dashboard");

function renderizarDashboard() {
  dashboard.innerHTML = "";

  sensoresIniciais.forEach((sensor) => {
    dashboard.innerHTML += `
            <div class="card ${sensor.status}">
                <h3 class="arimo">${sensor.nome}</h3>
                <p class="arimo"><strong>Tipo:</strong> ${sensor.tipo}</p>
                <p class="arimo valor-destaque">${sensor.valor} ${sensor.unidade}</p>
                <span class="badge ${sensor.status} arimo">${sensor.status}</span>
            </div>
        `;
  });
}

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
    renderizarDashboard();
  } else {
    statusSignal.classList.remove("online");
    statusSignal.classList.add("offline");
    statusText.classList.remove("online");
    statusText.classList.add("offline");
    statusText.textContent = "Offline";
    status = false;
    dashboard.innerHTML = "";
  }
}

function atualizarDados() {
  if (status === false) {
    return;
  }
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