"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Forecast } from "@/types/forecast";

const BarChartWind = ({ forecast }: { forecast: Forecast }) => {
  const chartData = Array.isArray(forecast?.forecast?.forecastday)
    ? forecast.forecast.forecastday.map((item) => ({
        date: new Date(item.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        }),
        maxmph: item.day.maxwind_mph,
        maxkph: item.day.maxwind_kph,
      }))
    : [];

  const chartConfig = {
    maxmph: {
      label: "Milhas por Hora (Mph)",
      color: "hsl(var(--chart-2))",
    },
    maxkph: {
      label: "Kilômetros por Hora (Kph)",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="shadow-md hover:shadow-xl dark:hover:shadow-slate-800">
      <CardHeader>
        <CardTitle>Velocidade do Vento</CardTitle>
        <CardDescription>
          Velocidade Maxima para {forecast?.location?.name || ""}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="maxmph" fill="var(--chart-1)" radius={4} />
            <Bar dataKey="maxkph" fill="var(--chart-2)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartWind;
