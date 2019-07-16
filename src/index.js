let cities = document.querySelector("#languageList");
let cityInfoContainer = document.querySelector(".cityInfoContainer");
let input = document.querySelector("#txtAutoComplete");
let loader = document.querySelector(".loader");

function getCityNames() {
  return new Promise((resolve, rejecet) => {
    fetch("https://katehrybkova.github.io/CItiesFilter/src/analytics/fixtures/cities.json")
      .then(res => res.json())
      .then((data) => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      });
  })
}

function getCityInfo(cityName) {
  return new Promise((resolve, reject) => {
    fetch(`https://katehrybkova.github.io/CItiesFilter/src/analytics/fixtures/data/${cityName.toLowerCase()}.json`)
      .then(res => res.json())
      .then((data) => {
        setTimeout(() => {resolve(data);
          loader.style.display = "none";
        }, 2000);
      })
      .catch(err => {
        reject(err)
      });
  })
}

getCityNames()
  .then(data => {
    data.map(el => cities.innerHTML += `<option value=${el.city}>`)
  })

input.addEventListener("change", function (e) {
  loader.style.display = "block";

  getCityInfo(this.value)
    .then(data => {
      console.log(data)
      data.forEach(city => cityInfoContainer.innerHTML += `<p> Statistic of the city in ${city.year}:</p><p> Population of city - ${city.population}</p><p> Сost of living - ${city["cost-of-living"]}$</p><p>-------||--------</p>`)
    })
    .catch(err => {
      console.log('err', err)
    })
})
