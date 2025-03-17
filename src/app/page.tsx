"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getWeather } from "@/lib/weather-service";

interface Weather {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Cuiaba");
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <main className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Previsão do Tempo</h1>
        <ThemeToggle />
      </div>

      <div>
        <h1>Clima em {weather?.location?.name || "Não encontrado"}</h1>
        <p>{weather?.current?.temp_c}°C</p>
        <p>{weather?.current?.condition?.text}</p>
      </div>
    </main>
  );
}
