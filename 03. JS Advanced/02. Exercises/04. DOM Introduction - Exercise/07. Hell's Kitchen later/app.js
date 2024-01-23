function solve() {

   let html = {
      input: document.querySelector("#inputs textarea"),
      bestName: document.querySelector("#bestRestaurant p"),
      bestWorkers: document.querySelector("#workers p"),
   }

   let getBest = data =>
      Object.entries(data).sort(
         (x, y) => getAverage(y[1]) - getAverage(x[1])
      )[0]

   let getAverage = workersData =>
      workersData.reduce((a, v) => a + v[1], 0) / workersData.length

   function deserialize(data) {
      let getWorkers = data =>
         data
            .split(", ")
            .map(x => x.split(" ").map(y => (isNaN(y) ? y : Number(y))))

      return JSON.parse(data)
         .map(x => x.split(" - "))
         .reduce((a, v) => {
            const [name, workers] = v

            a[name] = a[name]
               ? [...a[name], ...getWorkers(workers)]
               : getWorkers(workers)
            return a
         }, {})
   }

   function displayResult(data) {
      let [name, workers] = data
      workers = workers.sort((x, y) => y[1] - x[1])

      html.bestName.innerHTML = `Name: ${name} Average Salary: ${getAverage(
         workers
      ).toFixed(2)} Best Salary: ${workers[0][1].toFixed(2)}`

      html.bestWorkers.innerHTML = `${workers
         .map(x => `Name: ${x[0]} With Salary: ${x[1]}`)
         .join(" ")}`
   }

   document
      .getElementById("btnSend")
      .addEventListener("click", () =>
         displayResult(getBest(deserialize(html.input.value)))
      )
}