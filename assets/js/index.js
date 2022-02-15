(async () => {
  let datas = await Promise.allSettled([
    axios.get("http://127.0.0.1:5500/assets/data/simultaneoData.json"),
    axios.get("http://127.0.0.1:5500/assets/data/picoData.json"),
  ]);

  if (datas[0].status === "fulfilled") {
    const data = datas[0].value.data;
    carregargLinhasSimultaneo(data);
  }

  if (datas[1].status === "fulfilled") {
    const data = datas[1].value.data;
    carregargLinhasPico(data);
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
          text: "Usuários Simultaneos ",
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
          text: "Picos de Usuarios no Dia - Todas Corretoras ",
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

// function gBarra(paises) {
//   //Ordenar Dados por Numero de Mortes(Decrescente) e Nome(Crescente)
//   let paisesOrdenadosPorMorte = _.orderBy(
//     paises,
//     ["TotalDeaths", "Country"],
//     ["desc", "asc"]
//   );

//   //Pegar apenas os 10 primeiros da Array com slice a partir do indice 0 10 posições
//   let top10 = _.slice(paisesOrdenadosPorMorte, 0, 10);

//   //Map nos Nomes e nos Numeros de Mortes
//   let paisesMap = _.map(top10, "Country");
//   let mortesMap = _.map(top10, "TotalDeaths");

//   const barras = new Chart(document.getElementById("barras"), {
//     type: "bar",
//     data: {
//       //Legendas
//       labels: paisesMap,

//       datasets: [
//         {
//           label: "# Covid 19 ",
//           data: mortesMap,
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.7)",
//             "rgba(54, 162, 235, 0.7)",
//             "rgba(255, 206, 86, 0.7)",
//             "rgba(75, 192, 192, 0.7)",
//             "rgba(153, 102, 255, 0.7)",
//             "rgba(255, 159, 64, 0.7)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Total de Morte por País - Top 10",
//         },
//       },
//     },
//   });
// }

// function gKpis(global) {
//   document.getElementById("confirmed").innerHTML = formaterValor(
//     global.TotalConfirmed
//   );

//   document.getElementById("death").innerHTML = formaterValor(
//     global.TotalDeaths
//   );

//   document.getElementById("recovered").innerHTML = formaterValor(
//     global.TotalRecovered
//   );

//   document.getElementById("date").innerHTML = global.Date;
// }

// export default { formaterValor };
