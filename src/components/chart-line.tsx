"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

const ChartLine = ({ forecast }: { forecast: Forecast }) => {
  const chartData = Array.isArray(forecast?.forecast?.forecastday)
    ? forecast.forecast.forecastday.map((item) => ({
        date: new Date(item.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        }),
        avg: item.day.avgtemp_c,
        max: item.day.maxtemp_c,
        min: item.day.mintemp_c,
      }))
    : [];

  const chartConfig = {
    min: {
      label: "Temperatura Mínima (°C)",
      color: "hsl(var(--chart-2))",
    },
    max: {
      label: "Temperatura Máxima (°C)",
      color: "hsl(var(--chart-1))",
    },
    avg: {
      label: "Temperatura Média (°C)",
      color: "hsl(var(--color-sidebar-primary))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gráfico de Temperatura</CardTitle>
        <CardDescription>
          Mínimas e Máximas para {forecast?.location?.name || ""}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <YAxis
              domain={["dataMin - 2", "dataMax + 2"]} // Adiciona espaço acima e abaixo
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => `${value}°C`}
            />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="max"
              type="natural"
              fill="var(--chart-1)"
              fillOpacity={0.3}
              stroke="var(--chart-1)"
              strokeWidth={2}
            />
            <Area
              dataKey="avg"
              type="monotone"
              fill="var(--chart-5)"
              fillOpacity={0.2}
              stroke="var(--chart-5)"
              strokeWidth={2}
            />
            <Area
              dataKey="min"
              type="monotone" // Melhor para suavizar o gráfico
              fill="hsl(210, 80%, 60%)"
              fillOpacity={0.4} // Ajuste menor para suavizar a sobreposição
              stroke="hsl(210, 80%, 60%)"
              strokeWidth={2} // Dá mais destaque à linha
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartLine;
