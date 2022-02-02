
// ГРАФИК МЕСЯЦЕВ
let lineChart = document.getElementById('lineChart').getContext('2d');


let chartLine = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11','12'],
   
    datasets: [{
        label: "по месяцам",
        backgroundColor: 'rgb(255, 99, 132)', 
        borderColor: 'rgb(255, 99, 132)', 
        data: [0, 10, 5, 2, 20, 30, 45, 20, 35, 25, 50, 60] 
    }]
},
 
options: {}
});



// ГРАФИК ВРЕМЕНА ГОДА
let oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

let oilData = {
    labels: [
        "Зима",
        "Весна",
        "Лето",
        "Осень"
    ],
    datasets: 
    [
        {
            data: [23, 9, 31, 37],
            backgroundColor: [
                "#8463FF",
                "#63FF84",
                "#FF6384",
                "#ffdc3d"
            ]
        }]

};



// ГРАФИК ПОЛ И ВОЗРАСТ
let pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});

let marksCanvas = document.getElementById("marksChart");

let marksData = {
  labels: ["до 25", "25-30", "30-35", "35-40", "40-45", "55 и старше"],
  datasets: [{
    label: "Женский пол",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [39, 35, 34, 27, 28, 19]
  }, {
    label: "Мужской пол",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [38, 31, 20, 19, 10, 2]
  }]
};

let radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
});


// ГРАФИК ПО ГОРОДАМ
let barChart = document.getElementById('barChart').getContext('2d');
let chartBar = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Екатеринбург', 'Казань', 'Москва', 'Уфа', 'Челябинск'],
        datasets: [{
            data: [56, 64, 60, 59, 63],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)'

            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 55
                }
            }]
        }
    }
});


// РАФИК ВОЗВРАТОВ
let popCanvas = document.getElementById("popChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

let popData = {
  datasets: [{
    label: ['Отношение заказа к возврату'],
    data: [{
      x: 100,
      y: 50,
      r: 50
    }, {
      x: 80,
      y: 30,
      r: 50
    }, {
      x: 60,
      y: 20,
      r: 40
    }, {
      x: 40,
      y: 10,
      r: 30
    }, {
      x: 20,
      y: 10,
      r: 10
    }, {
      x: 0,
      y: 0,
      r: 5
    }],
    backgroundColor: "#FF9966"
  }]
};

let bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData
});




