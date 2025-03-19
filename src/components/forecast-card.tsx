import React from "react";
import { Forecast } from "@/types/forecast";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer } from "lucide-react";

const ForecastCard = ({ forecast }: { forecast: Forecast }) => {

  const formatLocalTime = (timeString: string) => {
    const date = new Date(timeString);

    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      
    }).format(date);
  };

  return (
    <div className="flex gap-2 flex-wrap justify-between my-2 w-full">
      {forecast?.forecast?.forecastday?.map((item) => (
        <Card key={item.date} className="shadow-lg rounded-xl p-4 flex flex-1">
          <CardHeader className="text-center ">
            <CardTitle className="text-sm font-semibold tracking-wide">
              {formatLocalTime(item.date)}
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
              src={`https:${item.day.condition.icon}`}
              alt={item.day.condition.text}
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <p className="text-lg font-medium">{item.day.condition.text}</p>
            <div className="flex justify-around w-full mt-5">
              <div>
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4" />
                  <p className="text-center text-sm">Mínima</p>
                </div>
                <p className="text-3xl font-bold text-gray-500">{item.day.mintemp_c}°C</p>
              </div>
              <div>
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4" />
                  <p className="text-center text-sm ">Máxima</p>
                </div>
                <p className="text-3xl font-bold text-gray-500">
                  {" "}
                  {item.day.maxtemp_c}°C
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ForecastCard;
