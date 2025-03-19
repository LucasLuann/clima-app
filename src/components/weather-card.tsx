import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Weather } from "@/types/weather";
import { Droplets, Thermometer, Wind } from "lucide-react";

const WeatherCard = ({ weather }: { weather: Weather }) => {
  const { location, current } = weather;

  // Formatar data e hora
  const formatLocalTime = (timeString: string) => {
    const date = new Date(timeString);

    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Card>
      <CardHeader className="p-6 rounded-2xl w-[95%] mx-auto shadow-md">
        <div className="flex justify-between items-start">
          <div >
            <CardTitle className="text-2xl font-bold tracking-wide">{location.name}</CardTitle>
            <p className="text-sm opacity-90">
              {location.region && `${location.region}, `}
              {location.country}
            </p>
            <p className="text-xs opacity-75 mt-1">
              {formatLocalTime(location.localtime)}
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-gray-500">{current.temp_c}°C</div>
            <p className="text-sm">Sensação: {current.feelslike_c}°C</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            {current.condition.icon && (
              <Image
                src={`https:${current.condition.icon}`}
                alt={current.condition.text}
                width={50}
                height={50}
              />
            )}
            <span className="text-lg font-medium">
              {current.condition.text}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Vento</p>
              <p className="font-medium">
                {current.wind_kph} km/h ({current.wind_dir})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Umidade</p>
              <p className="font-medium">{current.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Índice UV</p>
              <p className="font-medium">{current.uv}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
