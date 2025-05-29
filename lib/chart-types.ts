import type { ChartData, ChartOptions } from "chart.js"

export type BarChartProps = {
  data: ChartData<"bar">
  options?: ChartOptions<"bar">
}

export type LineChartProps = {
  data: ChartData<"line">
  options?: ChartOptions<"line">
}
