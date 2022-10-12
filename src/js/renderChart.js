import data from "./data.json";

const chartEl = document.getElementById("chart-el");

export function renderChart(day) {
  data.forEach(function (bar) {
    if (day === bar.day) {
      chartEl.innerHTML += `
              <tr class="bar-el">
                <th scope="row" class="label">${bar.day}</th>
                <td style="--size: calc(${bar.amount} / 100);" class="current-day bar">
                  <span class="data" >$${bar.amount}</span>
                </td>
              </tr>
  `;
    } else {
      chartEl.innerHTML += `
              <tr class="bar-el">
                <th scope="row" class="label">${bar.day}</th>
                <td style="--size: calc(${bar.amount} / 100);" class="bar">
                  <span class="data">$${bar.amount}</span>
                </td>
              </tr>
  `;
    }
  });
}
