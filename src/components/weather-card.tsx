import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Weather } from "@/types/weather";

const WeatherCard = ({ weather }: { weather: Weather }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-1">
            <p className="font-bold">{weather.location.name}</p>
            <p className="text-sm">{weather.location.region}</p>
            <p className="text-sm">{weather.location.country}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          width={100}
          height={100}
        />
        <p className="font-bold">{weather.current.condition.text}</p>
        <p className="text-2xl">{weather.current.temp_c}°C</p>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
