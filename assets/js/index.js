//Url da API
// let summary = "https://api.covid19api.com/summary";

//Função imediata para ela se autoexecutar usando async await -  modo 1
(async () => {
  let summary = await axios.get("https://api.covid19api.com/summary");

  const global = summary.data.Global;
  const paises = { ...summary.data.Countries };

  //Chamar Metodos dos Graficos
  gKpis(global);
  gPizza(global);
  gBarra(paises);
})();

//Formatar Valor com pontuação de Acordo com o Brasil
function formaterValor(valor) {
  return valor.toLocaleString("pt-br");
}

//Pegar Dados da API com axios modo 2
// function api() {
//   axios
//     .get(summary)
//     .then((response) => {
//       const global = response.data.Global;
//       const paises = { ...response.data.Countries };

//       gKpis(global);
//       gPizza(global);
//       gBarra(paises);

//       // console.log(response);
//       // console.log(paises);
//     })
//     .catch((error) => console.log(error));
// }

// api();

function gPizza(global) {
  //Metodo 1 para simplificar
  let newcasosCovid = [
    global.NewConfirmed,
    global.NewDeaths,
    global.newRecovered,
  ];

  //Metodo 2
  // let newConfirmed = global.NewConfirmed;
  // let newDeaths = global.NewDeaths;
  // let newRecovered = global.NewRecovered;

  const pizza = new Chart(document.getElementById("pizza"), {
    type: "pie",
    data: {
      labels: ["Novos Confirmados", "Novas Mortes", "Novos Recuperados"],
      datasets: [
        {
          label: "# of Votes",
          data: newcasosCovid,
          backgroundColor: [
            "rgba(255, 110, 132, 0.7)",
            "rgba(54, 162, 235, 0.9)",
            "rgba(255, 206, 86, 0.2)",
            // "rgba(75, 192, 192, 0.2)",
            // "rgba(153, 102, 255, 0.2)",
            // "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            // "rgba(75, 192, 192, 1)",
            // "rgba(153, 102, 255, 1)",
            // "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Distribuição de Novos Casos de Covid",
        },
      },
    },
  });
}

function gBarra(paises) {
  //Ordenar Dados por Numero de Mortes(Decrescente) e Nome(Crescente)
  let paisesOrdenadosPorMorte = _.orderBy(
    paises,
    ["TotalDeaths", "Country"],
    ["desc", "asc"]
  );

  //Pegar apenas os 10 primeiros da Array com slice a partir do indice 0 10 posições
  let top10 = _.slice(paisesOrdenadosPorMorte, 0, 10);

  //Map nos Nomes e nos Numeros de Mortes
  let paisesMap = _.map(top10, "Country");
  let mortesMap = _.map(top10, "TotalDeaths");

  const barras = new Chart(document.getElementById("barras"), {
    type: "bar",
    data: {
      //Legendas
      labels: paisesMap,

      datasets: [
        {
          label: "# Covid 19 ",
          data: mortesMap,
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Total de Morte por País - Top 10",
        },
      },
    },
  });
}

function gKpis(global) {
  document.getElementById("confirmed").innerHTML = formaterValor(
    global.TotalConfirmed
  );

  document.getElementById("death").innerHTML = formaterValor(
    global.TotalDeaths
  );

  document.getElementById("recovered").innerHTML = formaterValor(
    global.TotalRecovered
  );

  document.getElementById("date").innerHTML = global.Date;
}

// export default { formaterValor };
