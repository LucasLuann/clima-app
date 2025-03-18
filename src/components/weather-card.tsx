import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Weather } from "@/types/weather";

const WeatherCard = ({ weather }: { weather: Weather }) => {
  return (
    <Card className="w-full p-4 bg-gradient-to-br from-blue-300 to-blue-700 text-white shadow-lg rounded-xl">
      <CardHeader className="text-center ">
        <CardTitle className="text-lg font-semibold tracking-wide">
          Hoje
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <div className="text-center">
          <p className="text-xl font-bold">{weather.location.name}</p>
          <p className="text-sm opacity-80">
            {weather.location.region}, {weather.location.country}
          </p>
        </div>
        <Image
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          width={80}
          height={80}
          className="drop-shadow-lg"
        />
        <p className="text-lg font-medium">{weather.current.condition.text}</p>
        <p className="text-4xl font-bold">{weather.current.temp_c}°C</p>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
