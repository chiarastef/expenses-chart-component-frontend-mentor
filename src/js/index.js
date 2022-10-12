import "charts.css";
import "../scss/style.scss";

import { getDayOfWeek } from "./getDayOfWeek";
import { renderChart } from "./renderChart";

const currentDay = getDayOfWeek();

renderChart(currentDay);
