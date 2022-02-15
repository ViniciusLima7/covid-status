(async () => {
  //   document.getElementById("filtro").addEventListener("click", handlerFilter);

  //RETORNAR TODAS AS PRMOMISSES , INDEPENDENTE SE FORAM RESOLVIDAS OU NÃO
  let datas = await Promise.allSettled([
    axios.get("http://127.0.0.1:5500/assets/data/simultaneoData.json"),
    // console.log(datas),
  ]);

  if (datas[0].status === "fulfilled") {
    const data = datas[0].value.data;
    // carregargLinhasSimultaneo(data);
    carregargLinhasSimultaneoNuinvest(data);
    carregargLinhasSimultaneoRico(data);
    carregargLinhasSimultaneoVitreo(data);
    carregargLinhasSimultaneoGeral(data);
    carregargLinhasSimultaneoGenial(data);
    carregargLinhasSimultaneoWarren(data);
    carregargLinhasSimultaneoToro(data);
  }
})();

function carregargLinhasSimultaneo(json) {
  let dates = _.map(json, "data");
  let nuinvest = _.map(json, "nuinvest");
  let rico = _.map(json, "rico");
  let vitreo = _.map(json, "vitreo");
  let geral = _.map(json, "geral");
  let genial = _.map(json, "genial");
  let warren = _.map(json, "warren");
  let toro = _.map(json, "toro");

  linhas = new Chart(document.getElementById("linhasSimultaneo"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `NuInvest`,
          //   label: `Número de `,
          data: nuinvest,
          backgroundColor: ["rgb(76, 6, 119)"],
          borderColor: ["rgb(76, 6, 119)"],
          borderWidth: 1,
        },
        {
          label: `Rico`,
          //   label: `Número de `,
          data: rico,
          backgroundColor: ["rgb(255, 82, 0)"],
          borderColor: ["rgb(255, 82, 0)"],
          borderWidth: 1,
        },
        {
          label: `Vitreo`,
          //   label: `Número de `,
          data: vitreo,
          backgroundColor: ["rgb(0, 66, 163)"],
          borderColor: ["rgb(0, 66, 163)"],
          borderWidth: 1,
        },
        {
          label: `Geral`,
          //   label: `Número de `,
          data: geral,
          backgroundColor: ["rgb(3, 102, 54)"],
          borderColor: ["rgb(3, 102, 54)"],
          borderWidth: 1,
        },
        {
          label: `Genial`,
          //   label: `Número de `,
          data: genial,
          backgroundColor: ["rgb(51, 135, 215)"],
          borderColor: ["rgb(51, 135, 215)"],
          borderWidth: 1,
        },
        {
          label: `Warren`,
          //   label: `Número de `,
          data: warren,
          backgroundColor: ["rgb(238, 61, 108)"],
          borderColor: ["rgb(238, 61, 108)"],
          borderWidth: 1,
        },
        {
          label: `Toro`,
          //   label: `Número de `,
          data: toro,
          backgroundColor: ["rgb(97, 49, 180)"],
          borderColor: ["rgb(97, 49, 180)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Todas Corretoras ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
function carregargLinhasSimultaneoNuinvest(json) {
  let nuinvest = _.map(json, "nuinvest");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("nuinvest"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `NuInvest`,
          //   label: `Número de `,
          data: nuinvest,
          backgroundColor: ["rgb(76, 6, 119)"],
          borderColor: ["rgb(76, 6, 119)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Nuinvest ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
function carregargLinhasSimultaneoToro(json) {
  let toro = _.map(json, "toro");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("toro"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Toro`,
          //   label: `Número de `,
          data: toro,
          backgroundColor: ["rgb(97, 49, 180)"],
          borderColor: ["rgb(97, 49, 180)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Toro ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}

function carregargLinhasSimultaneoRico(json) {
  let rico = _.map(json, "rico");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("rico"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Rico`,
          //   label: `Número de `,
          data: rico,
          backgroundColor: ["rgb(255, 82, 0)"],
          borderColor: ["rgb(255, 82, 0)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Rico ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
function carregargLinhasSimultaneoVitreo(json) {
  let vitreo = _.map(json, "vitreo");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("vitreo"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Vitreo`,
          //   label: `Número de `,
          data: vitreo,
          backgroundColor: ["rgb(0, 66, 163)"],
          borderColor: ["rgb(0, 66, 163)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Vitreo ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
function carregargLinhasSimultaneoGeral(json) {
  let geral = _.map(json, "geral");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("geral"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Geral`,
          //   label: `Número de `,
          data: geral,
          backgroundColor: ["rgb(3, 102, 54)"],
          borderColor: ["rgb(3, 102, 54)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Geral ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
function carregargLinhasSimultaneoGenial(json) {
  let genial = _.map(json, "genial");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("genial"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Genial`,
          //   label: `Número de `,
          data: genial,
          backgroundColor: ["rgb(51, 135, 215)"],
          borderColor: ["rgb(51, 135, 215)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Genial ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
function carregargLinhasSimultaneoWarren(json) {
  let warren = _.map(json, "warren");
  let dates = _.map(json, "data");

  linhas = new Chart(document.getElementById("warren"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Warren`,
          //   label: `Número de `,
          data: warren,
          backgroundColor: ["rgb(238, 61, 108)"],
          borderColor: ["rgb(238, 61, 108)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Usuários Simultaneos - Warren ",
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  });
}
