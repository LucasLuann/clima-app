import React from "react";
import { Forecast } from "@/types/forecast";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ForecastCard = ({ forecast }: { forecast: Forecast }) => {
  return (
    <div className="flex gap-2 my-2">
      {forecast.forecast.forecastday.map((day) => (
        <Card
          key={day.date}
          className="w-full p-4 bg-gradient-to-br from-blue-300 to-blue-700 text-white shadow-lg rounded-xl"
        >
          <CardHeader className="text-center ">
            <CardTitle className="text-lg font-semibold tracking-wide">
              {new Date(day.date).toLocaleDateString("pt-BR")}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <div className="text-center">
              <p className="text-xl font-bold">{forecast.location.name}</p>
              <p className="text-sm opacity-80">
                {forecast.location.region}, {forecast.location.country}
              </p>
            </div>
            <Image
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <p className="text-lg font-medium">{day.day.condition.text}</p>
            <p className="text-4xl font-bold">{day.day.maxtemp_c}°C</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ForecastCard;
