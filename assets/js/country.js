// import formaterValor from "./index.js";

let linhas;

//Tradução

let data_type = {
  Deaths: "Mortes",
  Recovered: "Recuperados",
  Confirmed: "Confirmados",
};
// Função imediata

(async () => {
  document.getElementById("filtro").addEventListener("click", handlerFilter);

  //RETORNAR TODAS AS PRMOMISSES , INDEPENDENTE SE FORAM RESOLVIDAS OU NÃO
  let paises = await Promise.allSettled([
    axios.get("https://api.covid19api.com/countries"),
    axios.get(
      `https://api.covid19api.com/country/Brazil?from=${new Date(
        2021,
        04,
        05,
        -3,
        0
      ).toISOString()}&to=${new Date(2021, 04, 25, -3, 0, 0).toISOString()}`
    ),
    axios.get(
      `https://api.covid19api.com/country/Brazil?from=${new Date(
        2021,
        04,
        04,
        -3,
        0
      ).toISOString()}&to=${new Date(2021, 04, 24, -3, 0, 0).toISOString()}`
    ),
  ]);

  //Controle se as Promisses foram executadas
  if (paises[0].status === "fulfilled") {
    carregarPaises(paises[0].value.data);
  }

  if (paises[1].status === "fulfilled" && paises[2].status === "fulfilled") {
    carregargKpis(paises[1].value.data);
    carregargLinhas(paises[1].value.data, paises[2].value.data, "Deaths");
  }
})();

function carregarPaises(paises) {
  let combo = document.getElementById("cmbCountry");
  let paisesOrdenadosPorNome = _.orderBy(paises, ["Country"], ["asc"]);

  //iteração nos Paises
  for (index in paisesOrdenadosPorNome) {
    combo.options[combo.options.length] = new Option(
      paisesOrdenadosPorNome[index].Country,
      paisesOrdenadosPorNome[index].Slug,
      paisesOrdenadosPorNome[index].Country === "Brazil",
      paisesOrdenadosPorNome[index].Country === "Brazil"
    );
  }
}

function carregargKpis(dados) {
  document.getElementById("kpiconfirmed").innerHTML = formaterValor(
    _.last(dados).Confirmed
  );
  document.getElementById("kpideaths").innerHTML = formaterValor(
    _.last(dados).Deaths
  );
  document.getElementById("kpirecovered").innerHTML = formaterValor(
    _.last(dados).Recovered
  );
}

function carregargLinhas(json, jsonDelta, dataType) {
  let dates = _.map(json, "Date");
  let values = _.map(json, dataType);
  let valuesDelta = _.map(jsonDelta, dataType);

  // Calculo das Informações diarias
  values = _.each(values, (x, index) => {
    values[index] = values[index] - valuesDelta[index];
  });

  // Calculo da media com funções lodash
  //

  let avg = _.times(values.length, _.constant(_.mean(values)));

  linhas = new Chart(document.getElementById("linhas"), {
    type: "line",
    data: {
      //Legendas
      labels: dates,
      //Dados em datasets pois podemos ter varias barras
      datasets: [
        {
          label: `Número de  ${data_type[dataType]}`,
          //   label: `Número de `,
          data: values,
          backgroundColor: ["rgba(255, 140, 13, 0.7)"],
          borderColor: ["rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        },
        {
          label: `Média de ${data_type[dataType]}`,
          data: avg,
          backgroundColor: ["rgba(0, 751, 64, 1)"],
          borderColor: ["rgba(0, 0, 90, 1)"],
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
          text: "Covids na Semana ",
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
async function handlerFilter() {
  let pais = document.getElementById("cmbCountry").value;
  let dataInicio = new Date(document.getElementById("date_start").value);
  let dataFim = new Date(document.getElementById("date_end").value);

  dataInicio = new Date(
    dataInicio.getFullYear(),
    dataInicio.getMonth(),
    dataInicio.getDate() + 1,
    -3,
    0,
    1,
    0
  );

  dataFim = new Date(
    dataFim.getFullYear(),
    dataFim.getMonth(),
    dataFim.getDate() + 1,
    -3,
    0,
    0,
    0
  );

  let dataInicioDelta = new Date(
    dataInicio.getFullYear(),
    dataInicio.getMonth(),
    dataInicio.getDate(),
    -3,
    0,
    0,
    0
  );

  let dataFimDelta = new Date(
    dataFim.getFullYear(),
    dataFim.getMonth(),
    dataFim.getDate(),
    -3,
    0,
    1,
    0
  );

  let paises = await Promise.allSettled([
    axios.get(
      `https://api.covid19api.com/country/${pais}?from=${dataInicio.toISOString()}&to=${dataFim.toISOString()}`
    ),
    axios.get(
      `https://api.covid19api.com/country/${pais}?from=${dataInicioDelta.toISOString()}&to=${dataFimDelta.toISOString()}`
    ),
  ]);

  if (paises[0].status === "fulfilled" && paises[1].status === "fulfilled") {
    linhas.destroy();
    carregargKpis(paises[0].value.data);
    carregargLinhas(
      paises[0].value.data,
      paises[1].value.data,
      document.getElementById("cmbData").value
    );
  }
}

function formaterValor(valor) {
  return valor.toLocaleString("pt-br");
}
