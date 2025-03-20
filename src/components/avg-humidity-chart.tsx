"use client";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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

const AvgHumidity = ({ forecast }: { forecast: Forecast }) => {
  const chartData = Array.isArray(forecast?.forecast?.forecastday)
    ? forecast.forecast.forecastday.map((item) => ({
        date: new Date(item.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        }),
        avghumidity: item.day.avghumidity,
      }))
    : [];

  const chartConfig = {
    avghumidity: {
      label: "Úmidade Média (%)",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="shadow-md hover:shadow-xl dark:hover:shadow-slate-800">
      <CardHeader>
        <CardTitle>Úmidade Média Diária (%)</CardTitle>
        <CardDescription>
          Úmidade Média - {forecast?.location?.name || ""}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value}
              interval="preserveStartEnd"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="avghumidity"
              type="natural"
              stroke="var(--chart-1)"
              strokeWidth={3}
              dot={{
                fill: "var(--chart-5)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AvgHumidity;
