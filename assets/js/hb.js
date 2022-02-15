(async () => {
  //   document.getElementById("filtro").addEventListener("click", handlerFilter);

  //RETORNAR TODAS AS PRMOMISSES , INDEPENDENTE SE FORAM RESOLVIDAS OU NÃO
  let datas = await Promise.allSettled([
    axios.get("http://127.0.0.1:5500/assets/data/picoData.json"),
    // console.log(datas),
  ]);

  if (datas[0].status === "fulfilled") {
    const data = datas[0].value.data;
    carregargLinhasPico(data);
    carregargLinhasSimultaneo(data);
  }
})();

async function handlerFilter() {
  // console.log(datas);
}

function carregargLinhasPico(json) {
  let dates = _.map(json, "data");
  let nuinvest = _.map(json, "nuinvest");
  let rico = _.map(json, "rico");
  let vitreo = _.map(json, "vitreo");
  let geral = _.map(json, "geral");
  let genial = _.map(json, "genial");
  let warren = _.map(json, "warren");
  let toro = _.map(json, "toro");

  linhas = new Chart(document.getElementById("linhasPico"), {
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
          text: "Picos de Usuarios no Dia ",
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
          text: "Picos de Usuarios no Dia ",
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
