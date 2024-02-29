async function get_data(){
var res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
var res_data = await res.json()
var chennai_data = res_data.TN.districts.Chennai.total
console.log(chennai_data);
var div = document.createElement("div")
div.className = "cards"
div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
<div class="card-header"><b>TamilNadu</b></div>
<div class="card-body text-primary">
  <h5 class="card-title">Chennai</h5>
  <p class="card-text">Confirmed:${chennai_data.confirmed}</p>
  <p class="card-text">Deceased:${chennai_data.deceased}</p>
  <p class="card-text">Recovered:${chennai_data.recovered}</p>
  <p class="card-text">Tested:${chennai_data.tested}</p>
</div>
</div>`
document.body.append(div)

}
get_data()
